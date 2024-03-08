"use client"
import React from 'react';
import {FaCommentAlt} from "react-icons/fa";
import {useFetchComment} from "@/app/dashboard/discussions/_hooks/post_hooks";
import CommentContainer from "@/app/dashboard/discussions/_components/post/comment_container";


const Comment = ({postId,HandleClick,isReply,comment}:{postId:string,HandleClick:()=>void,isReply:boolean,comment:number}) => {
    const {data,isLoading}= useFetchComment(postId)
    return (
        <>
            {
                isReply && (
                    <CommentContainer postId={postId}HandleClick={HandleClick}/>
                )
            }
            <button onClick={HandleClick} className="flex space-x-3 items-center">
                <FaCommentAlt className="text-[#0000FF]  " size={24} />
                <span>{comment}</span>
            </button>
        </>
    );
};

export default Comment;