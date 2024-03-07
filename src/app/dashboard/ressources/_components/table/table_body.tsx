"use client"
import React from 'react';
import { GoDownload } from "react-icons/go";
import TableRow from "@/app/dashboard/ressources/_components/table/table_row";
import TableHeader from "@/app/dashboard/ressources/_components/table/table_header";


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
    const data: TableRowProps[] = [
        {
            image: "https://via.placeholder.com/150",
            title: "Application de gestion des tâches",
            technologies: [
                { name: "React.js", icon: "https://example.com/react-icon.png" },
                { name: "Node.js", icon: "https://example.com/nodejs-icon.png" },
                { name: "MongoDB", icon: "https://example.com/mongodb-icon.png" },
            ],
            author: "John Doe",
            timeAgo: "Il y a 3 jours",
            onDownload: () => console.log("Téléchargement 1"),
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Application de suivi des dépenses",
            technologies: [
                { name: "Vue.js", icon: "https://example.com/vuejs-icon.png" },
                { name: "Firebase", icon: "https://example.com/firebase-icon.png" },
                { name: "Tailwind CSS", icon: "https://example.com/tailwindcss-icon.png" },
            ],
            author: "Jane Smith",
            timeAgo: "Il y a 1 semaine",
            onDownload: () => console.log("Téléchargement 2"),
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Application de partage de recettes",
            technologies: [
                { name: "Angular", icon: "https://example.com/angular-icon.png" },
                { name: "Express.js", icon: "https://example.com/expressjs-icon.png" },
                { name: "MySQL", icon: "https://example.com/mysql-icon.png" },
            ],
            author: "Alice Johnson",
            timeAgo: "Il y a 2 semaines",
            onDownload: () => console.log("Téléchargement 3"),
        },
    ];

    return (
        <table>
            <TableHeader/>
            <tbody>
            {data.map((item, index) => (
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
