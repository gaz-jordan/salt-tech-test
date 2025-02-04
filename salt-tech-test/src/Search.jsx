import React, { useState } from 'react'
import { Box, TextField, Button, Stack, Typography } from '@mui/material';

const Search = ({ fetchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Typography variant="h1" gutterBottom>
        Product Search
      </Typography>
      <Stack spacing={2} sx={{ width: 300 }}>
        <TextField
          id="search-products"
          label="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" onClick={() => fetchResults(searchTerm)}>Contained</Button>
      </Stack>

    </Box>
  )
}

export default Search
