import React from 'react';
import {AuthWrapper} from "@/app/_common/components/auth_components";
import {ModeToggle} from "@/app/_common/components/mode-toggle";



const Navbar = () => {
    return (
        <nav className="w-full h-[5rem]">
            <div className="max-w-[90%] m-auto flex justify-between items-center py-3">
                <h2 className="text-4xl font-bold">.Logo</h2>
                <div className="flex items-center gap-5 ">
                    <AuthWrapper />
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
