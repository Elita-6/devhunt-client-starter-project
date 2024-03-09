import React from 'react';
import {IComment} from "@/app/dashboard/discussions/_services/definition";
import {CustomAvatar} from "@/app/_common/components/avatar";
import {Heart} from "lucide-react";
import {format} from "date-fns";
import {IUser} from "@/app/_common/definition";
interface Props{
    user:Partial<IUser>
    created_at:string
    content:string,
}
const CommentItems = (props:Props) => {
    const date = new Date();
    console.log(props.created_at)

    return (
        <div data-idcomment='idcomment' className="flex justify-between items-center dark:text-[#444] pr-3">
            <div className=" p-3 flex items-center space-x-2">
                <CustomAvatar userId={props.user.userId!} username={props.user.userName!} image_url={props.user.profileUrl!}/>
                <div className="flex flex-col space-y-1">
                    <div className="flex space-x-2">
                        <p className='font-semibold hover:underline'>
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
                        </p>

                        <div className=' flex items-center space-x-3 text-sm'>
                            <span className='cursor-pointer text-sm text-[#837676]' >{format(date, 'MMM dd, HH:mm a')}</span>
                        </div>
                    </div>
                    <p>
                        {props.content}
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <Heart   className='text-[#B85252] cursor-pointer '/>
            </div>
        </div>
    );
};

export default CommentItems;