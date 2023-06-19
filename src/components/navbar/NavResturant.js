import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { Grid, Link, Menu, MenuItem, Button } from '@mui/material'

import Fade from '@mui/material/Fade'
import resturant from '../../../public/static/Menu/Rectangle 8256.png'
import resturant1 from '../../../public/static/Menu/Rectangle 8262 (1).png'
import resturant2 from '../../../public/static/Menu/Rectangle 8262.png'
import ResOffer from '../../../public/static/Menu/resturant.png'

const NavResturant = () => {
    const [resdropdown, setResdropdown] = useState(null)
    const openresdrop = Boolean(resdropdown)
    const handleresdropClick = (event) => {
        setResdropdown(event.currentTarget)
    }
    const handleresdropClose = () => {
        setResdropdown(null)
    }

    return (
        <>
            <Link
                id="fade-button"
                aria-controls={openresdrop ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openresdrop ? 'true' : undefined}
                onClick={handleresdropClick}
                sx={{ color: 'black', display: 'flex' }}
                href="#"
                underline="none"
            >
                Resturants <KeyboardArrowDownIcon />
            </Link>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={resdropdown}
                open={openresdrop}
                onClose={handleresdropClose}
                TransitionComponent={Fade}
            >
                <Grid container md={12} spacing={2}>
                    <Grid item md={4}>
                        <Button size="small">Veg</Button>
                    </Grid>
                    <Grid item md={6}>
                        <Button size="small">Non-Veg</Button>
                    </Grid>
                    <Grid item md={4}>
                        <MenuItem
                            onClick={handleresdropClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={resturant.src} loading="lazy" />
                            Chinese Resturant
                        </MenuItem>
                        <MenuItem
                            onClick={handleresdropClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={resturant.src} loading="lazy" />
                            japanese Resturant
                        </MenuItem>
                        <MenuItem
                            onClick={handleresdropClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={resturant2.src} loading="lazy" />
                            Food chemistry
                        </MenuItem>
                        <MenuItem
                            onClick={handleresdropClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={resturant1.src} loading="lazy" />
                            Road side
                        </MenuItem>
                    </Grid>
                    <Grid item md={4}>
                        <MenuItem
                            onClick={handleresdropClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={resturant.src} loading="lazy" />
                            The Etalia
                        </MenuItem>
                        <MenuItem
                            onClick={handleresdropClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={resturant2.src} loading="lazy" />
                            Road side
                        </MenuItem>
                        <MenuItem
                            onClick={handleresdropClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={resturant.src} loading="lazy" />
                            Pizza Burge
                        </MenuItem>
                        <MenuItem
                            onClick={handleresdropClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={resturant2.src} loading="lazy" />
                            Road side
                        </MenuItem>
                    </Grid>
                    <Grid item md={4}>
                        <Button
                            sx={{
                                zIndex: 1,
                                position: 'absolute',
                                top: '72%',
                                background: '#2C1D13',
                                color: 'white',
                                right: '12%',
                            }}
                            size="medium"
                        >
                            View All
                        </Button>
                        <img src={ResOffer.src} loading="lazy" />
                    </Grid>
                </Grid>
            </Menu>
        </>
    )
}

export default NavResturant
