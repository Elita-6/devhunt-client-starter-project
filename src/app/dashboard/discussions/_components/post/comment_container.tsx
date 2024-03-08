"use client"
import React, {useEffect, useRef} from 'react';
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
const CommentContainer = (props:Props) => {
    const {data,isSuccess:success}= useFetchComment(props.postId)
    const scrollref = useRef<HTMLDivElement | null>(null)
    const {isSuccess,isLoading,mutate} = useCreateComment(props.postId)
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm<IFormInput>()
    useEffect(()=>{
        scrollref.current?.scrollIntoView({behavior: "smooth"})
    },[data])
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
            <div className='central'>
                <div className="relative h-[35vh] overflow-y-scroll" onClick={(e) => e.stopPropagation()}>
                            {isLoading && <p>Load comments...</p>}
                    {
                        data != undefined && (
                        <>
                            {data?.data.length === 0 && <p>reply to this topic</p>}
                            {data?.data.map((elem: IComment, key: number) => (
                                <CommentItems key={key} content={elem.comment.content} user={elem.user} created_at={elem.comment.created_at} />
                            ))}
                        </>

                        )
                    }
                    <div className='mt-[8vh] w-full' ref={scrollref}/>
                    <form onSubmit={handleSubmit(onSubmit)}  className=" bottom-4 left-0 right-0 px-4 pt-3 flex justify-between space-x-6">
                        <input type="text" placeholder="Type your message here" className="outline-none p-2 input bg-[#E8F4FC] w-[25vw]" {...register("comment", { required: true })} />
                        <button type="submit" className="bg-[#0000FF] p-2 rounded-lg">
                            <Send className="text-white" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommentContainer;