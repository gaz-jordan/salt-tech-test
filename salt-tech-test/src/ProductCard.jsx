import React from 'react'
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid2, Typography, Button, CardActionArea } from '@mui/material';

const ProductCard = ({ product }) => {
    const { product_photo, product_price, product_title, asin } = product;
    const navigate = useNavigate();
    
    return (
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ p: '10px' }}>
                <CardActionArea onClick={() => navigate("/product-details", { state: { asin } })}>
                    <CardMedia
                        component="img"
                        image={product_photo}
                        alt={product_title}
                        sx={{ maxHeight: '200px', width: 'auto', margin: '0 auto' }}
                    />
                    <CardContent sx={{ textDecoration: 'none', color: 'text.primary' }}>
                        <Typography variant="h4" sx={{ fontSize: '14px', mt: '10px' }}>
                            {product_title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '16px', mt: '6px' }}>
                            <strong>Price:</strong> {product_price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate("/product-details", { state: { asin } })}
                >
                    See Details
                </Button>
            </Card>
        </Grid2 >
    )
}

export default ProductCard