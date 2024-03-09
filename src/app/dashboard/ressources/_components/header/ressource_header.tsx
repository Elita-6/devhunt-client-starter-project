"use client"
import React, {useState} from 'react';
import ResourceModal from "@/app/dashboard/ressources/_components/resource_modal";

const ResourceHeader = () => {
    const [isUploaded,setIsUploaded]= useState(false)
    const HandleClickUploaded = ()=>{
        setIsUploaded(last=>!last)
    }
    return (
        <>
            {
                isUploaded && (
                    <ResourceModal HandleClick={HandleClickUploaded}/>
                )
            }
            <div className="flex w-full justify-between items-center">
                <h2 className="font-semibold text-xl">
                    Resources
                </h2>
                <button className="bg-[#0000FF] text-white py-2 px-3 rounded-lg" onClick={HandleClickUploaded}>
                    Upload resources
                </button>
            </div>
        </>
    );
};

export default ResourceHeader;