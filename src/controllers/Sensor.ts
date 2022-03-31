import Sensor from "@/models/Sensor";
import { NextFunction, Request, Response } from "express";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.find();
      res.json({ message: sensor });
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findOne({ _id: req.params.id });
      res.json({ message: sensor });
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.deleteOne({ _id: req.params.id });
      res.json({ message: "Delete sensor" });
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = new Sensor({
        type: req.body.type,
        designation: req.body.designation,
        rawValue: req.body.rawValue,
      });
      sensor.save().then(() => console.log("Sensor Saved"));
      res.json({ message: "POST" });
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.updateOne(
        { _id: req.params.id },
        {
          type: req.body.type,
          designation: req.body.designation,
          rawValue: req.body.rawValue,
        }
      );
      res.json({ message: "Patch user" });
      return;
    } catch (error) {
      next(error);
    }
  },
};
