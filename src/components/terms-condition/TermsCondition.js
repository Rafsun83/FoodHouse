import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import ConditionPage from './ConditionPage';


const TermsCondition = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <ConditionPage />
            </Container>
        </>

    );
};

export default TermsCondition;