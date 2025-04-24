import { positiveAnswer } from "../lib/data/enums.js";
import Product from "../models/Product.js";
import ProductActionsHistory from "../models/ProductActionsHistory.js";
import express from "express";
import User from "../models/user.js";
import { handle } from "../lib/handleRouteHandlerErorrs.js";
import { isLogged, withRouteParam } from "../lib/middlewares/index.js";

const router = express.Router();

router.get("/", isLogged, async(req,res)=>{
    try{
        // ?withProduct=yes&withUser=yes&productId=4
        const {withProduct, withUser, productId} = req.query;

        const whereOptions = {};
        const includeArray = [];

        if(positiveAnswer.includes(withProduct))includeArray.push(Product);
        if(positiveAnswer.includes(withUser))includeArray.push({model: User, attributes: {exclude: ["password", "salt"]}});

        if(productId && !isNaN(productId))whereOptions.productId = productId;

        const allProductsHistory = await ProductActionsHistory.findAll({where: whereOptions ,include: includeArray, order: [["date", "DESC"]]});
        res.status(200).json(allProductsHistory);
    }
    catch(err)
    {
        handle(err,res);
    }
});
router.get("/:id",withRouteParam("id"), isLogged, async(req,res)=>{
    try{
        const {id} = req.params;
        // ?withProduct=yes&withUser=yes
        const {withProduct, withUser} = req.query;

        const includeArray = [];
        if(positiveAnswer.includes(withProduct))includeArray.push(Product);
        if(positiveAnswer.includes(withUser))includeArray.push({model: User, attributes: {exclude: ["password", "salt"]}});

        const productHistoryRecord = await ProductActionsHistory.findOne({where: {id}, include: includeArray, order: [["date", "DESC"]]});
        if(!productHistoryRecord) throw new Error("Product history record was not found", {
            cause: "NOT_FOUND",
        });
        res.status(200).json(productHistoryRecord);
    }
    catch(err)
    {
        handle(err,res);
    }
});

export default router;