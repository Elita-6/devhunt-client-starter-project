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

    return (

        <Link href={href} className={`${pathname === href ? "" : ""} flex w-full justify-start  gap-3 p-4 text-black hover:bg-blue-50 cursor-pointer  hover:text-[#0000FF] rounded-lg `}>
            <span className="">
                {icon}
            </span>
            <span>
                {name}
            </span>
        </Link>

    );
};
