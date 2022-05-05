import jwt from "jsonwebtoken";
import Auth from "@/services/Auth/Auth";

import { NextFunction, Request, Response } from "express";

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    let auth = new Auth();
    
    if (!auth.authenticate(token)) {
      return res.sendStatus(403);
    }
    next();
  } else {
    res.sendStatus(401);
  }
};

export default authenticateJWT;
