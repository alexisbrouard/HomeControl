import Sensor from "@/controllers/Sensor";
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", Sensor.get);
router.get("/:id", Sensor.getWithId);
router.delete("/:id", Sensor.delete);
router.post("/", Sensor.post);
router.patch("/:id", Sensor.patch);

export default router;