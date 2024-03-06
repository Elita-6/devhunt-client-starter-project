import React, {PropsWithChildren} from 'react';
import LeftBarNavigation from "@/app/dashboard/_components/left_bar_navigation";

export  default function  ExampleLayout ({ children }: PropsWithChildren) {
    return (
        <div className='flex'>
            <LeftBarNavigation/>
            {children}
        </div>
    );
};

