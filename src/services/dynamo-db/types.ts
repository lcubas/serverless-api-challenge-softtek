import type {
  GetCommandInput,
  PutCommandInput,
  ScanCommandInput,
} from "@aws-sdk/lib-dynamodb";

export type BaseDynamoParams = {
  TableName: string;
};

export type DefaultDynamoDBItem = Record<string, any>;

export type DynamoDBScanParams = ScanCommandInput & BaseDynamoParams;

export type DynamoDBGetParams = GetCommandInput & BaseDynamoParams;

export type DynamoDBPutParams<T> = PutCommandInput &
  BaseDynamoParams & {
    Item: T;
  };
