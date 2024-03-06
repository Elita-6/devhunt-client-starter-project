import React , {useCallback , useState} from "react";
import SelectionInput , {SelectableItem} from "./selection_input";
import {useFetchAllTag} from "@/app/dashboard/discussions/_hooks/post_hooks";
import {ITag} from "@/app/dashboard/discussions/_services/definition";




export default function TagSelectionInput({onSelectedTags, onRemoveTag, tags}: {onSelectedTags: (tag: ITag) => void, onRemoveTag:(tag: ITag) => void,tags: ITag[]}) {
    const [query, setQuery] = useState<string>("");
    const {data, isLoading, isSuccess} = useFetchAllTag(query)

    const handleSelectedTag = (selectedTag: ITag) => {
        onSelectedTags(selectedTag)
        setQuery("")
    }
    const handleCancelClick = useCallback((tagToRemove: ITag) => {
        onRemoveTag(tagToRemove)
    },[])

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setQuery(e.target.value)
    }

    return (
        <React.Fragment>
            <SelectionInput
                label="Tags"
    helperText="Choose tags (up to 5) so readers know what your blog is about "
    selectedItems={tags}
    onItemSelect={handleSelectedTag}
    onItemRemove={handleCancelClick}
    onSearchInputChange={handleSearchInput}
    searchQuery={query}
    isLoading={isLoading}
    isSuccess={isSuccess}
    searchResults={data?.data.result}
    />
    </React.Fragment>
)
}
