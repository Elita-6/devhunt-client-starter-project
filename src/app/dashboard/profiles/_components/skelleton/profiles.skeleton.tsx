import {Skeleton} from "@/components/ui/skeleton";


 function CardSkeleton() {
    return(
        <Skeleton className="flex flex-col  bg-gray-100  items-center  space-y-4 py-5 px-3">
            <Skeleton className="w-36 h-36 rounded-full">

            </Skeleton>
            <Skeleton className="w-[50%] h-5 ">

            </Skeleton>
            <Skeleton className="w-full h-8">

            </Skeleton>
        </Skeleton>
    )
}

export function ProfileSkeleton() {
    return(
       <div className="w-full grid grid-cols-4 gap-3">
           {
               [0,1,2,3,5,6,7].map((index) =>(
                   <CardSkeleton key={index} />
               ))
           }
       </div>
    )
}
