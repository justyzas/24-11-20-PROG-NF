// Visu naudotoju gavimas
// Vieno naudotojo gavimas
// Vieno naudotojo sukurimas
// Istynimas
// Atnaujinimas
import express from "express";
import * as UserController from "../controllers/user.controller.js";
const router = express.Router();

// /users
router.get("/", UserController.getAllUsers);
router.get("/address", UserController.getAllAddresses);

router.get("/:id", UserController.getUser);
router.post("/", UserController.createUser);
router.post("/address/:id", UserController.addAddress);
router.post("/bank/:id", UserController.createBankAccount);
export default router;
