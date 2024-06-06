import React from 'react';
import { TextField, Box } from '@mui/material';

// SearchBar component that allows users to search for something. @param {function} onSearch - A callback function to handle search queries.
const SearchBar = ({ onSearch }) => {
    /**
     * Handle input change event to trigger the search functionality.
     * 
     * @param {object} event - The input change event object.
     */
    const handleInputChange = (event) => {
        //Call the onSearch callback function with the search query.
        onSearch(event.target.value);
    };

    return (
        <Box mb={2}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
            />
        </Box>
    );
};

export default SearchBar;