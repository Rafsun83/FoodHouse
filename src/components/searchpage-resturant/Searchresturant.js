import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import SearchpageResturant from './SearchpageResturant';

const Searchresturant = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <SearchpageResturant />
            </Container>
        </>
    );
};

export default Searchresturant;