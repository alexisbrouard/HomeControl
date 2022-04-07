import User from "@/models/User";
import e, { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";
import argon2 from "argon2";
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from "express";
import jwt from "jsonwebtoken";

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
      res.json(formatter("GET USER BY ID", user));
      return;
    } catch (error) {
      next(error);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      if (await argon2.verify(user.password, req.params.password)) {
        const signature = process.env.SECRET_KEY;
        const token = {
          token: jwt.sign(
            { email: user.email, username: user.username, id: user._id },
            signature!
          ),
        };
      }
      res.json(formatter("GET USER BY ID", user));
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
      const user = User.create({
        email: req.body.email,
        password: await argon2.hash(req.body.password),
        username: req.body.username,
      });
      res.json(formatter("POST USER"));
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
      res.json(formatter("PATCH USER"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
