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
            number:46,
            color:""
        },
        {
            title:"pdf",
            icon: <FaRegFilePdf />,
            number:32,
            color:""
        },
        {
            title:"useful link",
            icon: <FaLink />,
            number:24,
            color:""
        },
        {
            title:"roadmap",
            icon: <RiRoadMapLine />,
            number:24,
            color:""
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