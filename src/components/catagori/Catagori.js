import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import CatagoriListPage from './CatagoriListPage';

const Catagori = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <CatagoriListPage />
            </Container>
        </>
    );
};

export default Catagori;