import React , {useCallback , useState} from "react";

import {useFetchAllTag} from "@/app/dashboard/discussions/_hooks/post_hooks";
import SelectionInput , {SelectableItem} from "@/app/dashboard/profiles/_components/multi_select_input";
import {useFetchAllSkill , useFetchAllTech} from "@/app/dashboard/profiles/_hooks/profile_hook";





export default function SkillSelectionInput({onSelectedTags, onRemoveTag, tags}: {onSelectedTags: (tag: SelectableItem) => void, onRemoveTag:(tag: SelectableItem) => void,tags: SelectableItem[]}) {
    const [query, setQuery] = useState<string>("");
    const {data, isLoading, isSuccess} = useFetchAllTech(query);

    const handleSelectedTag = (selectedTag: SelectableItem) => {
        onSelectedTags(selectedTag)
        setQuery("")
    }
    const handleCancelClick = useCallback((tagToRemove:SelectableItem) => {
        onRemoveTag(tagToRemove)
    },[onRemoveTag])

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setQuery(e.target.value)
    }

    return (
        <React.Fragment>
            <SelectionInput
                label=""
                helperText="Choose tags (up to 5) so readers know what your blog is about "
                selectedItems={tags}
                onItemSelect={handleSelectedTag}
                onItemRemove={handleCancelClick}
                onSearchInputChange={handleSearchInput}
                searchQuery={query}
                isLoading={isLoading}
                isSuccess={isSuccess}
                searchResults={data?.data}
            />
        </React.Fragment>
    )
}
