import React from "react";
import clsx from "clsx";
import SelectedTag from "./selected_box";

export type SelectableItem = {
    tagDesign:string,
    tagId:string
};

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
            <div className="w-full flex flex-wrap form-input  py-2  px-2 gap-1 bg-[#E8F4FC] ">
                {selectedItems.length !== 0 &&
                    selectedItems.map((item) => (
                        <SelectedTag key={item.tagDesign} selectedItem={item} onClick={() =>onItemRemove(item)} />
                    ))}
                <div className="relative flex items-center  ">
                    <input
                        id="items"
                        type="search"
                        name="items"
                        className=" p-4  w-full bg-[#E8F4FC]  border-none focus:outline-none focus:border-none "
                        placeholder="find a tags for your post..."
                        value={searchQuery}
                        onChange={onSearchInputChange}
                    />
                    <div
                        className={clsx("absolute -bottom-3 translate-y-full bg-white w-full z-50", {
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
                                            key={item.tagDesign}
                                            className="hover:bg-blue-500 hover:text-white p-2 cursor-pointer dark:text-black dark:hover:text-white"
                                            onClick={() => onItemSelect(item)}
                                        >
                                            {item.tagDesign}
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