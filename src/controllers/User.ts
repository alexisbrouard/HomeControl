import { NextFunction, Request, Response } from "express";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "Coucou Alexis" });
      return;
    } catch (error) {
      next(error);
    }
  },
};
