import jwt from 'jsonwebtoken';

import { NextFunction, Request, Response } from "express";

const authenticateJWT = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET_KEY!, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

export default authenticateJWT;