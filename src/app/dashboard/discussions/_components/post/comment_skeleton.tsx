import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

const CommentSkeleton = () => {
    return (
        <div  className="flex justify-between items-center dark:text-[#444] pr-3">
            <div className=" p-3 flex items-center space-x-2">
                <Skeleton className="h-12 w-24 rounded-full" />
                <div className="flex flex-col space-y-1">
                    <Skeleton className="h-[3vh] w-[4vw]"/>
                    <Skeleton className="h-[3vh] w-[3vw]"/>
                    <div className=' flex items-center space-x-3 text-sm'>
                        <Skeleton className="h-[3vh] w-[4vw]"/>
                    </div>
                </div>
                <Skeleton className="h-[5vh] w-[80%]"/>
                <Skeleton className="h-[3vh] w-[4vw]"/>
            </div>
            <Skeleton className="h-[2vh] w-[2vw]"/>
        </div>
    );
};

export default CommentSkeleton;