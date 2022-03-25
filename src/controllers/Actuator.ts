import Actuator from "@/models/Actuator";
import { NextFunction, Request, Response } from "express";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.find();
      res.json({ message: actuator });
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findOne({ _id: req.params.id });
      res.json({ message: actuator });
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.deleteOne({ _id: req.params.id });
      res.json({ message: "Delete actuator" });
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = new Actuator({
        type: req.body.type,
        designation: req.body.designation,
        state: req.body.state,
      });
      actuator.save().then(() => console.log("Actuator Saved"));
      res.json({ message: "POST" });
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
      res.json({ message: "Patch actuator" });
      return;
    } catch (error) {
      next(error);
    }
  },
};
