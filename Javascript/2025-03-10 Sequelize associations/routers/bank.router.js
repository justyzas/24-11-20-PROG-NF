import express from "express";
import * as BankController from "../controllers/bank.controller.js";
const router = express.Router();
// /bank

router.post("/:userId", BankController.createBankAccount);
router.post("/:bankId", BankController.depositMoney);
router.post("/:bankId", BankController.withdrawMoney);

export default router;
