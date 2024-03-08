"use client"
import React, {useState} from 'react';
import {CustomAvatar} from "@/app/_common/components/avatar";
import {IPost} from "@/app/dashboard/discussions/_services/definition";
import { format, isToday } from 'date-fns';
import { Reply} from 'lucide-react';
import Reaction from "@/app/dashboard/discussions/_components/post/reaction";
import Comment from "@/app/dashboard/discussions/_components/post/comment";
import CommentContainer from "@/app/dashboard/discussions/_components/post/comment_container";

const PostItem = (props:Partial<IPost>) => {
    const[isReply,setIsReply] = useState(false)
    const HandleClickReply = ()=>{
        setIsReply(ancien=>!ancien)
    }
    const date = new Date(props.dateCreation!);
    return (
        <>
            <div className="flex space-x-3 w-full mt-5">
                <div className="flex flex-col justify-start">
                    <CustomAvatar image_url={props.user?.profileUrl!} style="w-[3vw] h-[6vh]"/>
                </div>
                <div className="flex flex-col mt-2 space-y-3 w-full">
                    <div className="flex space-x-3 w-full">
                        <h4 className="font-semibold">
                            {
                                props.user?.userName! == null ?(
                                    <>
                                        {props.user?.firstName!}
                                    </>
                                    ):(
                                        <>
                                        {props.user?.userName!}
                                        </>
                                )
                            }
                        </h4>
                        <p className="text-[#837676] ">
                            {
                                isToday(date) ? (
                                    <>
                                        Today {format(date, 'HH:mm a')}
                                    </>
                                ):(
                                    <>
                                        {format(date, 'MMM dd, HH:mm a')}
                                    </>
                                )
                            }
                        </p>
                    </div>
                    <p className="w-[90%]">
                        {props.postDescription}
                    </p>
                    <div className="flex space-x-2">
                        {
                            props.tags?.map((elem:string,key:number)=>(
                                <p key={key} className='text-sm font-bold'> {elem}</p>
                            ))
                        }
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="flex items-center space-x-12">
                            {
                                props.reaction ? (
                                    <Reaction postId={props.postId!} reaction={props.reaction?.length!}/>
                                ):(
                                    <Reaction postId={props.postId!} reaction={10}/>
                                )
                            }
                            <Comment postId={props.postId!} comment={props.comments?.length!} isReply={isReply} HandleClick={HandleClickReply} firstName={props.user?.firstName!} username={props.user?.userName!} profileUrl={props.user?.profileUrl!} postTitle={format(date, 'MMM dd, HH:mm a')}/>
                        </div>
                        <button onClick={HandleClickReply}  className=" flex space-x-1 bg-[#ECEAEA]  dark:text-[#444] rounded-full px-3 py-2">
                            <Reply className="w-5 h-5" />
                            <span > reply </span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PostItem;