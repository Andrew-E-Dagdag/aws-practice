import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class AndrewGuestBook extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, 'AndrewCommentTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'DateCreated', type: dynamodb.AttributeType.STRING }
    });

    // Defines the lambda resource (creates the lambda function in aws lambda)
    const guestbook = new lambda.Function(this, 'GuestBookHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'guestbook.handler',
      environment: {
        GUEST_TABLE_NAME: table.tableName
      }
    });

    table.grantReadWriteData(guestbook);
  }
}
