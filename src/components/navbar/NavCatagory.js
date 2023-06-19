import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { Grid, Link, Menu, MenuItem } from '@mui/material'

import Fade from '@mui/material/Fade'
import menu from '../../../public/static/Menu/image 18.png'
import menu1 from '../../../public/static/Menu/image 19.png'
import menu2 from '../../../public/static/Menu/image 20.png'

const NavCatagory = () => {
    // test mneu drop down start
    const [dropdown, setDropdown] = React.useState(null)
    const [anchorEl, setAnchorEl] = useState(null)
    const opendrop = Boolean(dropdown)
    const handledropClick = (event) => {
        setDropdown(event.currentTarget)
    }
    const handledropClose = () => {
        setDropdown(null)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Link
                id="fade-button"
                aria-controls={opendrop ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={opendrop ? 'true' : undefined}
                onClick={handledropClick}
                sx={{ color: 'black', display: 'flex' }}
                href="#"
                underline="none"
            >
                Catagories <KeyboardArrowDownIcon />
            </Link>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={dropdown}
                open={opendrop}
                onClose={handledropClose}
                TransitionComponent={Fade}
            >
                <Grid container md={12}>
                    <Grid item md={6}>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu.src} loading="lazy" />
                            Chinese food (23)
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu1.src} loading="lazy" />
                            japanese food (12)
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu2.src} loading="lazy" />
                            Cake
                        </MenuItem>
                    </Grid>
                    <Grid item md={6}>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu1.src} loading="lazy" />
                            Coffe (3)
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu.src} loading="lazy" />
                            Noodles
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu2.src} loading="lazy" />
                            Biriyani (8)
                        </MenuItem>
                    </Grid>
                    <Grid item md={6}>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu1.src} loading="lazy" />
                            fast Food
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu.src} loading="lazy" />
                            Kabab
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <img src={menu2.src} loading="lazy" />
                            Thai Food
                        </MenuItem>
                    </Grid>
                </Grid>
            </Menu>
        </>
    )
}

export default NavCatagory
