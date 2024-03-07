
import { DashboardIcon, QuestionMarkIcon, LayersIcon, DragHandleHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";

export const Links = [
    {
        href: "/dashboard",
        icon: <DashboardIcon style={{ width: 22, height: 22 }} />,
        name: 'Dashboard'
    },
    {
        href: "/dashboard/discussions",
        icon: <QuestionMarkIcon style={{ width: 22, height: 22 }} />,
        name: 'Discussions'
    },
    {
        href: "/dashboard/ressources",
        icon: <LayersIcon style={{ width: 22, height: 22 }} />,
        name: 'Ressources'
    },
    // {
    //     href: "/dashboard/roadmap",
    //     icon: <DragHandleHorizontalIcon style={{ width: 22, height: 22 }} />,
    //     name: 'Roadmap'
    // },
    {
        href: "/dashboard/profiles",
        icon: <PersonIcon style={{ width: 22, height: 22 }} />,
        name: 'Profiles'
    },
]

