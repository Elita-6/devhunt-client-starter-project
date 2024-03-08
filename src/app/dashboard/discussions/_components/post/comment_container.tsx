"use client"
import React, {useEffect, useRef} from 'react';
import {IComment} from "@/app/dashboard/discussions/_services/definition";
import CommentItems from "@/app/dashboard/discussions/_components/post/comment_items";
import {Send} from "lucide-react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateComment, useFetchComment} from "@/app/dashboard/discussions/_hooks/post_hooks";
import CommentSkeleton from "@/app/dashboard/discussions/_components/post/comment_skeleton";
import CommentBar from "@/app/dashboard/discussions/_components/post/comment_bar";
interface Props{
    HandleClick:()=>void
    postId:string,
        profileUrl:string
        username:string
        firstName:string
        postTitle:string
}
interface IFormInput{
    comment:string
}
const CommentContainer = (props:Props) => {
    const {data,isSuccess:success,isLoading:isFetchComment}= useFetchComment(props.postId)
    const scrollref = useRef<HTMLDivElement | null>(null)
    const {isSuccess,isLoading,mutate} = useCreateComment(props.postId)
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        resetField
    } = useForm<IFormInput>()
    useEffect(()=>{
        scrollref.current?.scrollIntoView({behavior: "smooth"})
    },[data])
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        mutate({
            content:data.comment,
            postId:props.postId
        })
        console.log(props.postId)
        if (isSuccess){
        resetField("comment")
            console.log("success")
        }
    }
    if(success){
        console.log(data)
    }

    return (
        <div className="overlay" onClick={props.HandleClick}>
            <div className='central'>
                <div className="relative h-[35vh] overflow-y-scroll" onClick={(e) => e.stopPropagation()}>

                    <CommentBar HandleCLickButton={props.HandleClick} firstName={props.firstName} postTitle={props.postTitle} profileUrl={props.profileUrl} username={props.username}/>
                            {isFetchComment && (
                                <>
                                    <CommentSkeleton/>
                                    <CommentSkeleton/>
                                    <CommentSkeleton/>
                                </>
                            )}
                    {
                        data != undefined && (
                        <div className='mt-[6vh]'>
                            {data?.data.length === 0 && <p>reply to this topic</p>}
                            {data?.data.map((elem: IComment, key: number) => (
                                <CommentItems key={key} content={elem.comment.content} user={elem.user} created_at={elem.comment.created_at} />
                            ))}
                        </div>

                        )
                    }
                    <form onSubmit={handleSubmit(onSubmit)}  className=" my-5 px-4 pt-3 flex justify-between space-x-6">
                        <input type="text" placeholder="Type your message here" className="outline-none dark:text-[#444] p-2 input bg-[#E8F4FC] w-[25vw]" {...register("comment", { required: true })} />
                        <button type="submit" disabled={isLoading} className="bg-[#0000FF] p-2 rounded-lg">
                            <Send className="text-white" />
                        </button>
                    </form>
                    <div className='' ref={scrollref}/>
                </div>
            </div>
        </div>
    );
};

export default CommentContainer;