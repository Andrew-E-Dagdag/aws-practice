import { Dynamo, newComment } from './types';

export default async function(
    dynamo: Dynamo,
    id: string, 
    comment: string, 
    author: string
): Promise<String> {
    const args: newComment = {
        TableName: process.env.GUEST_TABLE_NAME ?? 'AndrewGuestBookV2-AndrewCommentTable12286926-MD8S3XK9EX3Q',
        Item: {
            id: {
                S: id
            }, 
            DateCreated: {
                S: new Date().toISOString()
            }, 
            CommentString: {
                S: comment
            }
        }
    };

    if (author) {
        args.Item.CommentAuthor = { S: author }
    }

    await dynamo
        .putItem(args)
        .promise();
    
    return 'Successfully added new comment!';
}
