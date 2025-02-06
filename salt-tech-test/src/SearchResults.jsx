import { Grid2, Typography } from '@mui/material';
import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { SearchContext } from './SearchContext';

const SearchResults = () => {
    const {searchResults, searchTerm} = useContext(SearchContext);

    const products = searchResults?.data?.products || [];

    return (
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
            <Grid2 size={12}>
                <Typography variant='h6'>
                    Showing results for '{searchTerm}'
                </Typography>
            </Grid2>
            {products.length > 0 && (
                products.map((product) => (
                    <ProductCard product={product} />
                ))
            )}
        </Grid2 >
    );
};

export default SearchResults;
