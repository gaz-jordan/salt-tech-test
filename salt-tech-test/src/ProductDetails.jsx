import { Grid2, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    // const { product_description, product_photo, product_price, product_title } = product?.data?;
    const location = useLocation();
    const asin = location.state?.asin;

    useEffect(() => {
        if (!asin) return; // Prevent API call if asin is missing

        const fetchProduct = async () => {
            setLoading(true);
            const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}&country=US`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '9a3d4d1d04msh393e451a694bca2p1bf124jsna315df03324d',
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
        <CircularProgress sx={{ margin: "auto" }} />
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
