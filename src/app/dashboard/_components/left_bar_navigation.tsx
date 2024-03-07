import React from 'react';
import { Links } from "./nav_link"
import { LinkedIconButton } from "./linked_icon_button"
// import ColorMode from "./colorMode"

export const LeftBarNavigation = () => {
    return (
        <div className="flex flex-col items-center bg-[#FBF9F9] border-r-2 border-gray-300 h-screen border-opacity-50 pt-16 pb-10 space-y-2.5 w-60">
            <div className="flex flex-col flex-grow">
                {
                    Links.map((link, index) => (
                        <LinkedIconButton href={link.href} icon={link.icon} key={index} name={link.name} />
                    ))
                }
            </div>
            {/* <div>
                <ColorMode />
            </div> */}
        </div>
    )
}
