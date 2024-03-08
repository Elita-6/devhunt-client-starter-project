import React from 'react';
import {ChevronLeft, MoreVertical} from "lucide-react";

interface Props{
    HandleCLickBolidaButton:()=>void
}
const BolidaDiscuBar = (props:Props) => {
    return (
        <div className="relative bg-white dark:text-black">
            <div className="absolute inset-x-0 top-0 z-10 bg-white">
                <div className="fixed w-[30vw] flex justify-between bg-white py-2 items-center">
                    <div className="flex justify-between items-center space-x-4">
                        <button onClick={props.HandleCLickBolidaButton}>
                            <ChevronLeft size={35}/>
                        </button>
                        <div className="flex flex-col space-y-1">
                            <h2 className="font-semibold">
                                Bolida Assistant
                            </h2>
                            <p className="font-light opacity-75 text-sm">
                                bolidaAi is replaying...
                            </p>
                        </div>
                    </div>
                    <MoreVertical size={35} />
                </div>
            </div>
        </div>

    );
};

export default BolidaDiscuBar;