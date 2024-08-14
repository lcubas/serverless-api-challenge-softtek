import { z } from "zod";
import { USERS_TABLE } from "../contants";
import DynamoDBService from "../../../services/dynamo-db/DynamoDB";

const isEmailUnique = async (email: string) => {
  const params = {
    TableName: USERS_TABLE,
    FilterExpression: "email = :email",
    ExpressionAttributeValues: {
      ":email": email,
    },
  };
  const items = await DynamoDBService.scan(params);

  return !items || items.length === 0;
};

export const createUserValidation = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address").refine(isEmailUnique, {
    message: "Email already in use",
  }),
});
