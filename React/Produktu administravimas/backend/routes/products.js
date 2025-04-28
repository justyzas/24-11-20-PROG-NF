import express from "express";
import Product from "../models/Product.js";
import ProductActionsHistory from "../models/ProductActionsHistory.js";
import ProductImage from "../models/ProductImage.js";
import ProductUpdateSchema from "../lib/validations/update-product.js";
import { handle } from "../lib/handleRouteHandlerErorrs.js";
import { ProductCreationValidation } from "../lib/validations/create-product.js";
import { isLogged, withRouteParam } from "../lib/middlewares/index.js";
import { positiveAnswer } from "../lib/data/enums.js";
const router = express.Router();

// /api/products
//Sukurimas
router.post("/", isLogged, async (req, res) => {
	try {
		const validatedData = ProductCreationValidation.parse(req.body);
		const product = await Product.create(validatedData);
		console.log(product);
		const productHistoryRecord = await ProductActionsHistory.create({
			productId: product.id,
			userId: req.session.user.id,
			actionType: "create",
		});
		return res.status(201).json({
			product: product.toJSON(),
			report: productHistoryRecord.toJSON(),
		});
	} catch (err) {
		handle(err, res);
	}
});

router.get("/", isLogged, async (req, res) => {
	try {
		// localhost/products?withImage=yes&withHistory=yes
		let { withImage, withHistory } = req.query;
		const includeArray = [];
		if (positiveAnswer.includes(withHistory))
			includeArray.push(ProductActionsHistory);
		if (positiveAnswer.includes(withImage)) includeArray.push(ProductImage);
		const allProducts = await Product.findAll({
			include: includeArray,
			order: [["id", "DESC"]],
			paranoid: false,
		});
		res.status(200).json(allProducts);
	} catch (err) {
		handle(err, res);
	}
});

router.get("/:id", isLogged, withRouteParam("id"), async (req, res) => {
	// localhost/products/4?withImage=yes&withHistory=yes
	try {
		const { id } = req.params;
		let { withImage, withHistory } = req.query;

		const includeArray = [];
		if (positiveAnswer.includes(withHistory))
			includeArray.push(ProductActionsHistory);
		if (positiveAnswer.includes(withImage)) includeArray.push(ProductImage);

		const product = await Product.findByPk(id, {
			include: includeArray,
			paranoid: false,
		});
		if (!product)
			throw new Error("Product was not found", {
				cause: "NOT_FOUND",
			});
		res.status(200).json(product);
	} catch (err) {
		handle(err, res);
	}
});

router.delete("/:id", isLogged, withRouteParam("id"), async (req, res) => {
	try {
		const { id } = req.params;
		const affectedRows = await Product.destroy({ where: { id } });
		if (affectedRows === 0)
			throw new Error("Product was not found", {
				cause: "NOT_FOUND",
			});

		res.status(204).send();
	} catch (err) {
		handle(err, res);
	}
});

router.put("/:id", isLogged, withRouteParam("id"), async (req, res) => {
	try {
		const validatedData = ProductUpdateSchema.parse(req.body);
		const { id } = req.params;

		const product = await Product.findByPk(id);
		Object.assign(product, validatedData);
		product.save();

		res.status(200).json(product);
	} catch {
		handle(err, res);
	}
});

export default router;
