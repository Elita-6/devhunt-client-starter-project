import React from 'react';
import {ChevronLeft, MoreVertical} from "lucide-react";
import {CustomAvatar} from "@/app/_common/components/avatar";

interface Props{
    HandleCLickButton:()=>void
    profileUrl:string
    username:string
    firstName:string
    postTitle:string
}
const CommentBar = (props:Props) => {
    return (
        <div className="relative bg-white w-full">
            <div className="absolute inset-x-0 top-0 z-10 bg-white w-full">
                <div className="fixed w-full flex justify-between bg-white py-2 items-center">
                    <div className="flex justify-between items-center space-x-4">
                        <button onClick={props.HandleCLickButton}>
                            <ChevronLeft size={35}/>
                        </button>
                        <div className=' flex items-center space-x-3'>
                            <CustomAvatar image_url={props.profileUrl}/>
                            <div className="flex flex-col space-y-1">
                                <h2 className="font-semibold">
                                    {
                                        props.username! == null ?(
                                            <>
                                                {props.firstName!}
                                            </>
                                        ):(
                                            <>
                                                {props.username!}
                                            </>
                                        )
                                    }
                                </h2>
                                <p className="font-light opacity-75 text-sm">
                                    {props.postTitle}
                                </p>
                            </div>
                        </div>
                    </div>
                    <MoreVertical size={35} />
                </div>
            </div>
        </div>
    );
};

export default CommentBar;