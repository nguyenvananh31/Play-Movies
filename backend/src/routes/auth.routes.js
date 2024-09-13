import express from "express";
import {signup} from "../controllers/auth.controllers.js"

const router = express.Router();

router.get("/login", signup)

export default router