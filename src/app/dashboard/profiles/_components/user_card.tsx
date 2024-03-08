'use client'

import {Card , CardContent , CardFooter , CardHeader} from "@/components/ui/card";
import {CustomAvatar} from "@/app/_common/components/avatar";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useRouter} from "next/navigation";
interface IUser {
    id: string
    name: string,
    image_url?: string,
    firstname: string,
    lastname: string


}
export  default function UserCard(data: IUser) {
    const router = useRouter();
    const username = data.name !==null ? data.name: data.firstname ;
    return(
        <Card className="flex flex-col  items-center">
            <CardHeader>
                <Link href={`profiles/${data.id}`}>
                    <CustomAvatar image_url={data.image_url ? data.image_url: ""} username={username}  style="h-[8rem] w-[8rem]"/>
                </Link>
            </CardHeader>
            <CardContent className="text-center font-semibold text-2xl">
                {username}
            </CardContent>
            <CardFooter className="flex gap-3 w-full">
                <Button className="bg-blue-700 w-full" onClick={() => router.push(`profiles/${data.id}`)}>
                     View Profile
                </Button>
            </CardFooter>
        </Card>
    )
}
