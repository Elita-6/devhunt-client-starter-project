"use client"
import React from 'react';
import {ITag} from "@/app/dashboard/discussions/_services/definition";
import {useFetchPopularTag} from "@/app/dashboard/discussions/_hooks/post_hooks";



const LeftFilterTag = () => {
    const{data,isLoading,isSuccess} = useFetchPopularTag()
    return (
        <div className="flexx flex-col space-y-3">
            <h3 className="text-xl font-semibold">
                Popular Tags
            </h3>
                {
                    isLoading &&  (
                        <p>Loading to get popular tag...</p>
                    )
                }
            <div className="grid grid-cols-2 gap-3 ">
                {
                    data?.data.map((elem:ITag,key:number)=>(
                        <button key={key}  className="bg-[#CBD5E1] rounded-xl text-sm py-2 px-4">
                            {elem.tagDesign}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftFilterTag;