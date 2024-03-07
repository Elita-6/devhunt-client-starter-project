
import React from "react";
import { Button } from "@/components/ui/button";
import {SelectableItem} from "@/app/dashboard/profiles/_components/multi_select_input";
import {GiCancel} from "react-icons/gi";

type SelectedBoxProps<T> = {
    selectedItem: T;
    onClick: () => void;
};

function SelectedBox<T extends SelectableItem>({ selectedItem, onClick }: SelectedBoxProps<T>) {
    return (
        <div className="flex justify-between items-center gap-2 bg-white py-1 px-2 text-gray-700 font-medium">
            <span>{selectedItem.skill_name}</span>
            <button onClick={onClick} > <GiCancel /> </button>
        </div>
    );
}

export default SelectedBox;
