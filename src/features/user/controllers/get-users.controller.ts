import type { Request, Response } from "express";
import DynamoDBService from "../../../services/dynamo-db/DynamoDB";
import { HttpStatus } from "../../../enums/HttpStatus";
import NotFoundException from "../../../exceptions/NotFoundException";
import { USERS_TABLE } from "../contants";

export const getUsers = async (_: Request, res: Response) => {
  const data = {
    TableName: USERS_TABLE,
  };

  const people = await DynamoDBService.scan(data);

  if (!people) {
    throw new NotFoundException("Person not found");
  }

  res.status(HttpStatus.OK).json({
    data: people,
  });
};
