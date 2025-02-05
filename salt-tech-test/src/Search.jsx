import React, { useState } from 'react'
import { TextField, IconButton, Typography, FormGroup, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ fetchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Typography variant="h1" sx={{ fontSize: '42px' }} align="center" gutterBottom>
        Product Search
      </Typography>
      <FormGroup sx={{ my: 4}}>
        <TextField
          id="search-products"
          label="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton
                  type="button"
                  aria-label="search"
                  onClick={() => fetchResults(searchTerm)}
                >
                  <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
              ),
            },
          }}
        />

      </FormGroup>
    </Box>
  )
}

export default Search
