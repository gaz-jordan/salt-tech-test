import { Card, CardContent, CardMedia, Grid2, Link, Typography, Button, CardActionArea } from '@mui/material';
import React from 'react';

const SearchResults = ({ searchResults = {} }) => {
    const products = searchResults?.data?.products || [];

    return (
        <Grid2 container spacing={2}>
            {products.length > 0 && (
                products.map((product) => (
                    <>
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card sx={{ p: '10px' }}>
                                <CardContent component={Link} sx={{ textDecoration: 'none', color: 'text.primary' }}>
                                    <CardMedia
                                        component="img"
                                        image={product.product_photo}
                                        alt={product.product_title}
                                        sx={{ maxHeight: '200px', width: 'auto', margin: '0 auto' }}
                                    />
                                    <Typography variant="h4" sx={{ fontSize: '14px', mt: '10px' }}>
                                        {product.product_title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: '16px', mt: '6px' }}>
                                        <strong>Price:</strong> {product.product_price}
                                    </Typography>
                                </CardContent>
                                <CardActionArea>
                                    <Button variant="contained" fullWidth={true} component={Link}>
                                        See Details
                                    </Button>
                                </CardActionArea>
                            </Card>
                        </Grid2 >
                    </>
                ))
            )}
        </Grid2 >
    );
};

export default SearchResults;
