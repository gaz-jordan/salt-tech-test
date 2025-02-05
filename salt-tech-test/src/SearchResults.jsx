import { Grid2 } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCard';

const SearchResults = ({ searchResults = {} }) => {
    const products = searchResults?.data?.products || [];

    return (
        <Grid2 container spacing={2}>
            {products.length > 0 && (
                products.map((product) => (
                    <ProductCard product={product} />
                ))
            )}
        </Grid2 >
    );
};

export default SearchResults;
