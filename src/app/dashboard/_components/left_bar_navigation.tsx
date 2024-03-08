'use client'
import React, { useState } from 'react';
import { Links } from "./nav_link"
import { LinkedIconButton } from "./linked_icon_button"
import ThemeToggle from "./theme_toggle"
import {useTheme} from "next-themes";

export const LeftBarNavigation = () => {
    const {theme, setTheme} = useTheme();

    return (
            <div className={`fixed flex flex-col dark:bg-gray-950 border-r border-gray-200 dark:border-gray-700  h-screen  w-[18rem]`}>
                <h4 className="text-2xl ml-4 my-5 text-primary dark:text-white font-bold ">.Miray App</h4>
                <div className="flex flex-col flex-grow gap-3">
                    {
                        Links.map((link, index) => (
                            <LinkedIconButton href={link.href} icon={link.icon} key={index} name={link.name} />
                        ))
                    }
                </div>
                <div className="flex justify-start items-center pb-10 ml-6">
                    <ThemeToggle theme={theme? theme: "dark"} setMode={() => setTheme(theme == "dark" ? "light": "dark")} />
                    {theme == "dark" ? <p className="ml-[10px] leading-none">Dark mode</p> : <p className="ml-[10px] leading-none">Light mode</p>}
                </div>
            </div>

    )
}
