import express from "express";
const router = express.Router();

import { addNewUser } from "../controllers/signUpController.js";

router.route("/").post(addNewUser);

export default router;
