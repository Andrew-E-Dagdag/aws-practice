import { Dynamo } from './types';

export default async function(
    dynamo: Dynamo,
    id: String,
    dateCreated: String
): Promise<String> {
    await dynamo.updateItem({
        TableName: process.env.GUEST_TABLE_NAME,
        Key: { 
            id: { S: id },
            DateCreated: { S: dateCreated } 
        },
        UpdateExpression: "set Deleted = :del",
        ExpressionAttributeValues: { ":del": { BOOL: true} }
    }).promise();

    return 'Successfully deleted comment!';
}
