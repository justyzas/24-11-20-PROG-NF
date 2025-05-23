import {
	generateSalt,
	hashPassword,
} from "../lib/security.js";
import UpdateUserSchema from "../lib/validations/update-user.js";
import db from "../config/connect-mysql.js";
import {z} from "zod";
export class UserModel{

    static async create(userDto)
    {
        if(!(userDto instanceof UserDTO))
            throw new Error("Expected UserDTO for user registration!", {cause: "ERR_INVALID_OBJ_AT_USER_CREATION"});
        const userData = userDto.getObjectForRegistration();
        const [result] = await db.execute(
            `INSERT INTO user 
            (firstName, lastName, email, password, salt)
            VALUES (?, ?, ?, ?, ?);`,
            [userData.firstName, userData.lastName, userData.email, userData.password, userData.salt]
        );
        userDto.id = result.insertId;
        return userDto;
    }

    static async getUserByEmail(email) {
        if(typeof email !== "string") throw new Error("Expected to get email as a string", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute(`SELECT * FROM user WHERE email = ?;`, [
            email,
        ]);
        if (result.length === 0)
            throw new Error("User was not found", {
                cause: "NOT_FOUND",
            });
        return new UserDTO(result[0]);
    }

    static async getUserById(id) {
        if(typeof id !== "number") throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute(`SELECT * FROM user WHERE id = ?;`, [
            id,
        ]);
        if (result.length === 0)
            throw new Error("User was not found", {
                cause: "NOT_FOUND",
            });
        return new UserDTO(result[0]);
    }

    static async getAll(options)
    {
        let sqlSortStatement = "";
        if(options?.sort?.attribute){
            sqlSortStatement = ` ORDER BY ${options?.sort?.attribute} ${options?.sort?.order || "ASC"}`
        }
       const [result] = await db.execute(`SELECT * FROM user${sqlSortStatement};`);
        const userDtoArray = result.map(user=>new UserDTO(user));
        return userDtoArray;
    } 

    static async update(id, updateData)
    {
        const validatedUpdateData = UpdateUserSchema.parse(updateData);
        const [fieldsString, fieldValuesArray] = generateUpdateSegment(validatedUpdateData);
        const [result, options] = await db.execute(
            `UPDATE user SET ${fieldsString} WHERE id = ?;`,
             [...fieldValuesArray, id]
        );
    }

    static async deleteById(id)
    {
        if(typeof id !== "number") throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute(`DELETE FROM user WHERE id = ?;`, [id]);
        console.log(result);
    }

    static async deleteByEmail(email)
    {
        if(typeof email !== "string") throw new Error("Expected to get email as a string", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute(`DELETE FROM user WHERE email = ?;`, [email]);
    }
}


export const UserCreationValidation = z.object({
    id: z.number().int().optional(),
    firstName: z.string().min(3).max(255),
    lastName: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().optional(),
    salt: z.string().optional()
});
// DTO klasės - Data transfer object. Duomenų pernešimo objektai, 
// skirti apibrėžti naudojamo modelio struktūrai
export class UserDTO{
    id;
    firstName;//privalomas
    lastName;//privalomas
    email;//privalomas
    #password;
    #salt;

    constructor(idOrUserObj, firstName, lastName, email, password, salt)
    {
        if(typeof idOrUserObj === "object")
        {  
            this.#fromObject(idOrUserObj);
        }
        else{
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.#password = password;
            this.#salt = salt;
        }
    }

    #fromObject(object)
    {
        if(object.id)
        {
            this.id = object.id;
            this.firstName = object.firstName;
            this.lastName = object.lastName;
            this.email = object.email;
            this.#password = object.password;
            this.#salt = object.salt;
        }
        else this.#fromObjectForRegistration(object);
    }

    #fromObjectForRegistration(object)
    {
        this.firstName = object.firstName;
        this.lastName = object.lastName;
        this.email = object.email;
        this.#salt = generateSalt();
        this.#password = hashPassword(object.password, this.#salt);
    }

    getObjectForRegistration()
    {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.#password,
            salt: this.#salt
        }
    }

    getPassword()
    {
        return this.#password;
    }

    getSalt()
    {
        return this.#salt;
    }
}