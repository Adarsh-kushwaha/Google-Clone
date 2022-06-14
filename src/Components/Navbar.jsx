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
                <div className="text-xl bg-green-600 text-gray-50 px-4 py-1 rounded-full dark:bg-green-900"> <Link to="/"><h1>SearchX 🔍</h1></Link></div>
                <div className="bg-gray-800 text-gray-500 py-2 px-4 rounded-full hover:shadow-xl dark:bg-gray-200 cursor-pointer"><button className='cursor-pointer' onClick={themeHandler}>{props.darkTheme ? "Light 💡" : "Dark 🌙"}</button></div>
            </div>
            <Search />
        </div>
    )
} 

export default Navbar 
