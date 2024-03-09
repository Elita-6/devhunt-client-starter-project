"use client"
import {Pencil} from "lucide-react";
import {Button} from "@/components/ui/button";
import React , {useState} from "react";
import {useSession} from "next-auth/react";
import EditProfileModal from "@/app/dashboard/profiles/_components/edit_profile.modal";
import CreateExperienceModal from "@/app/dashboard/profiles/_components/create_experience_modal";

export function CreateExperience({profileId}: {profileId: string}) {
    const [isCreate,setIsCreate] = useState(false)
    const session = useSession();
    const HandleClick = ()=>{
        setIsCreate(ancien=>!ancien)
    }
    return(
        <>
            {
                isCreate && (
                    <CreateExperienceModal HandleClick={HandleClick} profileId={profileId}  />
                )
            }
            <Button onClick={HandleClick} className=" flex gap-2">
                Add experience
            </Button>
        </>

    )
}
