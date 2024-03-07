export interface IPostDto{
    title: string
    description:string
    tag:string[]
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
    profileUrl:string
}
export interface IComment{
    content:string,
    user:IUser
    dateComment:string
}
export interface IReaction{
    userId:string
    postId:string
}
export  interface ICommentDto{
    content:string,
    postId:string
}