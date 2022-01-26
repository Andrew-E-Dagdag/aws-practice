"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(dynamo, selectionSetList) {
    const response = await dynamo
        .scan({
        TableName: process.env.GUEST_TABLE_NAME,
        FilterExpression: "Deleted <> :deleted",
        // Make sure that the comments are not marked as deleted yet
        ExpressionAttributeValues: {
            ':deleted': { BOOL: true }
        },
        ProjectionExpression: selectionSetList.join(', '),
    })
        .promise();
    const mappedResponse = response
        .Items
        .map((entry) => {
        var _a, _b, _c, _d, _e;
        return {
            DateCreated: (_a = entry.DateCreated) === null || _a === void 0 ? void 0 : _a.S,
            // Set a default value for the author of the comment
            CommentAuthor: ((_b = entry.CommentAuthor) === null || _b === void 0 ? void 0 : _b.S) || 'Anon',
            id: (_c = entry.id) === null || _c === void 0 ? void 0 : _c.S,
            CommentString: (_d = entry.CommentString) === null || _d === void 0 ? void 0 : _d.S,
            Deleted: (_e = entry.Deleted) === null || _e === void 0 ? void 0 : _e.BOOL
        };
    })
        .sort((a, b) => new Date(a.DateCreated).getTime() - new Date(b.DateCreated).getTime());
    return mappedResponse;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRDb21tZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVlLEtBQUssb0JBQ2hCLE1BQWMsRUFDZCxnQkFBK0I7SUFFL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUFNO1NBQ3hCLElBQUksQ0FBQztRQUNGLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQjtRQUN2QyxnQkFBZ0IsRUFBRSxxQkFBcUI7UUFDdkMsNERBQTREO1FBQzVELHlCQUF5QixFQUFFO1lBQ3ZCLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUM7U0FDNUI7UUFDRCxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3BELENBQUM7U0FDRCxPQUFPLEVBQUUsQ0FBQztJQUVmLE1BQU0sY0FBYyxHQUFHLFFBQVE7U0FDMUIsS0FBSztTQUNMLEdBQUcsQ0FBQyxDQUFDLEtBQXNCLEVBQUUsRUFBRTs7UUFDNUIsT0FBTztZQUNILFdBQVcsUUFBRSxLQUFLLENBQUMsV0FBVywwQ0FBRSxDQUFDO1lBQ2pDLG9EQUFvRDtZQUNwRCxhQUFhLEVBQUUsT0FBQSxLQUFLLENBQUMsYUFBYSwwQ0FBRSxDQUFDLEtBQUksTUFBTTtZQUMvQyxFQUFFLFFBQUUsS0FBSyxDQUFDLEVBQUUsMENBQUUsQ0FBQztZQUNmLGFBQWEsUUFBRSxLQUFLLENBQUMsYUFBYSwwQ0FBRSxDQUFDO1lBQ3JDLE9BQU8sUUFBRSxLQUFLLENBQUMsT0FBTywwQ0FBRSxJQUFJO1NBQy9CLENBQUM7SUFDTixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEVBQUUsQ0FDN0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FDeEUsQ0FBQztJQUVOLE9BQU8sY0FBYyxDQUFDO0FBQzFCLENBQUM7QUFqQ0QsNEJBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vLCBDb21tZW50UmVzcG9uc2UsIENvbW1lbnQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKFxyXG4gICAgZHluYW1vOiBEeW5hbW8sXHJcbiAgICBzZWxlY3Rpb25TZXRMaXN0OiBBcnJheTxzdHJpbmc+XHJcbik6IFByb21pc2U8Q29tbWVudD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkeW5hbW9cclxuICAgICAgICAuc2Nhbih7IFxyXG4gICAgICAgICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LkdVRVNUX1RBQkxFX05BTUUsXHJcbiAgICAgICAgICAgIEZpbHRlckV4cHJlc3Npb246IFwiRGVsZXRlZCA8PiA6ZGVsZXRlZFwiLFxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgY29tbWVudHMgYXJlIG5vdCBtYXJrZWQgYXMgZGVsZXRlZCB5ZXRcclxuICAgICAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xyXG4gICAgICAgICAgICAgICAgJzpkZWxldGVkJzogeyBCT09MOiB0cnVlfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQcm9qZWN0aW9uRXhwcmVzc2lvbjogc2VsZWN0aW9uU2V0TGlzdC5qb2luKCcsICcpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnByb21pc2UoKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWFwcGVkUmVzcG9uc2UgPSByZXNwb25zZVxyXG4gICAgICAgIC5JdGVtc1xyXG4gICAgICAgIC5tYXAoKGVudHJ5OiBDb21tZW50UmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIERhdGVDcmVhdGVkOiBlbnRyeS5EYXRlQ3JlYXRlZD8uUyxcclxuICAgICAgICAgICAgICAgIC8vIFNldCBhIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBhdXRob3Igb2YgdGhlIGNvbW1lbnRcclxuICAgICAgICAgICAgICAgIENvbW1lbnRBdXRob3I6IGVudHJ5LkNvbW1lbnRBdXRob3I/LlMgfHwgJ0Fub24nLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGVudHJ5LmlkPy5TLFxyXG4gICAgICAgICAgICAgICAgQ29tbWVudFN0cmluZzogZW50cnkuQ29tbWVudFN0cmluZz8uUyxcclxuICAgICAgICAgICAgICAgIERlbGV0ZWQ6IGVudHJ5LkRlbGV0ZWQ/LkJPT0xcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zb3J0KChhOiBDb21tZW50LCBiOiBDb21tZW50KSA9PiBcclxuICAgICAgICAgICAgbmV3IERhdGUoYS5EYXRlQ3JlYXRlZCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5EYXRlQ3JlYXRlZCkuZ2V0VGltZSgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICByZXR1cm4gbWFwcGVkUmVzcG9uc2U7XHJcbn1cclxuIl19