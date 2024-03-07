import React from 'react';
import { Links } from "./nav_link"
import { LinkedIconButton } from "./linked_icon_button"

export const LeftBarNavigation = () => {
    return (
        <div className="w-full h-full flex flex-col items-center bg-[#FBF9F9] px-2 border-r-1 border-gray-200  border-opacity-50 pt-16 space-y-2.5">
            {
                Links.map((link, index) => (
                    <LinkedIconButton href={link.href} icon={link.icon} key={index} name={link.name} />
                ))
            }
        </div>
    )
}
