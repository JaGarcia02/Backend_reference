import express from "express";
import { create_new_user, login_user } from "../controllers/user_controller.js";

const router = express.Router();

router.post("/create-user", create_new_user);
router.post("/login-user", login_user);

export default router;
