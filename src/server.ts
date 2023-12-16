import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import JsonResponse from "./utils/json-response.util";
import router from './router';
import config from './config';

// express app instance
const app = express();

// request body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add app router
app.use(router);

// handle runtime error
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    return JsonResponse.serverError(res, err.message)
});

// handle undefined route
app.use((req, res) => {
    return JsonResponse.notFound(res, 'Route not found');
});

// start the app
app.listen(config.runtime.port, config.runtime.host, () => {
    console.log(`Server is running on port ${config.runtime.host}`);
});


