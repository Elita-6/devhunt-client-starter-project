'use client'
import React from 'react';
import {useSession} from "next-auth/react";

const LeftBarNavigation = () => {
    const session = useSession()
    return (
        <div>

        </div>
    );
};

export default LeftBarNavigation;