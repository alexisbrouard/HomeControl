import Sensor from "@/models/Sensor";
import { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.find();
      res.json(formatter("GET SENSOR", sensor));
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findOne({ _id: req.params.id });
      res.json(formatter("GET SENSOR BY ID", sensor));
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.deleteOne({ _id: req.params.id });
      res.json(formatter("DELETE SENSOR"));
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.create({
        type: req.body.type,
        designation: req.body.designation,
        rawValue: req.body.rawValue,
      });
      res.json(formatter("POST SENSOR", sensor));
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
      res.json(formatter("PATCH SENSOR"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
