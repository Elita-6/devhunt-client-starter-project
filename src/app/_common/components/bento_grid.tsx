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
        description: "Software engineering involves systematic approaches to software development, " +
            "while databases are structured repositories for efficient data storage and retrieval.",
        header:  <Image alt="" src="/CyberSecurity.png" width={250} height={50}/>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "General computer science",
        description: "General computer science covers fundamental principles and concepts in computing, such as algorithms, " +
            "data structures, programming languages, and system architecture.",
        header: <Image alt="" src="/genielogiciel.jpg" width={250} height={80}/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Intelligence artificial",
        description: "Artificial intelligence involves creating computer systems that mimic human intelligence, enabling tasks like learning and problem-solving.",
        header: <Image alt="" src="/ai.jpg" width={250} height={80}/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Network and system administrator",
        description:
            "Network and system administrators manage and maintain computer networks and systems, ensuring their smooth operation and security.",
        header: <Image alt="" src="/SystemAdmin.jpg" width={250} height={80}/>,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cybersecurity",
        description: "Cybersecurity focuses on protecting computer systems, networks, and data from cyber threats and attacks.",
        header: <Image alt="" src="/CyberSecurity.png" width={250} height={80}/>,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Governance and data engineering",
        description: "Governance of data involves establishing policies and practices for managing data effectively, while data engineering focuses on designing and building systems for collecting, storing, and analyzing data.",
        header: <Image alt="" src="/CyberSecurity.png" width={250} height={80}/>,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Connected objects",
        description: "Connected objects, also known as IoT devices, are physical devices embedded with sensors, software, and other technologies to connect and exchange data with other devices or systems."
        ,
        header: <Image alt="" src="/CyberSecurity.png" width={250} height={70}/>,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
export function BentoGridDemo() {
    return (
        <BentoGrid className=" w-full  px-32 space-y-5 h-fit">
        </BentoGrid>
    );
}
