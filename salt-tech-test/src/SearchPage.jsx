import React, { useState } from 'react'
import Search from './Search';
import SearchResults from './SearchResults';
import { CircularProgress, Stack } from '@mui/material';
import Pagination from './Pagination';

const SearchPage = () => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const fetchResults = async () => {
        setLoading(true);
        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchTerm}&page=${page}&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8c328d52a1msh24c1ffbd7b9367ap1a8fefjsnb9669b8b112b',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setSearchResults(result);
        } catch (error) {
            console.error('fetch error', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Search fetchResults={fetchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {searchResults &&
                <>
                    <SearchResults searchResults={searchResults}/>
                    <Pagination fetchResults={fetchResults} page={page} setPage={setPage} />
                </>
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