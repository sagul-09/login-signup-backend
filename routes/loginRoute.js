import express from "express";
const router = express.Router();

import { loginUser } from "../controllers/loginController.js";

router.route("/").post(loginUser);

export default router;
