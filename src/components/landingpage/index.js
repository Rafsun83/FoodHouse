import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeroSection from './HeroSection';
import FunFactSection from './FunFactSection';
import BannerSection from './BannerSection';
import Waves from './Waves';
import LinkSection from './LinkSection';
import DownloadSection from './DownloadSection';

const LandingPage = () => {

    const Ver = React.version;

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: {xs: '72px', md: '0'} }}>
                <HeroSection />
                <FunFactSection />
                <BannerSection />
                <LinkSection />
                <DownloadSection />
            </Container>
        </>
    );
}

export default LandingPage;