import React from 'react';
import { NavLink } from 'react-router-dom';

const AllLinks = [
    {url:"/search", text:"🔎All", id:"sa"},
    {url:"/news", text:"📰News", id:"sc"},
    {url:"/images", text:"📷Images", id:"sb"},
    {url:"/videos", text:"📺Videos", id:"sd"}
]

const Links = () => {
    return (
        <div className="flex  justify-left  mt-4">
            {AllLinks.map(({url, text, id})=>(
                <NavLink key={id} to={url} className="mt-2 mb-0 mx-4" activeClassName="text-green-700 dark:text-green-300 border-b-2 border-green-700 pb-3">
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links
