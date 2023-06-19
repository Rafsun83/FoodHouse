import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import CustomerLayout from '../CustomerLayout'
import Loyality from './Loyality'

const Loyalitys = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <CustomerLayout component={<Loyality />} />
            </Container>
        </>
    )
}

export default Loyalitys
