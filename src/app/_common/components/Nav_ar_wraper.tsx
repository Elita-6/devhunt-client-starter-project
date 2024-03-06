'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import Navbar from "@/app/_common/components/navbar";

const NavBarWrapper = () => {
    const pathname = usePathname()
    return (
        <>
            {
                pathname == "/signin" ? (
                    <></>
                ):(
                    <Navbar/>
                )
            }
        </>
    );
};

export default NavBarWrapper;