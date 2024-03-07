import React, { PropsWithChildren } from 'react';
import { LeftBarNavigation } from "@/app/dashboard/_components/left_bar_navigation";
import DashboardNavBar from "@/app/dashboard/_components/dashboard_nav_bar";
import BolidaLayer from "@/app/dashboard/(bolida)/_components/bolida_layer";

export default function ExampleLayout({ children }: PropsWithChildren) {
    return (
        <div className='flex overflow-x-hidden'>
            <aside className="w-[18rem]">
                <LeftBarNavigation />
            </aside>
            <div className=' flex-1 flex-col space-y-3'>
                <DashboardNavBar/>
                <BolidaLayer/>
                {children}
            </div>
        </div>
    );
};

