import React , {useCallback , useState} from "react";
import SelectionInput , {SelectableItem} from "@/app/dashboard/profiles/_components/multi_select_input";
import { useFetchAllTech} from "@/app/dashboard/profiles/_hooks/profile_hook";





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
                helperText="Search new skills "
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
