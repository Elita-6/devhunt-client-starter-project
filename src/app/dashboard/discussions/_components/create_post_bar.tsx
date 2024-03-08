"use client"
import React, {useState} from 'react';
import {CustomAvatar} from "@/app/_common/components/avatar";
import {useSession} from "next-auth/react";
import {Smile,Image} from "lucide-react";
import CreatePostModal from "@/app/dashboard/discussions/_components/create_post_modal";

const CreatePostBar = () => {
    const [isCreate,setIsCreate] = useState(false)
    const session = useSession();
    const HandleClick = ()=>{
        setIsCreate(ancien=>!ancien)
    }
    return (
        <>
            {
                isCreate && (
                   <CreatePostModal HandleClick={HandleClick} />
                )
            }
            <button onClick={HandleClick} className=" flex bg-[#E8F4FC] rounded-full mx-5 items-center px-3 py-1 justify-between">
                <div className="flex items-center space-x-2" >
                    {
                        session.data && (
                            <CustomAvatar image_url={session.data?.user.image!} username={session.data?.user.name!} style='h-10 w-10' />
                        )
                    }
                    <p className="dark:text-[#444]">Tell everyone whats on your mind</p>
                </div>
                <div className="flex items-center space-x-2 dark:text-[#444]">
                    <Smile />
                    <Image />
                </div>
            </button>
        </>
    );
};

export default CreatePostBar;
