import {Pencil} from "lucide-react";

export function SkillsEdit({onClick}: {onClick: () => void}) {
    return(
        <button
            onClick={onClick}
            className="flex items-center gap-2 text-blue-700"
        >
            <span className="text-black">Skills</span>
            <Pencil />
        </button>
    )
}
