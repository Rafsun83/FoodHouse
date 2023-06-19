import React, { useState } from 'react'
import { Box, Button, IconButton, InputBase, Modal, Paper, Stack, styled, Typography } from '@mui/material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import MapDirections from './MapDirections';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: '5px',
    width: '845px',
    height: '491px',
    background: '#FFFFFF',
    borderRadius: '5px'





}

const HeroLocationForm = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const orangeColor = '#EF7822';
    const orangeColor2 = '#ff903f';

    const PrimaryButton = styled(Button)(({ theme }) => ({
        color: '#fff',
        backgroundColor: orangeColor,
        '&:hover': {
            backgroundColor: orangeColor2,
        },
    }));

    return (
        <>
            <Paper
                className='hero-form'
                elevation={0}
                component="form"
                sx={{ mt: { xs: '10px', md: '34px' } }}
            >
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    sx={{ width: '100%' }}
                >
                    {/* <Paper sx={{ width: '100%', flexGrow: 1, flex: '1 0'  }}>
                        <InputBase
                            sx={{ ml: 1, flex: '1 0' }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <GpsFixedIcon />
                        </IconButton>
                    </Paper> */}
                    <Paper
                        variant="outlined"
                        sx={{ borderColor: orangeColor, p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Set your location to find food"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px', color: orangeColor }} aria-label="search">
                            <GpsFixedIcon />
                        </IconButton>
                    </Paper>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        sx={{ width: '100%', justifyContent: 'center' }}
                    >
                        <PrimaryButton aria-label="set location" sx={{ flex: '1 0' }}>
                            Set Location
                        </PrimaryButton>
                        <PrimaryButton onClick={handleOpen} aria-label="pickup" sx={{ flex: '1 0' }}>
                            Pick Form Map
                        </PrimaryButton>

                        <Modal

                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className='modalresposive'>
                                <Box
                                    // direction={{ xs: 'column', md: 'row' }}
                                    spacing={2}
                                    className='mapsearch'
                                    sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
                                >
                                    <Paper
                                        variant="outlined"
                                        sx={{ borderColor: orangeColor, p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Search location here..."
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                        />
                                        <IconButton className='locationsearch' type="submit" sx={{ p: '10px', color: orangeColor }} aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                    </Paper>
                                    <PrimaryButton className='currentlocbtn1' sx={{ width: '40%' }} aria-label="pickcurrentlocation" >
                                        <GpsFixedIcon /> Use Current Locations
                                    </PrimaryButton>
                                    <button onClick={handleClose} className='closebtn'><CloseIcon sx={{ fontSize: '16px' }} /></button>
                                </Box>

                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <MapDirections />
                                    <PrimaryButton className='picklocation' aria-label="picklocation" sx={{ flex: '1 0', width: '100%' }}>
                                        Pick Locations
                                    </PrimaryButton>
                                    <PrimaryButton className='currentlocbtn2' sx={{ width: '40%' }} aria-label="pickcurrentlocation" >
                                        <GpsFixedIcon /> Use Current Location
                                    </PrimaryButton>
                                </Typography>
                            </Box>
                        </Modal>
                    </Stack>
                </Stack>
            </Paper>
        </>
    )
}

export default HeroLocationForm