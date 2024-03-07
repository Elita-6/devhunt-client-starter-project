"use client"

import {usePathname , useRouter , useSearchParams} from "next/navigation";
import BottomTab from "@/app/dashboard/discussions/_components/button_tab";

export default  function ButtonTabList() {
    const {replace} = useRouter()
    const searchParams = useSearchParams();
    const selectedTab = new URLSearchParams(searchParams).get('section')
    const pathname = usePathname()
    const handleCLick = (section: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('section',section);
        replace(`${pathname}?${params.toString()}`)
    };

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <BottomTab isActive={true} label="All"  onClick={() => handleCLick("all")} />
                <BottomTab isActive={false} label="popular" onClick={() => handleCLick("popular")} />
                <BottomTab isActive={false} label="recent" onClick={() => handleCLick("recent")} />
                <BottomTab isActive={false} label="unanswered" onClick={() => handleCLick("unanswered")} />
            </ul>
        </div>

    )
}
