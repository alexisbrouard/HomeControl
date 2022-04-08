import Actuator from "@/controllers/Actuator";
import express from "express";
const router = express.Router();
import authenticateJWT from "@/middlewares/Token";

/* GET home page. */
router.use(authenticateJWT);
router.get("/", Actuator.get);
router.get("/:id", Actuator.getWithId);
router.delete("/:id", Actuator.delete);
router.post("/", Actuator.post);
router.patch("/:id", Actuator.patch);

export default router;
