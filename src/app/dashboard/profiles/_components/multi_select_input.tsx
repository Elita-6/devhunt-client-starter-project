import React, { useCallback } from "react";
import clsx from "clsx";
import SelectedTag from "./selected_box";
// import {normalize} from "@/app/blog/lib/utils";

export interface SelectableItem{
    tecnologyId: string,
    technologyDesignation: string
}


type TagSelectionInputProps<T> = {
    label: string;
    helperText: string;
    selectedItems: T[];
    onItemSelect: (selectedItem: T) => void;
    onItemRemove: (itemToRemove: T) => void;
    onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
    isLoading: boolean;
    isSuccess: boolean
    searchResults: T[];
};

export default function SelectionInput<T extends SelectableItem>({
                                                                     label,
                                                                     helperText,
                                                                     selectedItems,
                                                                     onItemSelect,
                                                                     onItemRemove,
                                                                     onSearchInputChange,
                                                                     searchQuery,
                                                                     isLoading,
                                                                     isSuccess,
                                                                     searchResults,
                                                                 }: TagSelectionInputProps<T>) {
    return (
        <React.Fragment>
            <label htmlFor="items" className="form-label">
                {label}
            </label>
            <div className="w-full flex flex-wrap form-input bg-[#E8F4FC] py-3 px-2 gap-1">
                {selectedItems.length !== 0 &&
                    selectedItems.map((item) => (
                        <SelectedTag key={item.technologyDesignation} selectedItem={item} onClick={() =>onItemRemove(item)} />
                    ))}
                <div className="relative flex items-center">
                    <input
                        id="items"
                        type="search"
                        name="items"
                        className="bg-[#E8F4FC] p-2  border-none focus:outline-none focus:border-none "
                        placeholder="find a tags for your post..."
                        value={searchQuery}
                        onChange={onSearchInputChange}
                    />
                    <div
                        className={clsx("absolute -bottom-0 translate-y-full bg-white w-full z-50", {
                            hidden: searchQuery === "",
                        })}
                    >
                        {isLoading && <span>Loading ...</span>}
                        <div className="flex flex-col">
                            {
                                isSuccess &&
                                searchResults.length > 0 ? (
                                    searchResults.map((item: T) => (
                                        <div
                                            key={item.technologyDesignation}
                                            className="hover:bg-blue-500 hover:text-white p-2 cursor-pointer dark:text-black dark:hover:text-white"
                                            onClick={() => onItemSelect(item)}
                                        >
                                            {item.technologyDesignation}
                                        </div>
                                    ))
                                ) : (
                                    <div className="form-helper-text">No result </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
