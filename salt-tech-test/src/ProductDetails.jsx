import { Grid2, Typography, CircularProgress, Stack, List, ListItem, Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const asin = location.state?.asin;

    const decodeHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.documentElement.textContent;
    };

    <Typography variant="body2">
        {decodeHtml(product?.product_details?.resolution || "No resolution available.")}
    </Typography>


    useEffect(() => {
        if (!asin) return; // Return early if asin is missing

        const fetchProduct = async () => {
            setLoading(true);
            const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}&country=US`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '8c328d52a1msh24c1ffbd7b9367ap1a8fefjsnb9669b8b112b',
                    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };
            try {
                const res = await fetch(url, options);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.log("Error fetching product data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [asin]);

    if (!asin) {
        return <Typography variant="h5">No product details available.</Typography>;
    }

    console.log('product: ', product);

    return loading ? (
        <Stack alignItems="center" sx={{ mt: '20%' }}>
            <CircularProgress />
        </Stack>

    ) : (
        <Grid2 container spacing={4} sx={{ p: 2 }}>
            <Grid2 size={12}>
                <Button component={Link} to="/" variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
                    Back to list
                </Button>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
                <img
                    src={product?.data?.product_photo}
                    alt={product?.data?.product_title}
                    style={{ maxHeight: '300px', margin: '0 auto', display: 'block' }} />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
                <Typography variant="h4">{product?.data?.product_title || "Unknown Product"}</Typography>
                <Typography variant="body2" sx={{ mt: '6px' }}>
                    <strong>Price:</strong> ${product?.data?.product_price || "N/A"}
                </Typography>
                <Typography variant="body2" sx={{ mt: '6px' }}>
                    <strong>Description:</strong> {product?.data?.product_description || "No description available."}
                </Typography>
                <List>
                    {product?.data?.product_details &&
                        Object.entries(product.data.product_details).map(([key, value]) => (
                            <ListItem key={key} disableGutters>
                                <Typography variant="body2" sx={{ mt: '6px' }}>
                                    <strong>{key}:</strong> {decodeHtml(value)}
                                </Typography>
                            </ListItem>
                        ))}
                </List>
            </Grid2>
        </Grid2>
    );
};

export default ProductDetails;
