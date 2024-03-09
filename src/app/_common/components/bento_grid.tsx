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

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Software engineering and database",
        description: "Software engineering involves systematic approaches to software development, " +
            "while databases are structured repositories for efficient data storage and retrieval.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "General computer science",
        description: "General computer science covers fundamental principles and concepts in computing, such as algorithms, " +
            "data structures, programming languages, and system architecture.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Intelligence artificial",
        description: "Artificial intelligence involves creating computer systems that mimic human intelligence, enabling tasks like learning and problem-solving.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Network and system administrator",
        description:
            "Network and system administrators manage and maintain computer networks and systems, ensuring their smooth operation and security.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cybersecurity",
        description: "Cybersecurity focuses on protecting computer systems, networks, and data from cyber threats and attacks.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Governance and data engineering",
        description: "Governance of data involves establishing policies and practices for managing data effectively, while data engineering focuses on designing and building systems for collecting, storing, and analyzing data.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Connected objects",
        description: "Connected objects, also known as IoT devices, are physical devices embedded with sensors, software, and other technologies to connect and exchange data with other devices or systems."
        ,
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}
