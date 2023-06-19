import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Allresturantpage from './Allresturantpage';

const AllResturant = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <Allresturantpage />
            </Container>
        </>
    );
};

export default AllResturant;