"use client"
import React from 'react';
import {IMessage} from "@/app/dashboard/(bolida)/_services/definition";
import Image from "next/image";


const Message = (props:IMessage) => {
    return (
        <>
            {
                props.isBot ?(
                    <div className="flex flex-col space-y-1 items-start mt-1">
                        <Image  alt="bot icon" src="/bolida_profile.png" width={20} height={20}/>
                        <p className="bg-[#0000FF99] text-white p-2 text-wrap w-[60%] rounded-lg">{props.messageContent}</p>
                    </div>
                ):(
                    <div className="flex flex-col space-y-1 items-end mt-2">
                        <p className="bg-[#334155] text-white p-2 text-wrap w-[60%] rounded-lg">{props.messageContent}</p>
                    </div>
                )
            }
        </>
    );
};

export default Message;