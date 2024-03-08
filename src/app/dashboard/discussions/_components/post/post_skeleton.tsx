import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

const PostSkeleton = () => {
    return (
        <div className="px-8 w-full" >
            <div className="flex space-x-3 w-full mt-5">
                <div className="flex flex-col justify-start">
                    <Skeleton className="h-12 w-12 rounded-full" />
                </div>
                <div className="flex flex-col mt-2 space-y-3 w-full">
                    <div className="flex space-x-3 w-full">
                        <Skeleton className="w-[5vw] h-[2vh]"/>
                        <Skeleton className="w-[3vw] h-[2vh]"/>
                    </div>
                    <Skeleton className="w-[90%] h-[8vh]"/>
                    <div className="flex space-x-2">
                        <Skeleton className="w-[3vw] h-[2vh]"/>
                        <Skeleton className="w-[3vw] h-[2vh]"/>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="flex items-center space-x-12">
                            <Skeleton className="w-[2vw] h-[4vh]"/>
                            <Skeleton className="w-[2vw] h-[4vh]"/>
                        </div>
                        <Skeleton className="rounded-full h-[4vh] w-[3vw]"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostSkeleton;