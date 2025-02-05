import React, { useState } from 'react'
import Search from './Search';
import SearchResults from './SearchResults';
import { CircularProgress, Stack } from '@mui/material';

const SearchPage = () => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState();

    const fetchResults = async (searchTerm) => {
        setLoading(true);
        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchTerm}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '25ef151c84mshd0865b1d8b921f2p1f12e4jsn82c782cbf1f6',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            setSearchResults(result);
        } catch (error) {
            console.error('fetch error', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Search fetchResults={fetchResults} />
            {searchResults &&
                <SearchResults searchResults={searchResults} />
            }
            {loading &&
                <Stack alignItems="center" sx={{ mt: '30%' }}>
                    <CircularProgress />
                </Stack>
            }
        </>
    )
}

export default SearchPage