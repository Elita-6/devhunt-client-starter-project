"use client"
import {Pencil} from "lucide-react";
import {Button} from "@/components/ui/button";
import React , {useState} from "react";
import {useSession} from "next-auth/react";
import EditProfileModal from "@/app/dashboard/profiles/_components/edit_profile.modal";

export function EditProfile({profileId}: {profileId: string}) {
    const [isCreate,setIsCreate] = useState(false)
    const session = useSession();
    const HandleClick = ()=>{
        setIsCreate(ancien=>!ancien)
    }
    return(
        <>
            {
                isCreate && (
                    <EditProfileModal HandleClick={HandleClick} profileId={profileId}  />
                )
            }
            <Button onClick={HandleClick} className="bg-blue-700 flex gap-2">
                <Pencil size={22} />
                Edit profile
            </Button>
        </>

    )
}
