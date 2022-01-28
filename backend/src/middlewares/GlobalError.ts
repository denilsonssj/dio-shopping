import { Request, Response, NextFunction } from 'express';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

import { AppError } from '~/shared/error/AppError';

export const GlobalError = (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
    ) => {

        if (error instanceof AppError) {
            response.status(error.statusCode).send({
                status: getReasonPhrase(error.statusCode),
                statusCode: error.statusCode,
                message: error.message,
                timestamp: new Date().toISOString(),
                data: error?.data,
            });
            next();
        }
        else {
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                status: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
                message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                timestamp: new Date().toISOString(),
            });
        }
}