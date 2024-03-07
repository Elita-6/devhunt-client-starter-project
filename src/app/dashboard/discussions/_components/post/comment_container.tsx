"use client"
import React from 'react';
import {IComment} from "@/app/dashboard/discussions/_services/definition";
import CommentItems from "@/app/dashboard/discussions/_components/post/comment_items";
import {Send} from "lucide-react";
import {useCreateMessage} from "@/app/dashboard/(bolida)/_hooks/bolida_hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateComment} from "@/app/dashboard/discussions/_hooks/post_hooks";
interface Props{
    comments: IComment[]
    HandleClick:()=>void
    postId:string
}
interface IFormInput{
    comment:string
}
const CommentContainer = (props:Props) => {
    const {isSuccess,isLoading,mutate} = useCreateComment()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        mutate({
            content:data.comment,
            postId:props.postId
        })
        console.log("test")
        if (isSuccess){
            console.log("success")
        }
    }
    return (
        <div className="overlay" onClick={props.HandleClick}>
            <div className="central" onClick={(e)=>e.stopPropagation()}>
                {
                    props.comments.map((elem,key)=>(
                        <CommentItems key={key} content={elem.content} user={elem.user} dateComment={elem.dateComment}/>
                    ))
                }
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between space-x-6 px-4 py-3 w-full h-[8vh]">
                <input type='text'  placeholder='Type your message here '
                       className='outline-none p-2 input bg-[#E8F4FC] w-[25vw]' {...register("comment",{required:true})} />
                <button type="submit" className="bg-[#0000FF] p-2 rounded-lg">
                    <Send  className="text-white"/>
                </button>
            </form>
            </div>
        </div>
    );
};

export default CommentContainer;