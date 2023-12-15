import { NextFunction, Request, Response } from "express";
import JsonResponse from "../utils/json-response.util";

export default function userHasRole(roles: string[]) {
    return function(req: Request, res: Response, next: NextFunction) {
        if (!roles.includes(req.user?.role)) {
            return JsonResponse.forbidden(res);
        }
        next()
    }
}