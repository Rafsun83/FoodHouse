import React from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import CustomerLayout from '../CustomerLayout';
import Wallet from './Wallets';
const Wallets = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <CustomerLayout component={<Wallet/>} />
            </Container>
        </>
    );
};

export default Wallets;