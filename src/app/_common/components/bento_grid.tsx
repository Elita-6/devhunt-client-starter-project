import React from "react";

import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import {BentoGrid} from "@/app/_common/components/bento-grid";
import {BentoGridItem} from "@/app/_common/components/brento_grid_item";
import Image from "next/image";

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Software engineering and database",
        description: "",
        header:  <Image alt="" src="/CyberSecurity.png" width={250} height={50}/>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "General computer science",
        description: "",
        header: <Image alt="" src="/genielogiciel.jpg" width={250} height={80}/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Intelligence artificial",
        description: "",
        header: <Image alt="" src="/ai.jpg" width={250} height={80}/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Network and system administrator",
        description: "",
        header: <Image alt="" src="/SystemAdmin.jpg" width={250} height={80}/>,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cybersecurity",
        description: "",
        header: <Image alt="" src="/CyberSecurity.png" width={250} height={80}/>,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Governance and data engineering",
        description: "",
        header: <Image alt="" src="/CyberSecurity.png" width={250} height={80}/>,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Connected objects",
        description: "",
        header: <Image alt="" src="/CyberSecurity.png" width={250} height={70}/>,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
export function BentoGridDemo() {
    return (
        <BentoGrid className=" w-full px-32 space-y-5">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    // className={i === 3 || i === 6 ? "md:col-span-2 " : ""}
                />
            ))}
        </BentoGrid>
    );
}
