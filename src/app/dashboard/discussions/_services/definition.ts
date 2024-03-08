export interface IPostDto{
    postTitle: string
    postDescription:string
    tags:string[]
}
export interface ITag{
    tagDesign:string,
    tagId:string
}
export interface IPost{
    postId:string
    postDescription:string
    postTitle:string
    dateCreation:string
    user:IUser
    tags:string[]
    comments:IComment[]
    reaction:string[]
}
interface  IUser{
    userId:string
    userName:string
    firstName:string
    profileUrl:string
}
export interface IComment{
    user:IUser
    comment:ICommentContent
}
export  interface ICommentContent{
    created_at:string
    content:string,
}
export interface IReaction{
    userId:string
    postId:string
}
export  interface ICommentDto{
    content:string,
    postId:string
}