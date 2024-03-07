import React, { PropsWithChildren } from 'react';
import { LeftBarNavigation } from "@/app/dashboard/_components/left_bar_navigation";
import DashboardNavBar from "@/app/dashboard/_components/dashboard_nav_bar";
import BolidaLayer from "@/app/dashboard/(bolida)/_components/bolida_layer";
import { getServerSession } from "next-auth/next"
import {redirect} from "next/navigation";
export default async function ExampleLayout({children}: PropsWithChildren) {
    const session = await getServerSession();
    if(!session?.user.email ){
           redirect('/');
    }
    return (
        <div className='flex overflow-x-hidden'>
            <aside className="w-[18rem] h-screen">
                <LeftBarNavigation/>
            </aside>
            <div className=' flex-1 flex-col space-y-3'>
                <DashboardNavBar/>
                <BolidaLayer/>
                {children}
            </div>
        </div>
    );
};

