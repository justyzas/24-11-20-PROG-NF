import express from "express";
import Product from "../models/Product.js";
import ProductActionsHistory from "../models/ProductActionsHistory.js";
import ProductImage from "../models/ProductImage.js";
import { handle } from "../lib/handleRouteHandlerErorrs.js";
import { ProductCreationValidation } from "../lib/validations/create-product.js";
import { isLogged } from "../lib/middlewares/index.js";
const router = express.Router();

//Sukurimas
router.post("/", isLogged ,async(req, res)=>{
   try{
        const validatedData = ProductCreationValidation.parse(req.body);
        const product = await Product.create(validatedData);
        const productHistoryRecord = await ProductActionsHistory.create({
            productId: product.id, 
            userId: req.session.user.id, 
            actionType: "create"
        });
        return res.status(201).json({ product: product.toJSON(), report: productHistoryRecord.toJSON()});
   }    
   catch(err)
   {
        handle(err,res);
   }
});

router.get("/", isLogged, async(req, res)=>{
    try{
        // localhost/products?withImage=yes
        const allProducts = await Product.findAll({include: [ProductImage, ProductActionsHistory], order: [["id", "DESC"]]})
        res.status(200).json(allProducts);
    }
    catch(err){
        handle(err,res);
    }
});

router.get("/:id", async(req, res)=>{
    // localhost/products/4?&withUser=yes&withProduct=yes
    try{

    }
    catch{
        handle(err,res);
    }
});

router.delete("/:id", async (req, res)=>{
    try{

    }
    catch{
        handle(err,res);
    }
});

router.put("/:id", async (req, res)=>{
    try{

    }
    catch{
        handle(err,res);
    }
});


export default router;