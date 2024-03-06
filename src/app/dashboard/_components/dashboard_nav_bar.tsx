'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import {AuthWrapper} from "@/app/_common/components/auth_components";

const DashboardNavBar = () => {

    return (
        <div className='flex justify-between '>
            <AuthWrapper/>
        </div>
    );
};

export default DashboardNavBar;