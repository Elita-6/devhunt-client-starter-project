
import React from "react";
import {SelectableItem} from "./selection_input";
import { Button } from "@/components/ui/button";
import {XCircle} from "lucide-react";

type SelectedBoxProps<T> = {
    selectedItem: T;
    onClick: () => void;
};

function SelectedBox<T extends SelectableItem>({ selectedItem, onClick }: SelectedBoxProps<T>) {
    return (
        <div className="flex justify-between items-center gap-2 bg-white py-1 px-2 text-gray-700 font-medium">
            <span>{selectedItem.tagDesign}</span>
            <button onClick={onClick}>
                <XCircle />
            </button>
        </div>
    );
}

export default SelectedBox;