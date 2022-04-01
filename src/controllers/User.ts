import User from "@/models/User";

import e, { NextFunction, Request, Response } from "express";

import { formatter } from "@/responseFormatter";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.find();
      // throw new Error("toto");
      res.json(formatter("GET USER", user));
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.json({ message: user });
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.deleteOne({ _id: req.params.id });
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
      user.save().then(() => console.log("User Saved"));
      res.json({ message: "POST" });
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.updateOne(
        { _id: req.params.id },
        {
          email: req.body.email,
          password: req.body.password,
          username: req.body.username,
        }
      );
      res.json({ message: "Patch user" });
      return;
    } catch (error) {
      next(error);
    }
  },
};
