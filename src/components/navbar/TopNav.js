import React, { useState } from 'react';
import {
    alpha,
    Avatar,
    Divider,
    Grid,
    IconButton,
    InputBase,
    Link,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Stack,
    Typography,
    Box,
    Container,
    Button
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import ReactCountryFlag from 'react-country-flag'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light'
                ? 'rgb(55, 65, 81)'
                : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}))

const TopNav = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    return (
        <>
            <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        borderBottom: '1px solid #D7D7D7',
                    }}
                >
                    <Container
                        maxWidth="lg"
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        {/* <ButtonGroup
                          size="small"
                          // variant="text"
                          aria-label="top button group"
                      >
                      </ButtonGroup> */}
                        <Stack direction="row" spacing={2}>
                            <Button
                                size="small"
                                variant="text"
                                startIcon={<LocalPhoneIcon />}
                                sx={{ color: '#515755' }}
                            >
                                +565889023795
                            </Button>
                            <Button
                                // id="demo-customized-button"
                                variant="text"
                                size="small"
                                aria-controls={
                                    open ? 'demo-customized-menu' : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                disableElevation
                                onClick={handleClick}
                                startIcon={
                                    <ReactCountryFlag countryCode="US" svg />
                                }
                                endIcon={<KeyboardArrowDownIcon />}
                                sx={{ color: '#515755' }}
                            >
                                English
                            </Button>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} disableRipple>
                                    <ListItemIcon>
                                        <ReactCountryFlag
                                            countryCode="US"
                                            svg
                                        />
                                    </ListItemIcon>
                                    English
                                </MenuItem>
                            </StyledMenu>
                        </Stack>
                    </Container>
                </Box>
        </>
    );
};

export default TopNav;