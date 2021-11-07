import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import ResultContext from './ResultContext';

const ResultProvider = (props) => {
    const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('google');

    const getResult = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {

            method: "GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            }

        })

        const data = await response.json()

        if (type.includes('/news')) {
            setResults(data.entries);
        } else if (type.includes('/images')) {
            setResults(data.image_results);
        } else{
            setResults(data.results);
        }

        setIsLoading(false)

    }

    return (
        <ResultContext.Provider value={{ getResult, results, setResults, isLoading, setIsLoading, searchTerm, setSearchTerm }}>
            {props.children}
        </ResultContext.Provider>
    )
}

export default ResultProvider;

export const useResultContext = () => useContext(ResultContext);
