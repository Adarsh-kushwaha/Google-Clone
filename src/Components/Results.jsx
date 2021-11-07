import React, { useEffect } from 'react'
import { useResultContext } from '../Context/ResultProvider'
import { useLocation } from 'react-router';
import ReactPlayer from 'react-player';
import Loading from './Loading';

const Results = () => {
    const { isLoading, results, getResult, searchTerm } = useResultContext();
    const location = useLocation();
    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === "/videos") {
                getResult(`/search/q=${searchTerm} videos`)
            } else {
                getResult(`${location.pathname}/q=${searchTerm}&num=10`)
            }
        }

    }, [searchTerm, location.pathname])

    if (isLoading) {
        return <Loading />
    }



    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-52 md:px-40">
                    {results.map(({ link, title, description }, index) => (

                        <div key={index} className="md:w-2/5 w-full">

                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm dark:text-gray-500 text-gray-400">
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className="text-lg hover:underline dark:text-green-300 text-green-700">
                                    {title}
                                </p>
                                <p className="text-sm dark:text-gray-300 text-gray-700">
                                    {description}
                                </p>
                            </a>
                        </div>
                    ))}

                </div>
            )
        case "/images":
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({ image, link: { href, title, domain } }) => (

                        <a href={href} className="sm:p-3 p-5" key={Math.random()} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy" />
                            <p className="w-36 break-words text-sm mt-2">
                                {domain}
                            </p>

                        </a>
                    ))}
                </div>
            )

        case "/news":
            return (
                <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-56">
                    {results.map(({ links, id, source, title }) => (
                        <div key={id} className="md:w-2/5 w-full">
                            <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                                <p className="text-lg dark:text-green-300 text-green-700">
                                    {title}
                                </p>
                            </a>
                            <div className="flex gap-4">
                                <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline">
                                    {source?.href}
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            )

        case "/videos":
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results.map((video, index) => (
                        <div key={index} className="p-2">
                            {video.additional_links?.[0].href && <ReactPlayer url={video.additional_links?.[0].href} controls width="350px" height="200px" />}
                        </div>
                    ))}
                </div>
            )
        default:
            return 'ERROR';
    }
}

export default Results
