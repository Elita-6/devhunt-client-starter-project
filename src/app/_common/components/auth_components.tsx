"use client"
import { Button } from "@/components/ui/button";
import {ChevronDown , LogOut} from 'lucide-react';
import { useSession } from "next-auth/react";
import { CustomAvatar } from "./avatar";
import Link from "next/link";

export const AuthWrapper = () => {
    const session = useSession();
    if (session.data){
        const data = session.data.user;
        return (
            <div className='w-full flex items-center justify-center gap-5'>
                <Link href="/dashboard">
                    <CustomAvatar image_url={data?.image!} username={data?.name!} style='h-12 w-12' />
                </Link>
                <div className="flex flex-col ">
                    <span className="text-xl font-medium">{data?.name}</span>
                    <span className="text-gray-700">{data?.email}</span>
                </div>
                <ChevronDown />
             </div>
        )

    }
    return (
        <div className='h-full flex items-center justify-center gap-5'>
            <SignUpButton />
            <LoginButton />
        </div>
    )
}


export const LoginButton =  () => {
    return(
        <Button className="h-[2.5rem] px-6">
            Login
        </Button>
    )

}
export  const SignUpButton = () => {
    return(
        <Button variant="outline" className="h-[2.5rem] px-6">
            Sign Up
        </Button>
    )
}


export  const LogoutButton = () => {
    return(
        <Button>
            <LogOut />
            Log out
        </Button>
    )
}
