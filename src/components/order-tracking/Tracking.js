import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import TrackingPage from './TrackingPage';

const Tracking = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <TrackingPage />
            </Container>
        </>
    );
};

export default Tracking;