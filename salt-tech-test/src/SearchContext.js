import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const fetchResults = async () => {
        setLoading(true);
        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchTerm}&page=${page}&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
        const options = {
            method: 'GET',
            headers: {
                // API key here
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setSearchResults(result);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SearchContext.Provider value={{
            loading,
            searchResults,
            searchTerm,
            setSearchTerm,
            fetchResults,
            page,
            setPage
        }}>
            {children}
        </SearchContext.Provider>
    );
};
