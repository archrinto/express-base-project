import { Response } from "express";

const JsonResponse = {
    success(res: Response, data: any, additional: object = {}) {
        return res.status(200).json({
            data: data,
            ...additional
        });
    },
    serverError(res: Response, message: string = 'Something wrong') {
        return res.status(500).json({
            message: message
        })
    },
    notFound(res: Response, message: string = 'Not found') {
        return res.status(404).json({
            message: message
        })
    },
    unauthorized(res: Response, message: string = 'unauthorized') {
        return res.status(401).json({
            message: message
        })
    },
    forbidden(res: Response, message: string = 'forbidden') {
        return res.status(403).json({
            message: message
        })
    },
    badRequest(res: Response, message: string = 'bad request', errors: object | undefined = undefined) {
        return res.status(400).json({
            message: message,
            errors
        })
    },
    conflict(res: Response, message: string = 'conflict', additional: object = {}) {
        return res.status(409).json({
            message: message,
            ...additional
        })
    }
}

export default JsonResponse;