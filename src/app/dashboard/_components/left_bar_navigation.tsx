'use client'
import React from 'react';
import { useSession } from "next-auth/react";

const LeftBarNavigation = () => {
    const session = useSession()
    return (
        <div>
            <p>dfezgergreger</p>
        </div>
    );
};

export default LeftBarNavigation;