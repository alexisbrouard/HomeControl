import Actuator from "@/models/Actuator";
import { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";
import xssVerify from "@/middlewares/xss";
import DB from "@/services/Database/Database";
import actuator from "@/models/Actuator";

let db = new DB();

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await db.getAll("Actuator");
      res.json(formatter("GET ACTUATOR", actuator));
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await db.getById("Actuator", req.params.id);
      res.json(formatter("GET ACTUATOR BY ID", actuator));
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await db.delete("Actuator", req.params.id);
      res.json(formatter("DELETE ACTUATOR"));
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await db.create("Actuator", {
        type: xssVerify(req.body.type),
        designation: xssVerify(req.body.designation),
        state: req.body.state,
      });
      res.json(formatter("POST ACTUATOR", actuator));
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await db.update("Actuator", req.params.id, req.body);
      res.json(formatter("PATCH ACTUATOR"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
