const { DynamoDB } = require('aws-sdk');

import getComments from './getComments';
import deleteComment from './deleteComment';
import createComment  from './createComment';
import { RequestEvent } from './types';

export async function handler(event: RequestEvent) {
    console.log('Received event: ' + JSON.stringify(event, null, 2));

    const { fieldName, selectionSetList } = event.info;
    const args = event.arguments;
    const dynamo = new DynamoDB();

    switch(fieldName) {
        case 'getComments':
            return await getComments(dynamo, selectionSetList);
        case 'deleteComment':
            return await deleteComment(
                dynamo,
                args.id,
                args.DateCreated
            );
        case 'createComment':
            return await createComment(
                dynamo,
                args.ULID,
                args.CommentString,
                args.CommentAuthor
            );
        default:
            return { message: 'Unknown request' };
    }

    // if (fieldName === 'getComments') {
    //     return await getComments(dynamo, selectionSetList);
    // } else if (fieldName === 'deleteComment') {
    //     const args = event.arguments;
    //     return await deleteComment(
    //         dynamo,
    //         args.id,
    //         args.DateCreated
    //     );
    // } else if (fieldName === 'createComment') {
    //     const args = event.arguments;
    //     // Reuse aws request id for the uuid of a new comment? is it safe??
    //     // https://stackoverflow.com/a/58702565
    //     return await createComment(
    //         dynamo,
    //         context.awsRequestId,
    //         args.CommentString,
    //         args.CommentAuthor
    //     );
    // } else {
    //     return { message: 'Unknown request' };
    // }
}
