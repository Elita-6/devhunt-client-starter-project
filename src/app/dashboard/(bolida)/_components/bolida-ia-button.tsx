'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import Image from "next/image";
interface Props{
    HandleCLickBolidaButton:()=>void
}
const BolidaIaButton = (props:Props) => {

    return (
        <div className='fixed right-5 bottom-5 cursor-pointer' onClick={props.HandleCLickBolidaButton}>
            <Image src="/bolida-ia.png" alt="bolida ia icon" width={50} height={50}/>
        </div>
    );
};

export default BolidaIaButton;