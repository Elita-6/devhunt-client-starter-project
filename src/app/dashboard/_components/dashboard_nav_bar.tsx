"use client"
import React from 'react';
import {useSession} from "next-auth/react";
import {AuthWrapper} from "@/app/_common/components/auth_components";
import Searchbar from "@/app/dashboard/_components/serach_bar";
import {CustomAvatar} from "@/app/_common/components/avatar";

const DashboardNavBar = () => {
    const session = useSession();
    if(session.data){
        const data = session.data.user;
        return (
            <div className='relative w-full p-4'>
                <div className='absolute left-0'>
                    <Searchbar/>
                </div>
                <div className='flex justify-end'>
                    <CustomAvatar image_url={data?.image!} username={data?.name!} style='h-12 w-12' />

                </div>
            </div>
        )
    }else{
        return (
            <>
            </>
        )
    }
};

export default DashboardNavBar;