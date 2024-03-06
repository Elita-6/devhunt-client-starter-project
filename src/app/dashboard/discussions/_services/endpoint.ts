export enum POST_ENDPOINTS{
    CREATE = "/post/create",
    GET_ALL="/post?page=number_page?size=size_number",
    GET="/post/:id",
    UPDATE="/post/:id",
    DELETE="/post/:id"
}
export enum TAG_ENDPOINTS{
    CREATE = "/tag/create",
    GET_ALL="/tag?q=design",
    GET="/tag/:id",
    UPDATE="/tag/:id",
    DELETE="/tag/:id"
}