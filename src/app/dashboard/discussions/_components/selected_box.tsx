
import React from "react";
import {SelectableItem} from "./selection_input";
import { Button } from "@/components/ui/button";

type SelectedBoxProps<T> = {
    selectedItem: T;
    onClick: () => void;
};

function SelectedBox<T extends SelectableItem>({ selectedItem, onClick }: SelectedBoxProps<T>) {
    return (
        <div className="flex justify-between items-center gap-2 bg-white py-1 px-2 text-gray-700 font-medium">
            <span>{selectedItem.designation}</span>
            <Button onClick={onClick} > </Button>
        </div>
    );
}

export default SelectedBox;