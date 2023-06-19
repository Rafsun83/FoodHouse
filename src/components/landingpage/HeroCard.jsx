import React from 'react';
import { Button, Card, CardContent, Container, IconButton, InputBase, Paper, Stack, styled, TextField, Typography } from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import HeroLocationForm from './HeroLocationForm';

const HeroCard = (props) => {

    // const {sx, classN} = props;

    return (
        <>
            <Card {...props}>
                <CardContent sx={{ width: '100%' }}>
                    <Typography variant="h2" component="h2" className="hero-section-title">
                        BON APPETIE
                    </Typography>
                    <Typography variant="h6" component="h6" className="hero-section-subtitle">
                        FIND BEST RESTAURANTS NEAR YOU
                    </Typography>
                    <HeroLocationForm />
                </CardContent>
            </Card>
        </>
    )
}

export default HeroCard