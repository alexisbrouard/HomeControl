import User from "@/models/User";
import { NextFunction, Request, Response } from "express";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findOne({ email: "zizi@chachatte.com" });
      res.json({ message: user });
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "Id user route" });
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "Delete user" });
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
      });
      user.save(function (err: any) {});
      res.json({ message: "POST" });
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "Patch user" });
      return;
    } catch (error) {
      next(error);
    }
  },
};
