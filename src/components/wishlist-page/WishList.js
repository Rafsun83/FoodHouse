import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import WishlistPage from './WishlistPage';

const WishList = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <WishlistPage />
            </Container>
        </>
    );
};

export default WishList;