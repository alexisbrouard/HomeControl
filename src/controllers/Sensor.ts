import Sensor from "@/models/Sensor";
import { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";
import { convert } from "@/sensorConvertion";
import xssVerify from "@/middlewares/xss"
import alarm from "@/middlewares/Alarm";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.find();
      const map = sensor.map((sensorTemp) => {
        return {
          id: sensorTemp._id,
          type: sensorTemp.type,
          designation: sensorTemp.designation,
          rawValue: sensorTemp.rawValue,
          value: convert(sensorTemp.type, sensorTemp.rawValue),
        };
      });
      res.json(formatter("GET SENSOR", map));
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
        type: xssVerify(req.body.type),
        designation: xssVerify(req.body.designation),
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
      const sensorVerify = await Sensor.findOne(
        { _id: req.params.id });
      const buffer = sensorVerify.rawValue;
      const sensor = await Sensor.updateOne(
        { _id: req.params.id },
        {
          type: xssVerify(req.body.type),
          designation: xssVerify(req.body.designation),
          rawValue: req.body.rawValue,
        }
      );
      console.log("Raw Value :", req.body.rawValue);
      res.json(formatter("PATCH SENSOR"));
      if (buffer != req.body.rawValue && req.body.type == "PROXIMITY") {
        alarm(req.body.rawValue);
      }
    } catch (error) {
      next(error);
    }
  },
};
