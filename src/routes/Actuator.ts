import Actuator from "@/controllers/Actuator";
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", Actuator.get);
router.get("/:id", Actuator.getWithId);
router.delete("/:id", Actuator.delete);
router.post("/", Actuator.post);
router.patch("/:id", Actuator.patch);

export default router;
