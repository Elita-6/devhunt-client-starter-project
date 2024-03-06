import React from 'react';
import Image from "next/image";

const Card = () => {
    return (
        <div className='flex  space-x-3 bg-black px-4 py-7  text-white rounded-lg'>
            <Image src='/people.png' alt='people icon' width={24} height={24}/>
            <div className='flex flex-col space-y-2'>
                <h5 className='text-2xl font-semibold '>
                    Explore topics
                </h5>
                <p className='text-wrap pr-3'>
                    Explore our selection of courses in development
                </p>
            </div>
        </div>
    );
};

export default Card;