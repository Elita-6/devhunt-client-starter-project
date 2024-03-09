"use client"
import React from 'react';
import { GoDownload } from "react-icons/go";
import Image from "next/image";

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


    const TableRow: React.FC<TableRowProps> = ({
                                                   image,
                                                   title,
                                                   technologies,
                                                   author,
                                                   timeAgo,
                                                   onDownload,
                                               }) => {
        return (
            <tr className='text-center h-[6vh] border-b-dark-tremor-content border-b-[0.2px] border-opacity-20 '>
                <td>
                    <div className="flex space-x-2 items-center">
                        {image && <Image src={image} alt="Table Row Image" width={40} height={40}/>}
                        <p>{title}</p>
                    </div>
                </td>
                <td className=' flex justify-center my-2 space-x-2'>
                    {technologies.map((tech, index) => (
                        <button key={index} className="bg-[#CBD5E1] px-3 py-1 text-sm rounded-lg bg-opacity-65 text-[#0000FF]">
                            {tech.name}
                        </button>
                    ))}
                </td>
                <td>{author}</td>
                <td>{timeAgo}</td>
                <td className=''>
                    <div className='flex space-x-2 justify-center'>
                        {onDownload && (
                            <button className="text-[#0000FF] flex items-center space-x-2" onClick={onDownload}>
                                <GoDownload />
                                <span className="text-sm"> Downloads</span>
                            </button>
                        )}
                    </div>
                </td>
            </tr>
        );
    };

    export default TableRow;
