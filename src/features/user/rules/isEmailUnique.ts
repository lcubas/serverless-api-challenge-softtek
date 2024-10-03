import { USERS_TABLE } from "../contants";
import DynamoDBService from "../../../services/dynamo-db/DynamoDB";

export const isEmailUnique = async (email: string): Promise<Boolean> => {
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
