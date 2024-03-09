import React from 'react';

const TableHeader = () => {
    return (
        <thead className='w-full h-[6vh] dark:text-black  rounded-lg text-left text-sm font-normal bg-[#fff] border-b border-[#eee] '>
            <tr className='text-center'>
                <th className='font-normal opacity-75'>
                    Name
                </th>
                <th className='font-normal opacity-75'>
                    Title
                </th>
                <th className='font-normal opacity-75'>
                    Tags
                </th>
                <th className='font-normal opacity-75'>
                    Created by
                </th>
                <th className='font-normal opacity-75'>
                    Created
                </th>
                <th className='font-normal opacity-75'>
                    Action
                </th>
            </tr>
        </thead>
    );
};

export default TableHeader;