import Sensor from "@/models/Sensor";
import { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";
import { convert } from "@/sensorConvertion";
import xssVerify from "@/middlewares/xss";
import DB from "@/services/Database/Database";

let db = new DB();

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await db.getAll("Sensor");
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
      const sensor = await db.getById("Sensor", req.params.id);
      res.json(formatter("GET SENSOR BY ID", sensor));
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await db.delete("Sensor", req.params.id);
      res.json(formatter("DELETE SENSOR"));
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await db.create("Sensor", {
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
      const sensor = db.update("Sensor", req.params.id, {
        type: xssVerify(req.body.type),
        designation: xssVerify(req.body.designation),
        rawValue: req.body.rawValue,
      });
      res.json(formatter("PATCH SENSOR"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
