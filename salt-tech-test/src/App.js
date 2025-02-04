import { useState } from 'react';
import './App.css';
import Search from './Search';
import SearchResults from './SearchResults';
import { CircularProgress } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState({});
  const fetchResults = async (searchTerm) => {
    setLoading(true);
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchTerm}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '9a3d4d1d04msh393e451a694bca2p1bf124jsna315df03324d',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setSearchResults(result);
      setLoading(false);
    } catch (error) {
      console.error('fetch error', error);
    }
  }
  return (
    <div className="App">
      <Search fetchResults={fetchResults} />
      {searchResults &&
        <SearchResults searchResults={searchResults} />
      }
      {loading && <CircularProgress />}
    </div>
  );
}

export default App;
