"use client"
import React, {useEffect, useRef} from 'react';
import BolidaDiscuBar from "@/app/dashboard/(bolida)/_components/bolida_discu_bar";
import Image from "next/image";
import {useSession} from "next-auth/react";
import BolidaForm from "@/app/dashboard/(bolida)/_components/form_bolida";
import {IMessage} from "@/app/dashboard/(bolida)/_services/definition";
import Message from "@/app/dashboard/(bolida)/_components/message";
import {useFetchAllMessage} from "@/app/dashboard/(bolida)/_hooks/bolida_hooks";
interface Props{
    HandleCLickBolidaButton:()=>void
}

const BolidaDiscuContainer = (props:Props) => {
    const session = useSession();
    const{data,isLoading,isSuccess}=useFetchAllMessage()
    const scrollref = useRef<HTMLDivElement | null>(null)
    if(isSuccess){
        console.log("test")
    }
    useEffect(()=>{
        scrollref.current?.scrollIntoView({behavior: "smooth"})
    },[data])
    return (
        <div className="fixed right-20 dark:text-black  bottom-20 bg-white shadow-md  z-40 h-[70vh] w-[30vw] overflow-y-scroll">
            <BolidaDiscuBar HandleCLickBolidaButton={props.HandleCLickBolidaButton}/>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="bolida-profile mt-[8vh]   flex justify-center items-center">
                    <Image  src="/bolida_profile.png" alt="bolida profile" width={55} height={55} />
                </div>
                {
                    session.data && (
                         <p className="text-center">Hey {session.data?.user.name!.split(" ")[0]} .How can I am your AI assistant </p>
                    )
                }
            </div>
            <div className="mt-4 p-3 ">
                {
                    isLoading ? (
                        <p>Loading...</p>
                    ):
                    (
                        <>
                            {
                                data?.data.map((message:Partial<IMessage>,key:number)=>(
                                    <Message key={key} messageId={message.messageId!} messageContent={message.messageContent!} isBot={message.isBot!}/>
                                ))
                            }
                        </>
                    )
                }
            </div>
            <div className="mt-[8vh]" ref={scrollref}/>
            <BolidaForm/>
        </div>
    );
};

export default BolidaDiscuContainer;