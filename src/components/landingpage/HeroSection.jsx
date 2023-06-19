import React from 'react'
import { Box, Button, Card, CardContent, Container, IconButton, InputBase, Paper, Stack, styled, TextField, Typography } from '@mui/material';
import HeroCard from './HeroCard';
import HeroBanner from '../../../public/static/banners/hero-banner.png';
import HeroCarousal from './HeroCarousal';
import HeroSectionSm from './HeroSectionSm';

const HeroSection = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 3,  }} disableGutters={true}>
            <HeroCard elevation={0} className="hero-section-card" sx={{ display: { xs: 'none', md: 'flex'}, backgroundImage: `url(${HeroBanner.src})`}} />
            <HeroSectionSm sx={{ display: { xs: 'block', md: 'none'} }} />
        </Container>
    )
}

export default HeroSection