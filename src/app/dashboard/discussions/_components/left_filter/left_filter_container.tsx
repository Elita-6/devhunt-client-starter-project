import React from 'react';
import LeftFilterCard from "@/app/dashboard/discussions/_components/left_filter/left_filter_card";
import LeftFilterTag from "@/app/dashboard/discussions/_components/left_filter/left_filter_tag";

const LeftFilterContainer = () => {
    return (
        <div className="w-[25%] flex flex-col space-y-4">
            <LeftFilterCard/>
            <LeftFilterTag/>
        </div>
    );
};

export default LeftFilterContainer;