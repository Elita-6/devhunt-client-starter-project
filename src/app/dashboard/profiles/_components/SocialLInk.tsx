import React from "react";

interface ILink {
    icon: React.ReactNode,
    name: string,
    url: string

}
export function SocialLInk(data: ILink) {
    return (
        <a href={data.url}  className="flex items-center gap-2">
            {data.icon}
            <span className="hover:text-blue-400">{data.name}</span>
        </a>
    )
}
