"use client"
import React from 'react';
import BolidaDiscuBar from "@/app/dashboard/(bolida)/_components/bolida_discu_bar";
import Image from "next/image";
import {useSession} from "next-auth/react";
import BolidaForm from "@/app/dashboard/(bolida)/_components/form_bolida";
interface Props{
    HandleCLickBolidaButton:()=>void
}
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
            <BolidaForm/>
        </div>
    );
};

export default BolidaDiscuContainer;