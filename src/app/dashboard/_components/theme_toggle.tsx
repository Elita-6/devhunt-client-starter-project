'use client'
import React, { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

interface ThemeToggleProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode, setDarkMode]);

    return (
        <div
            className="relative w-16 h-8 flex items-center
            dark:bg-teal-500 bg-gray-900 cursor-pointer
            rounded-full p-1"
            onClick={() => setDarkMode(!darkMode)}
        >
            <FaMoon className="text-white" size={18} />
            <div
                className="absolute bg-white
                dark:bg-medium w-6 h-6 rounded-full shadow-md
                 transform transition-transform duration-300"
                style={darkMode ? { left: "2px" } : { right: "2px" }
                }
            ></div>
            <BsSunFill
                className="ml-auto text-yellow-400"
                size={18}
            />
        </div>
    )
};

export default ThemeToggle;
