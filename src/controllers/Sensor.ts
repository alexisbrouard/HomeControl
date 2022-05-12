import { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";
import { convert } from "@/sensorConvertion";
import xssVerify from "@/middlewares/xss";
import DB from "@/services/Database/Database";
import alarm from "@/middlewares/Alarm";

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
      const sensorVerify = await db.getById("Sensor", req.params.id);
      await db.update("Sensor", req.params.id, req.body);
      res.json(formatter("PATCH SENSOR"));
      if (sensorVerify.rawValue != req.body.rawValue && sensorVerify.type == "PROXIMITY") {
        alarm(req.body.rawValue);
      }
    } catch (error) {
      next(error);
    }
  },
};
