'use client'
import { Button } from "@/components/ui/button";
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

        <Link href={href} className={`${pathname === href ? "" : ""} flex `}>
            <span className="flex justify-start items-center gap-3 p-2 rounded-md text-black hover:bg-blue-50 cursor-pointer m-auto hover:text-[#0000FF] w-40">{icon}{name}</span>
        </Link>

    );
};
