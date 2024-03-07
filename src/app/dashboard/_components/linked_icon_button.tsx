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

<<<<<<< HEAD
        <Link href={href} className={`${pathname === href ? "" : ""} flex w-full justify-start  gap-3 p-3 text-black hover:text-[#0000FF] hover:bg-blue-50 cursor-pointer dark:text-white dark:hover:text-[#0000FF] rounded-lg `}>
            <span>
=======
        <Link href={href} className={`${pathname === href ? "bg-blue-50 text-[#0000FF]" : ""} flex w-full justify-start  gap-3 px-6 py-4  text-black hover:bg-blue-50 cursor-pointer  hover:text-[#0000FF] rounded-lg `}>
            <span className="">
>>>>>>> bb591006f723e89b84bbea1ea6b5447a46281161
                {icon}
            </span>
            <span>
                {name}
            </span>
        </Link>

    );
};
