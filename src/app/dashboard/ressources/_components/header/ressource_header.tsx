import React from 'react';

const ResourceHeader = () => {
    return (
        <div className="flex w-full justify-between items-center">
            <h2 className="font-semibold text-xl">
                Resources
            </h2>
            <button className="bg-[#0000FF] text-white py-2 px-3 rounded-lg">
                Upload resources
            </button>
        </div>
    );
};

export default ResourceHeader;