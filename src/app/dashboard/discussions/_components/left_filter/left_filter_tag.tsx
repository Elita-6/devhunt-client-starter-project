import React from 'react';
import {ITag} from "@/app/dashboard/discussions/_services/definition";

const tags: ITag[] = [
    {
        tagId: "2",
        tagDesign: "mobile development"
    },
    {
        tagId: "3",
        tagDesign: "data science"
    },
    {
        tagId: "4",
        tagDesign: "frontend development"
    },
    {
        tagId: "5",
        tagDesign: "backend development"
    },
    {
        tagId: "6",
        tagDesign: "full-stack development"
    },
    {
        tagId: "7",
        tagDesign: "artificial intelligence"
    }
];

const LeftFilterTag = () => {
    return (
        <div className="flexx flex-col space-y-3">
            <h3 className="text-xl font-semibold">
                Popular Tags
            </h3>
            <div className="grid grid-cols-2 gap-3 ">
                {
                    tags.map((elem,key)=>(
                        <button key={key}  className="bg-[#CBD5E1] rounded-xl text-sm py-2 px-4">
                            {elem.tagDesign}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftFilterTag;