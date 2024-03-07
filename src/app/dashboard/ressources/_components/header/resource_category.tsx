import React from 'react';
import ResourceCategoryItem from "@/app/dashboard/ressources/_components/header/resource_category_item";
import {FaRegFilePdf} from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { RiRoadMapLine } from "react-icons/ri";

const ResourceCategory = () => {
    const item= [
        {
            title:"video",
            icon: <CiVideoOn />,
            number:46
        },
        {
            title:"pdf",
            icon: <FaRegFilePdf />,
            number:32
        },
        {
            title:"useful link",
            icon: <FaLink />,
            number:24
        },
        {
            title:"roadmap",
            icon: <RiRoadMapLine />,
            number:24
        },
    ]
    return (
        <div className="flex items-center w-full justify-between">
            {
                item.map((elem,key)=>(
                    <ResourceCategoryItem key={key} count={elem.number} title={elem.title} icon={elem.icon}/>
                ))
            }
        </div>
    );
};

export default ResourceCategory;