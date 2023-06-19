import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import SearchpageFood from './SearchpageFood';

const Searchpage = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <SearchpageFood />
            </Container>
        </>
    );
};

export default Searchpage;