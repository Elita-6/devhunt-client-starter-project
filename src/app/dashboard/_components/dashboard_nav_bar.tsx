"use client"
import React from 'react';
import Searchbar from "@/app/dashboard/_components/serach_bar";
import DropdownMenuContainer from "@/app/dashboard/_components/dropdown_menu";
import {Bell} from "lucide-react";

const DashboardNavBar = () => {
        return (
            <div className='relative w-full p-4'>
                <div className='absolute left-3'>
                    <Searchbar/>
                </div>
                <div className='flex items-center justify-end space-x-6'>
                    <Bell size={25} />
                    <DropdownMenuContainer/>
                </div>
            </div>
        )

};

export default DashboardNavBar;