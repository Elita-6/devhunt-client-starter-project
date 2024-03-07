import {Pencil} from "lucide-react";
import {Button} from "@/components/ui/button";

export function EditProfile() {
    return(
        <Button  className="bg-blue-700 flex gap-2">
            <Pencil size={22} />
            Edit profile
        </Button>
    )
}
