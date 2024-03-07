import React from 'react';
import { FaRegFilePdf } from "react-icons/fa";

interface ResourceCategoryItemProps {
    title: string;
    count: number;
    icon?: React.ReactElement; // Optional icon prop
}

const ResourceCategoryItem: React.FC<ResourceCategoryItemProps> = ({
                                                                       title,
                                                                       count,
                                                                       icon,
                                                                   }) => {
    return (
        <div className="flex space-x-2">
            <div className="flex justify-start items-start">
                <div className="bg-[#FFD076] bg-opacity-35 h-8 p-4 flex justify-center items-center rounded-xl">
                    {icon || <FaRegFilePdf />}
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <h5 className="text-xl"> uploaded {title}</h5>
                <h4 className="font-semibold  text-end text-2xl">{count}</h4>
            </div>
        </div>
    );
};

export default ResourceCategoryItem;
