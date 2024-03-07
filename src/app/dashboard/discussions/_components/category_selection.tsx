import SelectionInput from "./selection_input";
import React, {useCallback, useEffect, useState} from "react";
import {ITag} from "@/app/dashboard/discussions/_services/definition";
import {useFetchAllTag} from "@/app/dashboard/discussions/_hooks/post_hooks";


export default function CategorySelectionInput({onRemoveCategory,onSelectedCategory, category}: {onSelectedCategory: (item: ITag) => void , onRemoveCategory: (item: ITag) => void, category: ITag[]}) {
    const [query, setQuery] = useState<string>("");
    const {data, isLoading, isSuccess} = useFetchAllTag(query)
    useEffect(() => {
        console.log("test")
    }, [isLoading,isSuccess]);
    const handleSelectedCategory = (selectedCategory: ITag) => {
        onSelectedCategory(selectedCategory)
        setQuery("")
    }
    const handleCancelClick = useCallback((categoryToRemove: ITag) => {
        onRemoveCategory(categoryToRemove)
    },[])

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setQuery(e.target.value)
    }

    return (
        <SelectionInput
            label="Catgeory"
            helperText="Choose one relevant  category to your post"
            selectedItems={category}
            onItemSelect={handleSelectedCategory}
            onItemRemove={onRemoveCategory}
            onSearchInputChange={handleSearchInput}
            searchQuery={query}
            isLoading={isLoading}
            isSuccess={isSuccess}
            searchResults={data?.data}
        />
    )
}