import { Request, Response } from "express";
import { HttpStatus } from "../../../enums/HttpStatus";

export const check = (_: Request, res: Response) => {
  res.status(HttpStatus.OK).json({
    message: "OK",
    date: new Date().toJSON(),
  });
};
