"use client"
import {Pencil} from "lucide-react";
import {Button} from "@/components/ui/button";
import React , {useState} from "react";
import {useSession} from "next-auth/react";
import CreateProjectModal from "@/app/dashboard/profiles/_components/project/create_project_modal";

export function CreateProject({profileId}: {profileId: string}) {
    const [isCreate,setIsCreate] = useState(false)
    const session = useSession();
    const HandleClick = ()=>{
        setIsCreate(ancien=>!ancien)
    }
    return(
        <>
            {
                isCreate && (
                    <CreateProjectModal HandleClick={HandleClick} profileId={profileId}  />
                )
            }
            <Button onClick={HandleClick} className="flex gap-2">
                Add project
            </Button>
        </>

    )
}
