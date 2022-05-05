import User, { userUpdate } from "@/models/User";
import e, { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";
import argon2 from "argon2";
import xssVerify from "@/middlewares/xss";
import Auth from "@/services/Auth/Auth";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.find();
      res.json(formatter("GET USER", user));
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.json(formatter("GET USER", user));
      return;
    } catch (error) {
      next(error);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let auth = new Auth();
      const user = await User.findOne({ email: req.body.email });
      let token = {token: await auth.login(req.body.password, user)}
      res.json(formatter("LOGIN USER", token));
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.json(formatter("DELETE USER"));
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.create(
        userUpdate.parse({
          username: xssVerify(req.body.username),
          password: await argon2.hash(req.body.password),
          email: req.body.email,
        })
      );
      res.json(formatter("POST USER", user.id));
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.updateOne(
        { _id: req.params.id },
        userUpdate.parse({
          username: xssVerify(req.body.username),
          password: await argon2.hash(req.body.password),
          email: req.body.email,
        })
      );
      res.json(formatter("PATCH USER"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
