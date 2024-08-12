import type { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/HttpException";
import { HttpStatus } from "../enums/HttpStatus";

interface IResponseError {
  code: number;
  message: string;
  stack?: string;
}

export const errorHandlerMiddleware = (
  error: Error | HttpException,
  _: Request,
  res: Response,
  __: NextFunction
): void => {
  let response: IResponseError;

  if (error instanceof HttpException) {
    response = {
      code: error.status,
      message: error.message,
    };
  } else {
    response = {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: "Internal Server Error",
    };
  }

  if (process.env.ENV === "development") {
    response.stack = error.stack;
  }

  res.status(response.code).json(response);
};
