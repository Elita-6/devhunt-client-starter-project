"use client"
import React from 'react';
import BolidaDiscuBar from "@/app/dashboard/(bolida)/_components/bolida_discu_bar";
import Image from "next/image";
import {useSession} from "next-auth/react";
import BolidaForm from "@/app/dashboard/(bolida)/_components/form_bolida";
import {IMessage} from "@/app/dashboard/(bolida)/_services/definition";
import Message from "@/app/dashboard/(bolida)/_components/message";
interface Props{
    HandleCLickBolidaButton:()=>void
}
const messages: IMessage[] = [
    {
        messageId: "1",
        messageContent: "Bonjour!",
        isBot: false
    },
    {
        messageId: "2",
        messageContent: "Comment allez-vous?",
        isBot: true
    },
    {
        messageId: "3",
        messageContent: "Je vais bien, merci!",
        isBot: false
    },
    {
        messageId: "4",
        messageContent: "Je vais bien, merci!",
        isBot: true
    },
    {
        messageId: "5",
        messageContent: "Je vais bien, merci!",
        isBot: true
    },
];

const BolidaDiscuContainer = (props:Props) => {
    const session = useSession();
    return (
        <div className="fixed right-20  pt-4 bottom-20 shadow-md h-[65vh] w-[30vw] overflow-y-scroll">
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
                  messages.map((message,key)=>(
                      <Message key={key} messageId={message.messageId} messageContent={message.messageContent} isBot={message.isBot}/>
                  ))
                }
            </div>
            <div className="mt-[8vh]"/>
            <BolidaForm/>
        </div>
    );
};

export default BolidaDiscuContainer;