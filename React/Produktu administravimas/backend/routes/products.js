import express from "express";
import { ProductDTO, ProductModel } from "../model/product-model.js";
import { ProductActionsHistoryModel, ProductActionsHistoryDTO} from '../model/product-actions-history-model.js';
import { handle } from "../lib/handleRouteHandlerErorrs.js";
const router = express.Router();

//Sukurimas
router.post("/", async(req, res)=>{
   try{
        if(!req.session?.user?.isLoggedIn || false) return res.status(403).json({ message: "Turite prisijungti kad kurtumėte produktus" });
        const productDTO = new ProductDTO(req.body);
        await ProductModel.createProduct(productDTO);
        const productActionsHistoryDTO = new ProductActionsHistoryDTO({
            productId: productDTO.id,
            userId: req.session.user.id,
            actionType: "create",
        });
        await ProductActionsHistoryModel.createHistory(productActionsHistoryDTO);
        return res.status(201).json({ product: productDTO.toJSON(), report: productActionsHistoryDTO.toJSON()});
   }    
   catch(err)
   {
        handle(err,res);
   }
});

router.get("/", async(req, res)=>{
    try{
        // localhost/products?userId=5&productId=22&withUser=yes&withProduct=yes
       let {userId, productId, withUser, withProduct} = req.query;
       withProduct = withProduct === "yes";
       withUser = withUser === "yes";
       userId = +userId
       productId = +productId
    }
    catch{
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