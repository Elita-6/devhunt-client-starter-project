import {IUser} from "@/app/_common/definition";

export interface IResourceDto{
    tags:string[]
    resourceName:string
    file: File
}
export interface IResource{
    resourceId:string
    resourceName:string
    tags:string[]
    user:IUser
    date:string
}