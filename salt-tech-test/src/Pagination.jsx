import { Grid2, Button, Typography } from '@mui/material'
import React from 'react'

const Pagination = ({ fetchResults, setPage, page }) => {
    const handlePreviousPage = () => {
        setPage(prevPage => prevPage - 1);
        fetchResults();
    }

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
        fetchResults();
    }

    return (
        <Grid2 container spacing={2} justifyContent="center" sx={{ my: 2 }}>
            <Grid2 size={12}>
                <Typography variant="body2" align="center" sx={{ fontSize: '20px', my: 2 }}>
                    <strong>Page: {page}</strong>
                </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handlePreviousPage()}
                    disabled={page === 1}
                >
                    Previous
                </Button>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleNextPage()}
                >
                    Next
                </Button>
            </Grid2>
        </Grid2>
    )
}

export default Pagination