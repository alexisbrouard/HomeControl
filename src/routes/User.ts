import User from "@/controllers/User";
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", User.get);
router.get("/:id", User.getWithId);
router.delete("/:id", User.delete);
router.post("/", User.post);
router.post("/login", User.login);
router.patch("/:id", User.patch);

export default router;
