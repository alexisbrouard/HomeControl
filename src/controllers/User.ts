import User, { userUpdate } from "@/models/User";
import e, { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";
import argon2 from "argon2";
import xssVerify from "@/middlewares/xss"
import Auth from "@/services/Auth/Auth";
import DB from "@/services/Database/Database";

let db = new DB();

import Mailer from "@/services/Mail/Mailer";

let mailer = new Mailer();

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await db.getAll("User");
      res.json(formatter("GET USER", user));
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await db.getById("User", req.params.id);
      res.json(formatter("GET USER", user));
      return;
    } catch (error) {
      next(error);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let auth = new Auth();
      const user = await db.login("User", req.body.email);
      let token = { token: await auth.login(req.body.password, user) };
      res.json(formatter("LOGIN USER", token));
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await db.delete("User", req.params.id);
      res.json(formatter("DELETE USER"));
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await db.create(
        "User",
        userUpdate.parse({
          username: xssVerify(req.body.username),
          password: await argon2.hash(req.body.password),
          email: req.body.email,
        })
      );
      res.json(formatter("POST USER", user.id));
      mailer.sendMail(req.body.email, "Welcome to Home Control", "Your account has been created!");
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      db.update(
        "User",
        req.params.id,
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
