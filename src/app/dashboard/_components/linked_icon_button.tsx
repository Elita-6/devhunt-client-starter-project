'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkedIconBtnProps = {
    icon: React.ReactNode;
    href: string;
    name?: string;
};

export const LinkedIconButton = (props: LinkedIconBtnProps) => {
    const { icon, href, name } = props;
    const pathname = usePathname();
    const isActive = pathname === href || (pathname.split('/').some((data) => data.toUpperCase() === name?.toUpperCase()) && pathname.split('/')[1] !== name?.toLowerCase() )
    return (

        <Link href={href} className={`${ isActive ? "bg-blue-50  ]" : ""} flex w-full justify-start  gap-5 p-4 text-black hover:text-[#0000FF] hover:bg-blue-50 cursor-pointer dark:text-white dark:hover:text-[#0000FF] rounded-lg `}>
            <span className={` ml-4 ${isActive ? "text-[#0000FF]" : "" }`}>
                {icon}
            </span>
            <span className={`${isActive ? "text-[#0000FF] font-bold" : "" }`} >
                {name}
            </span>
        </Link>

    );
};
