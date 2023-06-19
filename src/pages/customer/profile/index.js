import React from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import CustomerLayout from '../CustomerLayout';
//import CustomerLayout from './CustomerLayout';
import Profile from './Profile';


const Customer = () => {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <CustomerLayout component={<Profile/>} />
            </Container>
        </div>
    );
};

export default Customer;