'use client'
import React, { useState } from 'react';
import { Links } from "./nav_link"
import { LinkedIconButton } from "./linked_icon_button"
import ThemeToggle from "./theme_toggle"

export const LeftBarNavigation = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`flex flex-col items-center bg-[#FBF9F9] dark:bg-gray-950 dak border-r-2 border-gray-300 h-screen border-opacity-50 pt-16 space-y-2.5 w-60 ${darkMode ? 'dark' : ''}`}>
            <div className="flex flex-col flex-grow">
                {
                    Links.map((link, index) => (
                        <LinkedIconButton href={link.href} icon={link.icon} key={index} name={link.name} />
                    ))
                }
            </div>
            <div className="flex justify-center items-center pb-10">
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                {darkMode ? <p className="ml-[10px] leading-none">Dark mode</p> : <p className="ml-[10px] leading-none">Light mode</p>}
            </div>
        </div>
    )
}
