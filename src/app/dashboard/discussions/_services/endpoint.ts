export enum POST_ENDPOINTS{
    CREATE = "/post/id",
    GET_ALL="/post",
    GET="/post/id",
    UPDATE="/post/id",
    DELETE="/post/id",
    REACTION="/reaction",
    GET_REACTION_BY_POST_ID="/reaction/id",
    GET_COMMENT_BY_POST_ID="/commentaire/id",
    COMMENT_POST="/commentaire/id"
}
export enum TAG_ENDPOINTS{
    CREATE = "/tag/create",
    GET_ALL="/tag/prompt/design",
    GET_TAG_POPULAR = "/tag",
    GET="/tag/id",
    UPDATE="/tag/id",
    DELETE="/tag/id"
}