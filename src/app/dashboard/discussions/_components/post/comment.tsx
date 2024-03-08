"use client"
import React from 'react';
import {FaCommentAlt} from "react-icons/fa";
import CommentContainer from "@/app/dashboard/discussions/_components/post/comment_container";


const Comment = (
    {postId,HandleClick,isReply,comment,firstName,username,profileUrl,postTitle}:
    {postId:string,HandleClick:()=>void,isReply:boolean,comment:number,firstName:string,username:string,profileUrl:string,postTitle:string}) => {
    return (
        <>
            {
                isReply && (
                    <CommentContainer postId={postId}HandleClick={HandleClick} firstName={firstName} profileUrl={profileUrl} username={username} postTitle={postTitle}/>
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