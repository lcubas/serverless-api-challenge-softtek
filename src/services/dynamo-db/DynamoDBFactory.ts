import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export default class DynamoDBFactory {
  private static instance: DynamoDBFactory;
  private client: DynamoDBDocumentClient;

  private constructor() {
    const dynamoConnection = new DynamoDBClient();
    this.client = DynamoDBDocumentClient.from(dynamoConnection);
  }

  public static create(): DynamoDBFactory {
    if (!DynamoDBFactory.instance) {
      DynamoDBFactory.instance = new DynamoDBFactory();
    }

    return DynamoDBFactory.instance;
  }

  public getDynamoDbClient(): DynamoDBDocumentClient {
    return this.client;
  }
}
