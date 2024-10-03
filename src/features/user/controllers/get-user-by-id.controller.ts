import type { Request, Response } from "express";
import DynamoDBService from "../../../services/dynamo-db/DynamoDB";
import { HttpStatus } from '../../../enums/HttpStatus';
import NotFoundException from '../../../exceptions/NotFoundException';
import { USERS_TABLE } from "../contants";

export const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const data = {
    TableName: USERS_TABLE,
    Key: {
      id: userId,
    },
  };
  
  const person = await DynamoDBService.get(data);

  if (!person) {
    throw new NotFoundException('Person not found');
  }

  res.status(HttpStatus.OK).json({
    data: JSON.stringify(person),
  });
};
