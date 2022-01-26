export type CommentResponse = {
    id: {
        S: string
    },
    CommentString: {
        S: string
    },
    DateCreated: {
        S: string
    },
    Deleted: {
        BOOL: Boolean
    },
    CommentAuthor: {
        S: string
    }
}

export type Dynamo = {
    scan: Function,
    updateItem: Function,
    putItem: Function
}

export type RequestEvent = {
    info: {
        fieldName: string,
        selectionSetList: Array<string>
    },
    arguments: {
        id: string,
        ULID: string,
        DateCreated: string,
        CommentString: string,
        CommentAuthor: string
    }
}

export type Comment = {
    DateCreated: string,
    CommentAuthor: string,
    id: string,
    CommentString: string,
    Deleted: Boolean
}

export interface newComment {
    TableName: string,
    Item: {
        id: {
            S: string
        },
        DateCreated: {
            S: string
        },
        CommentString: {
            S: string
        },
        // author is optional
        CommentAuthor?: {
            S: string
        }
    }
}