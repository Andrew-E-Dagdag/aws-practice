import { Dynamo, CommentResponse, Comment } from './types';

export default async function(
    dynamo: Dynamo,
    selectionSetList: Array<string>
): Promise<Comment> {
    const response = await dynamo
        .scan({ 
            TableName: process.env.GUEST_TABLE_NAME,
            FilterExpression: "Deleted <> :deleted",
            // Make sure that the comments are not marked as deleted yet
            ExpressionAttributeValues: {
                ':deleted': { BOOL: true}
            },
            ProjectionExpression: selectionSetList.join(', '),
        })
        .promise();
    
    const mappedResponse = response
        .Items
        .map((entry: CommentResponse) => {
            return {
                DateCreated: entry.DateCreated?.S,
                // Set a default value for the author of the comment
                CommentAuthor: entry.CommentAuthor?.S || 'Anon',
                id: entry.id?.S,
                CommentString: entry.CommentString?.S,
                Deleted: entry.Deleted?.BOOL
            };
        })
        .sort((a: Comment, b: Comment) => 
            new Date(a.DateCreated).getTime() - new Date(b.DateCreated).getTime()
        );

    return mappedResponse;
}
