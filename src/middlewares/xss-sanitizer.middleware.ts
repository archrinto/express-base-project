import { NextFunction, Request, Response } from "express";
import xss from "xss";

function sanitizeObject(obj: any): any {
    if (typeof obj === 'string') {
        return xss(obj);
    }

    if (Array.isArray(obj)) {
        return obj.map((item: any) => sanitizeObject(item));
    }

    const sanitizedObject: any = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            sanitizedObject[key] = sanitizeObject(obj[key]);
        }
    }

    return sanitizedObject;
}

export function sanitizeXSS(req: Request, res: Response, next: NextFunction) {
    if (req.is('json')) {
        req.body = sanitizeObject(req.body);
    }
    req.query = sanitizeObject(req.query);

    next();
}