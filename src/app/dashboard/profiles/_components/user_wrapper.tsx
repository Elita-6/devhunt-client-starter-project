"use client"
import UserCard from "@/app/dashboard/profiles/_components/user_card";
import React , {useState} from "react";
import {useFetchUser} from "@/app/dashboard/profiles/_hooks/profile_hook";
import {
    NavigationMenu , NavigationMenuContent ,
    NavigationMenuItem , NavigationMenuLink ,
    NavigationMenuList ,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {Input} from "@/components/ui/input";
import {users} from "@/app/_common/constants/data";

export default function UserWrapper() {
    const [level, setLevel] = useState('all');
    const [query, setQuery] = useState();
    const handleSelectLevel = (level: string) => {
        setLevel(level)
    }
    const handleSearch = (e) => {
        console.log(e.target.value)
    }
    return(
        <div className="flex flex-col gap-5">
            <div className=" h-[5rem] flex justify-between items-center ">
                <Input
                    type='search'
                    value={query}
                    onKeyUp={handleSearch}
                    className="w-[24rem] bg-blue-50 h-14"
                    placeholder="Search by name .."
                />
                <div className="flex justify-end">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>{level.toUpperCase()}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {
                                        ["L1",'L2','L3',"M1","M2","All"].map(level =>(
                                            <NavigationMenuItem
                                                key={level}
                                                className="list-none py-3 px-6 cursor-pointer hover:bg-blue-50"
                                                onClick={() => handleSelectLevel(level)}
                                            >
                                                {level}
                                            </NavigationMenuItem>
                                        ))
                                    }
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>


            </div>
            <div className="w-full grid grid-cols-4 gap-3">
                {users.map(user => (
                    <UserCard id={user.id} name={user.username} image_url={user.profile_url} key={user.profile_url}/>
                ))}
            </div>
        </div>

    )
}
