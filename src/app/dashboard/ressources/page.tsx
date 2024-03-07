import React from 'react';
import ResourceHeader from "@/app/dashboard/ressources/_components/header/ressource_header";
import ResourceCategory from "@/app/dashboard/ressources/_components/header/resource_category";

const Page = () => {
    return (
        <div className="flex flex-col space-y-6 px-8">
            <ResourceHeader/>
            <ResourceCategory/>
        </div>
    );
};

export default Page;