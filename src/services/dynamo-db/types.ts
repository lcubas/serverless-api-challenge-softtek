import type {
  GetCommandInput,
  PutCommandInput,
  ScanCommandInput,
} from "@aws-sdk/lib-dynamodb";

export type DefaultDynamoDBItem = Record<string, any>;

export type DynamoDBScanParams = ScanCommandInput & {
  TableName: string;
};

export type DynamoDBGetParams = GetCommandInput & {
  TableName: string;
};

export type DynamoDBPutParams<T> = PutCommandInput & {
  Item: T;
  TableName: string;
};
