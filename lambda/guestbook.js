"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const { DynamoDB } = require('aws-sdk');
const getComments_1 = require("./getComments");
const deleteComment_1 = require("./deleteComment");
const createComment_1 = require("./createComment");
async function handler(event) {
    console.log('Received event: ' + JSON.stringify(event, null, 2));
    const { fieldName, selectionSetList } = event.info;
    const args = event.arguments;
    const dynamo = new DynamoDB();
    switch (fieldName) {
        case 'getComments':
            return await getComments_1.default(dynamo, selectionSetList);
        case 'deleteComment':
            return await deleteComment_1.default(dynamo, args.id, args.DateCreated);
        case 'createComment':
            return await createComment_1.default(dynamo, args.ULID, args.CommentString, args.CommentAuthor);
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
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3Rib29rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3Vlc3Rib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFeEMsK0NBQXdDO0FBQ3hDLG1EQUE0QztBQUM1QyxtREFBNkM7QUFHdEMsS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUFtQjtJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ25ELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUU5QixRQUFPLFNBQVMsRUFBRTtRQUNkLEtBQUssYUFBYTtZQUNkLE9BQU8sTUFBTSxxQkFBVyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZELEtBQUssZUFBZTtZQUNoQixPQUFPLE1BQU0sdUJBQWEsQ0FDdEIsTUFBTSxFQUNOLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FDbkIsQ0FBQztRQUNOLEtBQUssZUFBZTtZQUNoQixPQUFPLE1BQU0sdUJBQWEsQ0FDdEIsTUFBTSxFQUNOLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FDckIsQ0FBQztRQUNOO1lBQ0ksT0FBTyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDO0tBQzdDO0lBRUQscUNBQXFDO0lBQ3JDLDBEQUEwRDtJQUMxRCw4Q0FBOEM7SUFDOUMsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsOENBQThDO0lBQzlDLG9DQUFvQztJQUNwQywwRUFBMEU7SUFDMUUsOENBQThDO0lBQzlDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFdBQVc7SUFDWCw2Q0FBNkM7SUFDN0MsSUFBSTtBQUNSLENBQUM7QUFqREQsMEJBaURDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBEeW5hbW9EQiB9ID0gcmVxdWlyZSgnYXdzLXNkaycpO1xyXG5cclxuaW1wb3J0IGdldENvbW1lbnRzIGZyb20gJy4vZ2V0Q29tbWVudHMnO1xyXG5pbXBvcnQgZGVsZXRlQ29tbWVudCBmcm9tICcuL2RlbGV0ZUNvbW1lbnQnO1xyXG5pbXBvcnQgY3JlYXRlQ29tbWVudCAgZnJvbSAnLi9jcmVhdGVDb21tZW50JztcclxuaW1wb3J0IHsgUmVxdWVzdEV2ZW50IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihldmVudDogUmVxdWVzdEV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgZXZlbnQ6ICcgKyBKU09OLnN0cmluZ2lmeShldmVudCwgbnVsbCwgMikpO1xyXG5cclxuICAgIGNvbnN0IHsgZmllbGROYW1lLCBzZWxlY3Rpb25TZXRMaXN0IH0gPSBldmVudC5pbmZvO1xyXG4gICAgY29uc3QgYXJncyA9IGV2ZW50LmFyZ3VtZW50cztcclxuICAgIGNvbnN0IGR5bmFtbyA9IG5ldyBEeW5hbW9EQigpO1xyXG5cclxuICAgIHN3aXRjaChmaWVsZE5hbWUpIHtcclxuICAgICAgICBjYXNlICdnZXRDb21tZW50cyc6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBnZXRDb21tZW50cyhkeW5hbW8sIHNlbGVjdGlvblNldExpc3QpO1xyXG4gICAgICAgIGNhc2UgJ2RlbGV0ZUNvbW1lbnQnOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGVsZXRlQ29tbWVudChcclxuICAgICAgICAgICAgICAgIGR5bmFtbyxcclxuICAgICAgICAgICAgICAgIGFyZ3MuaWQsXHJcbiAgICAgICAgICAgICAgICBhcmdzLkRhdGVDcmVhdGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnY3JlYXRlQ29tbWVudCc6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVDb21tZW50KFxyXG4gICAgICAgICAgICAgICAgZHluYW1vLFxyXG4gICAgICAgICAgICAgICAgYXJncy5VTElELFxyXG4gICAgICAgICAgICAgICAgYXJncy5Db21tZW50U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgYXJncy5Db21tZW50QXV0aG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1Vua25vd24gcmVxdWVzdCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAoZmllbGROYW1lID09PSAnZ2V0Q29tbWVudHMnKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGF3YWl0IGdldENvbW1lbnRzKGR5bmFtbywgc2VsZWN0aW9uU2V0TGlzdCk7XHJcbiAgICAvLyB9IGVsc2UgaWYgKGZpZWxkTmFtZSA9PT0gJ2RlbGV0ZUNvbW1lbnQnKSB7XHJcbiAgICAvLyAgICAgY29uc3QgYXJncyA9IGV2ZW50LmFyZ3VtZW50cztcclxuICAgIC8vICAgICByZXR1cm4gYXdhaXQgZGVsZXRlQ29tbWVudChcclxuICAgIC8vICAgICAgICAgZHluYW1vLFxyXG4gICAgLy8gICAgICAgICBhcmdzLmlkLFxyXG4gICAgLy8gICAgICAgICBhcmdzLkRhdGVDcmVhdGVkXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH0gZWxzZSBpZiAoZmllbGROYW1lID09PSAnY3JlYXRlQ29tbWVudCcpIHtcclxuICAgIC8vICAgICBjb25zdCBhcmdzID0gZXZlbnQuYXJndW1lbnRzO1xyXG4gICAgLy8gICAgIC8vIFJldXNlIGF3cyByZXF1ZXN0IGlkIGZvciB0aGUgdXVpZCBvZiBhIG5ldyBjb21tZW50PyBpcyBpdCBzYWZlPz9cclxuICAgIC8vICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTg3MDI1NjVcclxuICAgIC8vICAgICByZXR1cm4gYXdhaXQgY3JlYXRlQ29tbWVudChcclxuICAgIC8vICAgICAgICAgZHluYW1vLFxyXG4gICAgLy8gICAgICAgICBjb250ZXh0LmF3c1JlcXVlc3RJZCxcclxuICAgIC8vICAgICAgICAgYXJncy5Db21tZW50U3RyaW5nLFxyXG4gICAgLy8gICAgICAgICBhcmdzLkNvbW1lbnRBdXRob3JcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICByZXR1cm4geyBtZXNzYWdlOiAnVW5rbm93biByZXF1ZXN0JyB9O1xyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==