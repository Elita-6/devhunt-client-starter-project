"use client"
import React from 'react';
import { GoDownload } from "react-icons/go";
import TableRow from "@/app/dashboard/ressources/_components/table/table_row";
import TableHeader from "@/app/dashboard/ressources/_components/table/table_header";
import {useFetchResource} from "@/app/dashboard/ressources/_hooks/resource_hook";


interface Technology {
    name: string;
    icon: string;
}

interface TableRowProps {
    image?: string;
    title: string;
    technologies: Technology[];
    author: string;
    timeAgo: string;
    onDownload?: () => void;
}

const TableBody: React.FC = () => {
    const{data,isSuccess,isLoading}=useFetchResource()
    const dataT: TableRowProps[] = [
        {
            image: "https://via.placeholder.com/150",
            title: "Algorithme pour les nuls",
            technologies: [
                { name: "Algo", icon: "https://example.com/react-icon.png" },
                { name: "Python", icon: "https://example.com/nodejs-icon.png" },

            ],
            author: "Riry Nomenjanahary",
            timeAgo: "3 hour ago",
            onDownload: () => console.log("Téléchargement 1"),
        },
        {
            image: "https://via.placeholder.com/150",
            title: "React fundamentals",
            technologies: [
                { name: "React", icon: "https://example.com/vuejs-icon.png" },
            ],
            author: "Antonino",
            timeAgo: "1 day ago",
            onDownload: () => console.log("Téléchargement 2"),
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Web development roadmap",
            technologies: [
                { name: "Web development", icon: "https://example.com/angular-icon.png" },
            ],
            author: "Andrianiaina Nomena",
            timeAgo: "8 hours ago",
            onDownload: () => console.log("Téléchargement 3"),
        },
    ];

    return (
        <table>
            <TableHeader/>
            <tbody>
            {dataT.map((item, index) => (
                <TableRow
                    key={index}
                    image={item.image}
                    title={item.title}
                    technologies={item.technologies}
                    author={item.author}
                    timeAgo={item.timeAgo}
                    onDownload={item.onDownload}
                />
            ))}
            </tbody>
        </table>
    );
};

export default TableBody;
