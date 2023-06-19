import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import BannerSlider from './BannerSlider';
import Container from '@mui/material/Container';
import FeatureCatagorie from './FeatureCatagorie';
import BestRivewfood from './BestRivewfood';
import PopularResturant from './PopularResturant';
import Resturant from './Resturant';

const Homes = () => {
    const Ver = React.version;
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <BannerSlider />
                <FeatureCatagorie />
                <BestRivewfood />
                <PopularResturant />
                <Resturant />
            </Container>
        </>
    );
};

export default Homes;