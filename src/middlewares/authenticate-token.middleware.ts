import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import JsonResponse from '../utils/json-response.util';
import config from '../config';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    let token: string | undefined = req.header('Authorization')?.split(' ')[1];

    if (!token && req.query?.token) {
        token = req.query.token as string;
    } 

    if (!token) {
        return JsonResponse.unauthorized(res)
    }

    jwt.verify(token, config.jwt.secret, (err, user) => {
        if (err) {
            return JsonResponse.unauthorized(res, err.message)
        }

        req.user = user;
        next();
    });
}
