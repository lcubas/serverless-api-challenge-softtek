import type { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/HttpException";
import { HttpStatus } from "../enums/HttpStatus";
import UnprocessableEntityException from "../exceptions/UnprocessableEntityException";

interface IRquestValidationErrors {
  [key: string]: string[];
}

interface IResponseError {
  code: HttpStatus;
  message: string;
  stack?: string;
  errors?: IRquestValidationErrors;
}

export const errorHandlerMiddleware = (
  error: Error | HttpException,
  _: Request,
  res: Response,
  __: NextFunction,
): void => {
  let response: IResponseError = {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: "Internal Server Error",
  };

  if (error instanceof HttpException) {
    response = {
      code: error.status,
      message: error.message,
    };

    if (error instanceof UnprocessableEntityException) {
      response.errors = error.errors;
    }
  }

  if (process.env.ENV === "development" || process.env.ENV === "dev") {
    response.stack = error.stack;
  }

  res.status(response.code).json(response);
};
