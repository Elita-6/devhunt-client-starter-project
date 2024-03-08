"use client"
import React from 'react';
import {IComment} from "@/app/dashboard/discussions/_services/definition";
import CommentItems from "@/app/dashboard/discussions/_components/post/comment_items";
import {Send} from "lucide-react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateComment, useFetchComment} from "@/app/dashboard/discussions/_hooks/post_hooks";
interface Props{
    HandleClick:()=>void
    postId:string
}
interface IFormInput{
    comment:string
}
const comments= [
    {
        content: "Great post!",
        user: {
            userId: "2",
            userName: "Jane Smith",
            firstName: "Alice Johnson",
            profileUrl: "https://example.com/profile"
        },
        dateComment: "2024-03-06"
    },
    {
        content: "I agree!",
        user: {
            userId: "3",
            userName: "Alice Johnson",
            firstName: "Alice Johnson",
            profileUrl: "https://example.com/profile"
        },
        dateComment: "2024-03-06"
    }
]
const CommentContainer = (props:Props) => {
    const {data,isSuccess:success}= useFetchComment(props.postId)
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
    if(success){
        console.log(data)
    }

    return (
        <div className="overlay" onClick={props.HandleClick}>
            <div className="central h-[25vh] overflow-y-scroll" onClick={(e)=>e.stopPropagation()}>
                {
                    isLoading && (
                        <p>Load comments...</p>
                    )
                }
                {
                    data?.data.length === 0 &&(
                        <p>reply to this topic</p>
                    )
                }
                {
                    data?.data.map((elem:IComment,key:number)=>(
                        <CommentItems key={key} content={elem.comment.content} user={elem.user} created_at={elem.comment.created_at}/>
                    ))
                }
            <form onSubmit={handleSubmit(onSubmit)} className="flex bottom-0 justify-between space-x-6 px-4 pt-3 w-full ">
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