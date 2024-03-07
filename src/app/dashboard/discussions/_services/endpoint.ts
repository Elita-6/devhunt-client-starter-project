export enum POST_ENDPOINTS{
    CREATE = "/post",
    GET_ALL="/post?page=number_page?size=size_number",
    GET="/post/id",
    UPDATE="/post/id",
    DELETE="/post/id",
    REACTION="/reaction",
    GET_REACTION_BY_POST_ID="/reaction/id",
    GET_COMMENT_BY_POST_ID="/comment/id"
}
export enum TAG_ENDPOINTS{
    CREATE = "/tag/create",
    GET_ALL="/tag/prompt/design",
    GET="/tag/id",
    UPDATE="/tag/id",
    DELETE="/tag/id"
}