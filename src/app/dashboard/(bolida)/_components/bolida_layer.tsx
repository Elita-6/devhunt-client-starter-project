"use client"
import React, {useState} from 'react';
import BolidaDiscuContainer from "@/app/dashboard/(bolida)/_components/bolida_discu_container";
import BolidaIaButton from "@/app/dashboard/(bolida)/_components/bolida-ia-button";

const BolidaLayer = () => {
    const [isBolida,setIsBolida] = useState(false)
    const HandleClickBolidaIcon = ()=>{
        setIsBolida(ancien=>!ancien)
    }
    return (
        <div>
            {
                isBolida && (
                    <BolidaDiscuContainer HandleCLickBolidaButton={HandleClickBolidaIcon}/>
                )
            }
            <BolidaIaButton HandleCLickBolidaButton={HandleClickBolidaIcon}/>
        </div>
    );
};

export default BolidaLayer;