import React from 'react';
import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

const Searchbar = () => {
    return (
        <Command className="rounded-lg w-[40vh] border-none shadow-none bg-[#E8F4FC] dark:bg-stone-800">
            <CommandInput placeholder="Type a command or search..." className="bg-[#E8F4FC] dark:bg-stone-800" />
            {/*<CommandList>*/}
            {/*    <CommandEmpty>No results found.</CommandEmpty>*/}
            {/*    <CommandGroup heading="Suggestions">*/}
            {/*        <CommandItem>*/}
            {/*            <CalendarIcon className="mr-2 h-4 w-4" />*/}
            {/*            <span>Calendar</span>*/}
            {/*        </CommandItem>*/}
            {/*        <CommandItem>*/}
            {/*            <FaceIcon className="mr-2 h-4 w-4" />*/}
            {/*            <span>Search Emoji</span>*/}
            {/*        </CommandItem>*/}
            {/*        <CommandItem>*/}
            {/*            <RocketIcon className="mr-2 h-4 w-4" />*/}
            {/*            <span>Launch</span>*/}
            {/*        </CommandItem>*/}
            {/*    </CommandGroup>*/}
            {/*    <CommandSeparator />*/}
            {/*</CommandList>*/}
        </Command>
    );
};

export default Searchbar;
