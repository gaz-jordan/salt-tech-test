import React, { useContext } from 'react'
import Search from './Search';
import SearchResults from './SearchResults';
import { CircularProgress, Stack } from '@mui/material';
import Pagination from './Pagination';
import { SearchContext } from './SearchContext';

const SearchPage = () => {
    const {searchResults, loading} = useContext(SearchContext);
    return (
        <>
            <Search />
            {searchResults &&
                <>
                    <SearchResults />
                    <Pagination />
                </>
            }
            {loading &&
                <Stack alignItems="center" sx={{ mt: '10%' }}>
                    <CircularProgress />
                </Stack>
            }
        </>
    )
}

export default SearchPage