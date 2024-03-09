import {Skeleton} from "@/components/ui/skeleton";
import {CustomAvatar} from "@/app/_common/components/avatar";
import {Box} from "@/app/dashboard/profiles/_components/box";
import {Diamond} from "lucide-react";
import {SocialLInk} from "@/app/dashboard/profiles/_components/SocialLInk";

export function ProfileDetailsSkeleton() {
    return(
        <div className="w-full h-full px-24">
            <Skeleton className=" h-[12rem] relative rounded-lg">
                <div className="absolute -bottom-12 md:px-[5%] lg:px-[10%] ">
                    <div className="flex items-center gap-5">
                        <Skeleton className="h-32 w-32  border-4 dark:border-gray-950 rounded-full"  />
                        <Skeleton className="flex flex-col justify-between  ">

                        </Skeleton>
                    </div>
                </div>
            </Skeleton>
            <Skeleton className="h-5  w-24 mt-32 mb-5"></Skeleton>
            <div className="w-full grid grid-cols-4  gap-3">
                <Skeleton className="h-[25rem]" />
                <Skeleton className="h-[25rem]" />
                <Skeleton className="h-[25rem]" />
                <Skeleton className="h-[25rem]" />
            </div>

        </div>
    )
}
