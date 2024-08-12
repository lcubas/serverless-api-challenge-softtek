import { v4 as uuidv4 } from "uuid";
import DynamoDBService from "../../../services/dynamo-db/DynamoDB";
import { HttpStatus } from '../../../enums/HttpStatus';
import type { Request, Response } from "express";
import { USERS_TABLE } from "../contants";

interface CreateUserDTO {
  name: string;
  email: string;
}

export const create = async (req: Request, res: Response) => {
  const body = req.body;
  const { name, email }: CreateUserDTO = body;

  // TODO: Add validation

  const data = {
    TableName: USERS_TABLE,
    Item: {
      name,
      email,
      id: uuidv4(),
    },
  };
  const person = await DynamoDBService.put<CreateUserDTO>(data);

  res.status(HttpStatus.CREATED).json({
    data: person,
  });
};