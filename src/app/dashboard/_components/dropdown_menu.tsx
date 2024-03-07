"use client"
import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {CustomAvatar} from "@/app/_common/components/avatar";
import {signOut , useSession} from "next-auth/react";
import {LogOut, Settings, User} from "lucide-react";
const DropdownMenuContainer = () => {
    const session = useSession();
    return (
        <div>

            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <button  className='hover:bg-none bg-none broder-none focus:border-none blur-none '>
                        {
                            session.data && (
                                <CustomAvatar image_url={session.data?.user.image!} username={session.data?.user.name!} style='h-10 w-10' />
                            )
                        }
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User size={20} />
                            <span className='ml-2'>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings size={20} />
                            <span className='ml-2'>Settings</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut({callbackUrl: '/'})}>
                        <LogOut size={20} />
                        <span className='ml-2'>LogOut</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DropdownMenuContainer;
