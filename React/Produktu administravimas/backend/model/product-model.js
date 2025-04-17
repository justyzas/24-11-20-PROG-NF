import { z } from "zod";
import UpdateProductSchema from "../lib/validations/update-product.js";
import db from "../config/connect-mysql.js";
export class ProductModel{


    //1. sukurti produktą
    static async createProduct(productDto)
    {
        if(!(productDto instanceof ProductDTO))
            throw new Error("Expected ProductDTO for product registration!", {cause: "ERR_INVALID_OBJ_AT_PRODUCT_CREATION"});
        const data = productDto.getObjectForCreation();

        const [result] = await db.execute(
            `INSERT INTO product 
            (name, price)
            VALUES (?, ?);`,
            [data.name, data.price]
        );
        productDto.id = result.insertId;
        return productDto;
    }

    //2. gauti vieną produktą
    static async getProduct(id){
        if(typeof id !== "number") throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute(`SELECT * FROM product WHERE id = ?;`, [
            id,
        ]);
        if (result.length === 0)
            throw new Error("Product was not found", {
                cause: "NOT_FOUND",
            });
        return new ProductDTO(result[0]);
    }
    //3. gauti produktų sąrašą
    static async getAllProducts()
    {
         const [result] = await db.execute("SELECT * FROM product;");
        const productDtoArray = result.map(product=>new ProductDTO(product));
         return productDtoArray;
    }
    //4. atnaujinti produktą
    static async updateProduct(id, updateData)
    {
        // TODO: Integruoti isNaN funkciją id patikrinimui visuose modeliuose
        if(typeof id !== "number") throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const validatedUpdateData = UpdateProductSchema.parse(updateData);
        const [fieldsString, fieldValuesArray] = generateUpdateSegment(validatedUpdateData);
        const [result, options] = await db.execute(
            `UPDATE product SET ${fieldsString} WHERE id = ?;`,
            [...fieldValuesArray, id]
        );
    }
    //5. ištrinti produktą
    static async deleteProduct(id)
    {
        if(typeof id !== "number") throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute(`DELETE FROM product WHERE id = ?;`, [id]);
        console.log(result);
    }
}




export const ProductCreationValidation = z.object({
    id: z.number().optional(),
    name: z.string().min(5).max(255),
    description: z.string().max(1000).optional(),
    price: z.number(),
    quantity: z.number().optional(),
    status: z
    .enum(["Aktyvus", "Nebetiekiamas", "Mažėjantis likutis"])
    .optional(),
    created_at: z.date().optional(),
    deleted_at: z.date().optional(),
    updated_at: z.date().optional(),
})

export class ProductDTO{
    // Object [object]
    id;
    name;
    description;
    price;
    quantity;
    status;
    created_at;
    deleted_at;
    updated_at;


    constructor(obj)
    {

        const validatedProduct = ProductCreationValidation.parse(obj);
        Object.entries(validatedProduct).forEach(([key, value])=>{
            this[key] = value;
        });
    }

    toJSON()
    {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            quantity: this.quantity,
            status: this.status,
            created_at: this.created_at,
            deleted_at: this.deleted_at,
            updated_at: this.updated_at
        }
    }

    getObjectForCreation()
    {
        return {name: this.name, price: this.price};//others have default or is null
    }

    static getProductFieldsFromAnotherObject(obj)
    {
        const productObj = {};
        Object.entries(obj)
        .filter(([fieldName]) => fieldName.toLowerCase().startsWith("product_"))
        .forEach(([fieldName, value])=>{
            productObj[fieldName.replace("product_", "")] = value;
        });
        return new ProductDTO(productObj);
    }
}