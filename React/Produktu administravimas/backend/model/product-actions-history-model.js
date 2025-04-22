import { ProductCreationValidation, ProductDTO } from "./product-model.js";
import { UserCreationValidation, UserDTO } from "./user-model.js";
import db from "../config/connect-mysql.js";
import { z } from "zod";


export class ProductActionsHistoryModel{
// 1. GET ALL HISTORY
    static async getAllHistory()
    {
        const [result] = await db.execute(`SELECT * from product_actions_history`);
        return result.map(pah=>new ProductActionsHistoryDTO(pah));
    }
// 2. GET USER HISTORY
    static async getUserHistory(userId){
        if(isNaN(+userId)) throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute(`SELECT * FROM product_actions_history WHERE userId = ?`, [userId]);
        return result.map(pah=>new ProductActionsHistoryDTO(pah));
    }
// 3. GET PRODUCT HISTORY
    static async getProductHistory(productId){
        if(isNaN(+productId)) throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute(`SELECT * FROM product_actions_history WHERE productId = ?`, [productId]);
        return result.map(pah=>new ProductActionsHistoryDTO(pah));
    }
// 4. CREATE PRODUCT HISTORY
    static async createHistory(productActionsHistoryDTO){
        if(!(productActionsHistoryDTO instanceof ProductActionsHistoryDTO))throw new Error("Expected ProductActionsHistoryDTO for product action history registration!", {cause: "ERR_INVALID_OBJ_AT_PRODUCT_IMAGE_CREATION"})
        const {productId, userId, actionType, details} = productActionsHistoryDTO;
        const [result] = await db.execute(`INSERT INTO product_actions_history (productId, userId, actionType, details) VALUES(?,?,?,?)`, [productId, userId, actionType, details])
        productActionsHistoryDTO.id = result.insertId;
        return productActionsHistoryDTO;
    }   
}

export const ProductActionsHistoryCreationValidation = z.object({
    id: z.number().optional(),
   productId: z.number().int(),
   product: ProductCreationValidation.optional(),
   userId: z.number().int(),
   user: UserCreationValidation.optional(),
   actionType: z.enum(["delete", "update", "create"]),
   details: z.string().optional(),
   date: z.date().optional(),
});


 export class ProductActionsHistoryDTO{
    id;
    productId;
    product;
    userId;
    user;
    actionType;
    details = null;
    date;


    constructor(obj)
    {
        ProductActionsHistoryCreationValidation.parse(obj);
        const objKeys = Object.keys(obj);
        const hasProductKeys = objKeys.some(key=>key.toLowerCase().startsWith("product_"));
        const hasUserKeys = objKeys.some(key=>key.toLowerCase().startsWith("user_"));

        if(hasProductKeys)this.addProduct(obj);
        if(hasUserKeys)this.addUser(obj);

        Object.entries(obj).forEach(([key,value])=>{
            this[key] = value;
        });
    }


    addProduct(obj)
    {
          const productFields = {};
          Object.entries(obj).filter(([key])=>key.toLowerCase().startsWith("product_")).forEach(([key,value])=>{
            productFields[key.replace("product_", "")] = value;
            delete obj[key];
          });
        const productDto = new ProductDTO(productFields);
        this.product = productDto;
        this.productId = productDto.id;
    }

    addUser(obj)
    {
        const userFields = {};
          Object.entries(obj).filter(([key])=>key.toLowerCase().startsWith("user_")).forEach(([key,value])=>{
            userFields[key.replace("user_", "")] = value;
            delete obj[key];
          });
        const userDto = new UserDTO(userFields);
        this.user = userDto;
        this.userId = userDto.id;
    }

    toJSON()
    {
        return {...this};
    }
    
    getObjectForCreation(){
        return {
            productId: this.productId,
            userId: this.userId,
            actionType: this.actionType,
            details: this.details,
        }
    }

}