import { ProductCreationValidation, ProductDTO } from "./product-model";
import { z } from "zod";
import db from "../config/connect-mysql.js";

export class ProductImageModel{
    // 1. Nuotraukos pridėjimas produktui
    static async addImage(productImageDto)
    {
        if(!(productImageDto instanceof ProductImageDTO))throw new Error("Expected ProductImageDTO for product image registration!", {cause: "ERR_INVALID_OBJ_AT_PRODUCT_IMAGE_CREATION"});
        const { productId: pid, productImageFileName: pifn } = productImageDto.getObjectForCreation();
        const [result] = await db.execute("INSERT INTO product_image(productId, productImageFileName) VALUES(?, ?)",
            [pid, pifn])
        productImageDto.id = result.insertId;
        return productImageDto;
    }
    // 2. Nuotraukos ištrynimo pagal ID
    static async deleteImage(id)
    {
        if(isNaN(id)) throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute("DELETE FROM product_image WHERE id=?",[id]);
        console.log(result);
    }
    // 3. Nuotraukos gavimas iš DB pagal ID
    static async getImage(id)
    {
        if(isNaN(id)) throw new Error("Expected to get id as a number", "ERR_WRONG_FIELD_TYPE");
        const [result] = await db.execute("SELECT FROM product_image WHERE id=?",[id]);
        if (result.length === 0)
            throw new Error("Product Image was not found", {
                cause: "NOT_FOUND",
            });
        return new ProductImageDTO(result[0]);
    }
    // 4. Visų produkto nuotraukų gavimas
    static async getAllProductImages(options)
    {
        // const options = {
        //     include: "product"
        // }
        let selectAttributes = "*";
        let join = "";
        if(options?.include === "product")
        {
            selectAttributes = `pi.id as id,
                                pi.productImageFileName as productImageFileName,
                                p.id as product_id,
                                p.name as product_name,
                                p.description as product_description,
                                p.price as product_price,
                                p.quantity as product_quantity,
                                p.status as product_status,
                                p.created_at as product_created_at,
                                p.deleted_at as product_deleted_at,
                                p.updated_at as product_updated_at`
            join = " LEFT JOIN product On pi.productId = p.id;";
        }
        const [result] = await db.execute(`SELECT ${selectAttributes} FROM product_image${join}`);
        return result.map(r=>new ProductImageDTO(r));
    }
}

const ProductImageDTOSchema = z.object({
    id: z.number().min(1).optional(),
    productId: z.number().min(1),
    product: ProductCreationValidation.optional(),
    productImageFileName: z.string().min(2).max(255).trim()
})

export class ProductImageDTO{
    id;
    productId;
    product;
    productImageFileName;
    
    constructor(productImage){
        const isThereAProductFromDB = Object.keys(productImage).some(key=>key.includes("product_"));
        if(isThereAProductFromDB)return this.fromDbResponse(productImage);
        // ---------------------
        const validProductImage = ProductImageDTOSchema.parse(productImage);
        this.#setProductKeysFromEntries(productImage);
        if(validProductImage?.product)
            this.product = new ProductDTO(validProductImage.product);
    }
    #setProductKeysFromEntries(o)
    {
        Object.entries(o).forEach(([key, value])=>{
            this[key] = value;
        });
    }
    fromDbResponse(productImage)
    {
        const productDto = ProductDTO.getProductFieldsFromAnotherObject(productImage);
        this.#setProductKeysFromEntries(productImage);
        return this;
    }

    toJSON()
    {
        return {
            id: this.id,
            product: {
                ...(this?.product.toJSON() || {}),
                id: this.productId
            },
            productImageFileName: this.productImageFileName
        }
    }

    getObjectForCreation()
    {
        return {
            productId: this.productId,
            productImageFileName: this.productImageFileName
        }
    }
}