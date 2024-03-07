"use client"
import React from 'react';
import {FaCommentAlt} from "react-icons/fa";
import {useFetchComment} from "@/app/dashboard/discussions/_hooks/post_hooks";
import CommentContainer from "@/app/dashboard/discussions/_components/post/comment_container";

const comments= [
    {
        content: "Great post!",
        user: {
            userId: "2",
            userName: "Jane Smith",
            profileUrl: "https://example.com/profile"
        },
        dateComment: "2024-03-06"
    },
    {
        content: "I agree!",
        user: {
            userId: "3",
            userName: "Alice Johnson",
            profileUrl: "https://example.com/profile"
        },
        dateComment: "2024-03-06"
    }
]
const Comment = ({postId,HandleClick,isReply,comment}:{postId:string,HandleClick:()=>void,isReply:boolean,comment:number}) => {
    const {}= useFetchComment(postId)
    return (
        <>
            {
                isReply && (
                    <CommentContainer comments={comments} HandleClick={HandleClick}/>
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