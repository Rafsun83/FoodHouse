import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
//import logo from '../../Assets/logo.png';
import logo from '../../../public/static/header/logo.png'
//import logo from '../../assets/images/logo.png'
import Image from 'next/image'
import logoSm from '../../../public/static/header/logo-sm.png'
import LockIcon from '@mui/icons-material/Lock'
import MenuIcon from '@mui/icons-material/Menu'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import {
    alpha,
    Grid,
    IconButton,
    InputBase,
    Link,
    Menu,
    MenuItem,
    Paper,
    Typography,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import AuthModal from '../auth'
import FavoriteIcon from '@mui/icons-material/Favorite'
import TopNav from './TopNav'
import Notifications from './Notifications'
import NavCatagory from './NavCatagory'
import NavResturant from './NavResturant'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: 'black',

    // border: '1px solid gray',
    backgroundColor: alpha(theme.palette.common.white, 0.5),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '0ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

const pages = ['Products', 'Pricing', 'Blog']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

const Logo = styled('img')(({ theme }) => ({
    height: '30px',
}))

const useStyles = makeStyles({
    multiLineEllipsis: {
        textAlign: 'left',
        fontSize: '.9rem',
        fontWeight: 500,
        fontFamily: "'Signika Negative', sans-serif '",
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 1,
        '-webkit-box-orient': 'vertical',
    },
})

const Navigation = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [locationOpen, setLocationOpen] = useState(false)

    const [authModalOpen, setOpen] = useState(false)
    const handleOpenAuthModal = () => setOpen(true)
    const handleCloseAuthModal = () => setOpen(false)

    const orangeColor = '#EF7822'
    const open = Boolean(anchorEl)
    const classes = useStyles()

    const SignInButton = styled(Button)(({ theme }) => ({
        color: '#fff',
        backgroundColor: '#ef7822',
        '&:hover': {
            backgroundColor: '#ef6c00',
        },
    }))

    // const PaperComponent = (props) => {
    //     return <Paper {...props} />
    // }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget)
    // }

    // const handleClose = () => {
    //     setAnchorEl(null)
    // }

    const handleLocationModal = () => {
        setLocationOpen(!locationOpen)
    }
    console.log(logo)
    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#fff' }}>
                <TopNav />
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ gap: '10px' }}>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'inline' },
                                flexGrow: 1,
                            }}
                        >
                            <Box sx={{ display: 'flex', gap: '1rem' }}>
                                {/* <Logo src={logo.src} /> */}
                                <Typography sx={{color:'red', display:'flex', alignItems:'center'}}  variant="h2" >Rafu's Food</Typography>
                                <Box
                                    sx={{
                                        display: { xs: 'none', md: 'inline' },
                                    }}
                                >
                                    <Grid container item md={12}>
                                        <Grid item md={12}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    overflowX: 'auto',
                                                    whiteSpace: 'nowrap',
                                                    flexWrap: 'nowrap',
                                                    padding: '8px 0px 8px 5px',
                                                    typography: 'body1',
                                                    '& > :not(style) + :not(style)':
                                                    {
                                                        ml: 2,
                                                    },
                                                }}
                                            >
                                                <Link
                                                    sx={{
                                                        color: 'black',
                                                    }}
                                                    href="/home"
                                                    underline="none"
                                                >
                                                    Home
                                                </Link>
                                                <NavCatagory />
                                                <NavResturant/>
                                               
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: { xs: 'inline', md: 'none' },
                                flexGrow: 1,
                            }}
                        >
                            <Logo src={logoSm.src} />
                        </Box>

                        <Box
                            sx={{
                                p: '2px 4px',
                                display: { xs: 'inline', md: 'none' },
                                flexGrow: 1,
                            }}
                        >
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
                                onClick={handleLocationModal}
                                startIcon={
                                    <FmdGoodIcon sx={{ color: orangeColor }} />
                                }
                                endIcon={<KeyboardArrowDownIcon />}
                                sx={{ color: '#515755' }}
                            >
                                <Typography
                                    className={classes.multiLineEllipsis}
                                >
                                    63 laboratory Rd, Dhaka 1205, Bangladesh
                                </Typography>
                            </Button>
                            <Dialog
                                PaperComponent={Paper}
                                open={locationOpen}
                                onClose={handleLocationModal}
                                className="location-dialogue"
                            >
                                {/* <DialogTitle>Subscribe</DialogTitle> */}
                                <DialogContent sx={{ p: '10px' }}>
                                    <Paper
                                        component="form"
                                        elevation={0}
                                        variant="outlined"
                                        sx={{
                                            borderColor:
                                                'rgba(239, 120, 34, 0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Search location here..."
                                            inputProps={{
                                                'aria-label':
                                                    'search google maps',
                                            }}
                                        />
                                        <Button
                                            type="submit"
                                            sx={{
                                                minWidth: 'unset',
                                                p: '5px',
                                                color: orangeColor,
                                                backgroundColor:
                                                    'rgba(239, 120, 34, 0.15)',
                                                borderColor: orangeColor,
                                                borderRadius: '0',
                                            }}
                                            aria-label="search"
                                        >
                                            <SearchIcon />
                                        </Button>
                                    </Paper>
                                </DialogContent>
                                <DialogActions>
                                    <IconButton
                                        autoFocus
                                        onClick={handleLocationModal}
                                        color="primary"
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            top: '-45px',
                                            right: 0,
                                            backgroundColor:
                                                'rgba(255, 255, 255, 0.5)',
                                            color: '#fff',
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    {/* <Button onClick={handleClose}>Cancel</Button> */}
                                </DialogActions>
                            </Dialog>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon sx={{ color: 'black' }} />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                {/* <IconButton
                                    onClick={handleNotifyClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={notifyopen ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={notifyopen ? 'true' : undefined}
                                >
                                    <NotificationsIcon
                                        sx={{ color: 'black' }}
                                    />
                                </IconButton>
                                <React.Fragment>
                                    <Menu
                                        anchorEl={notify}
                                        id="account-menu"
                                        open={notifyopen}
                                        onClose={handleNotifyClose}
                                        onClick={handleNotifyClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {

                                                height: '300px',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 10,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >

                                        <MenuItem>
                                            <Typography sx={{ fontSize: '18px', color: '#EF7822' }}> Notification</Typography>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem>
                                            <Typography sx={{ color: '#9B9B9B' }}> 15 April, 2022</Typography>
                                        </MenuItem>
                                        <MenuItem sx={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                                            <img src={Notification.src} alt="" />
                                            <Box>
                                                <Typography>Notification sent </Typography>
                                                <Typography sx={{ fontSize: '12px', whiteSpace: 'no-wrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '200px', }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo fgjkj magna.... </Typography>
                                            </Box>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem sx={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                                            <img src={Notification.src} alt="" />
                                            <Box>
                                                <Typography>Notification sent </Typography>
                                                <Typography sx={{ fontSize: '12px', whiteSpace: 'no-wrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '200px', }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo fgjkj magna.... </Typography>
                                            </Box>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography sx={{ color: '#9B9B9B' }}> 15 April, 2022</Typography>
                                        </MenuItem>
                                        <MenuItem sx={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                                            <img src={Notification.src} alt="" />
                                            <Box>
                                                <Typography>Notification sent </Typography>
                                                <Typography sx={{ fontSize: '12px', whiteSpace: 'no-wrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '200px', }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo fgjkj magna.... </Typography>
                                            </Box>
                                        </MenuItem>
                                        <Divider />

                                    </Menu>
                                </React.Fragment> */}
                                <Notifications />
                                <IconButton>
                                    <FavoriteIcon sx={{ color: 'black' }} />
                                </IconButton>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: { xs: 'none', md: 'inline' },
                                flexGrow: 0,
                            }}
                        >
                            <SignInButton
                                onClick={handleOpenAuthModal}
                                variant="contained"
                                startIcon={<LockIcon />}
                            >
                                Sign In
                            </SignInButton>
                            <AuthModal
                                open={authModalOpen}
                                handleClose={handleCloseAuthModal}
                            />
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: orangeColor }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Paper
                                    variant="outlined"
                                    className="navsearch"
                                    sx={{
                                        borderColor: orangeColor,
                                        p: '2px 4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '50%',
                                    }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search products here..."
                                        inputProps={{
                                            'aria-label': 'search google maps',
                                        }}
                                    />
                                    <IconButton
                                        type="submit"
                                        sx={{ p: '10px', color: orangeColor }}
                                        aria-label="search"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                                {pages.map((page) => (
                                    <MenuItem
                                        // sx={{ background: 'red' }}
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navigation
