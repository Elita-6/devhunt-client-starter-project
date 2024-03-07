"use client"
import React from 'react';
import {IComment} from "@/app/dashboard/discussions/_services/definition";
import CommentItems from "@/app/dashboard/discussions/_components/post/comment_items";
interface Props{
    comments: IComment[]
    HandleClick:()=>void
}
const CommentContainer = (props:Props) => {
    return (
        <div className="overlay" onClick={props.HandleClick}>
            <div className="central" onClick={(e)=>e.stopPropagation()}>
                {
                    props.comments.map((elem,key)=>(
                        <CommentItems key={key} content={elem.content} user={elem.user} dateComment={elem.dateComment}/>
                    ))
                }
            </div>
        </div>
    );
};

export default CommentContainer;