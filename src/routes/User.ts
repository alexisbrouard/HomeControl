import Index from "@/controllers/User";
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/user/", Index.get);

export default router;
