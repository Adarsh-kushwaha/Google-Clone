import React, { useEffect, useState } from 'react'
import Links from './Links'
import { useDebounce } from 'use-debounce/lib';
import { useResultContext } from '../Context/ResultProvider';


const Search = () => {
    const [text, setText] = useState("Google");
    const { setSearchTerm } = useResultContext();
    const [debounceValue] = useDebounce(text, 900);

    useEffect(() => {
        if (debounceValue) {
            setSearchTerm(debounceValue)
        }
    }, [debounceValue])

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-5 mt-3">
            <input
                type="text"
                value={text}
                className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-am outline-none p-6 text-black hover:shadow-lg"
                placeholder="type here to search anything..."
                onChange={(e) => setText(e.target.value)}
            />
            {!text && (<button type="button" className="absolute top-1.5 right-4 text-2xl text-green-500" onClick={() => setText("")}>X</button>)}
            <Links />
        </div>
    )
}

export default Search