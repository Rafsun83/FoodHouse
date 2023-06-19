import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import CheckoutPage from './CheckoutPage';



const CheckOut = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <CheckoutPage />
            </Container>
        </>

    );
};

export default CheckOut;