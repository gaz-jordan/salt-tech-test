import { Grid2, Typography, CircularProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const asin = location.state?.asin;

    useEffect(() => {
        if (!asin) return; // Return early if asin is missing

        const fetchProduct = async () => {
            setLoading(true);
            const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}&country=US`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '25ef151c84mshd0865b1d8b921f2p1f12e4jsn82c782cbf1f6',
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
        <Stack alignItems="center" sx={{ mt: '30%' }}>
            <CircularProgress />
        </Stack>

    ) : (
        <Grid2 container spacing={4} sx={{ p: 2 }}>
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
            </Grid2>
        </Grid2>
    );
};

export default ProductDetails;
