import Actuator from "@/models/Actuator";
import { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.find();
      res.json(formatter("GET ACTUATOR", actuator));
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findOne({ _id: req.params.id });
      res.json(formatter("GET ACTUATOR BY ID", actuator));
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.deleteOne({ _id: req.params.id });
      res.json(formatter("DELETE ACTUATOR"));
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.create({
        type: req.body.type,
        designation: req.body.designation,
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
      const actuator = await Actuator.updateOne(
        { _id: req.params.id },
        {
          type: req.body.type,
          designation: req.body.designation,
          state: req.body.state,
        }
      );
      res.json(formatter("PATCH ACTUATOR"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
