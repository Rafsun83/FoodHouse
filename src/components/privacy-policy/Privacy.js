
import React from 'react';
import Privacypolicy from './privacypolicy';
import { Container, CssBaseline } from '@mui/material';

const Privacy = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <Privacypolicy />
            </Container>
        </>
    );
};

export default Privacy;