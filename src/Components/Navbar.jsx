import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';

const Navbar = (props) => {

    const themeHandler = (e) => {

        props.setDarkTheme(!props.darkTheme)
    }

    return (
        <div className="p-5 pb-0 border-b dark:border-gray-800">
            <div className="flex flex-wrap justify-between items-center">
                <div className="text-2xl bg-green-600 text-gray-50 px-2 py-1 rounded dark:bg-green-900"> <Link to="/"><h1>Search-X 🔍</h1></Link></div>
                <div className="bg-gray-800 text-gray-500 p-2 rounded-full hover:shadow-xl dark:bg-gray-200 cursor-pointer"><button onClick={themeHandler}>{props.darkTheme ? "Light💡" : "Dark🌙"}</button></div>
            </div>
            <Search />
        </div>
    )
} 

export default Navbar 
