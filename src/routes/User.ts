import User from "@/controllers/User";
import authenticateJWT from "@/middlewares/Token";
import express from "express";
const router = express.Router();

/* GET home page. */
router.post("/", User.post);
router.post("/login", User.login);
router.use(authenticateJWT);
router.get("/", User.get);
router.get("/:id", User.getWithId);
router.delete("/:id", User.delete);
router.patch("/:id", User.patch);

export default router;
