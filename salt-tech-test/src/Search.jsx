import { TextField, IconButton, Typography, FormGroup, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { SearchContext } from './SearchContext';

const Search = () => {
  const { fetchResults, setSearchTerm, searchTerm } = useContext(SearchContext);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => fetchResults(e)}
    >
      <Typography variant="h1" sx={{ fontSize: '42px' }} align="center" gutterBottom>
        Product Search
      </Typography>
      <FormGroup sx={{ my: 4, margin: "0 auto", maxWidth: "500px"}}>
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
                  type="submit"
                  aria-label="search"
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
