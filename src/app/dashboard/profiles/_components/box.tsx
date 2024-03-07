import React from "react";

interface IBox {
    icon: React.ReactNode,
    label: string

}
export function Box(data: IBox) {
    return (
        <div className="flex items-center gap-2">
            {data.icon}
            <span>{data.label}</span>
        </div>
    )
}
