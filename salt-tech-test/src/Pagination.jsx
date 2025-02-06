import { Grid2, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SearchContext } from './SearchContext';

const Pagination = () => {
    const {fetchResults, setPage, page} = useContext(SearchContext);
    const handlePreviousPage = (e) => {
        setPage(prevPage => prevPage - 1);
        fetchResults(e);
    }

    const handleNextPage = (e) => {
        setPage(prevPage => prevPage + 1);
        fetchResults(e);
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
                    onClick={(e) => handlePreviousPage(e)}
                    disabled={page === 1}
                >
                    Previous
                </Button>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={(e) => handleNextPage(e)}
                >
                    Next
                </Button>
            </Grid2>
        </Grid2>
    )
}

export default Pagination