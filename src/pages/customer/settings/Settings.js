import { Box, Container, FormControlLabel, FormGroup, Grid, Stack, Typography,Button, MenuItem, ListItemIcon, Menu } from '@mui/material';
import React, { useState } from 'react';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import ReactCountryFlag from 'react-country-flag'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));


  const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
  
  const label = { inputProps: { 'aria-label': 'Switch demo' } };


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

  
const Setting = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    return (
  
            <Grid container md={12} xs={12} spacing={2}>
                 <Grid item md={4} xs={12}>
                     <Container sx={{background:'#FBFBFB', borderRadius:'10px', display:'flex', alignItems:'center', maxWidth:'247px', height:'168px'}}>
                       <Container>
                             <Typography sx={{fontSize:'18px', fontWeight:'700', textAlign:'center'}}>Dark Mode</Typography>
                         <FormGroup>
                            <FormControlLabel
                            sx={{display:'flex', justifyContent:'center'}}
                             control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                             label=""
                               />
                            </FormGroup>
                       </Container>
                     </Container>
                 </Grid>
                 <Grid item md={4} xs={12}>
                 <Container sx={{background:'#FBFBFB', borderRadius:'10px', display:'flex', alignItems:'center', maxWidth:'247px', height:'168px'}}>
                       <Container>
                             <Typography sx={{fontSize:'18px', fontWeight:'700', textAlign:'center'}}>Notification</Typography>
                             <Container sx={{display:'flex', justifyContent:'center'}}>
                             <Switch  {...label} defaultChecked color="warning" />
                             </Container>
                       </Container>
                     </Container>
                 </Grid>
                 <Grid item md={4} xs={12}>
                 <Container sx={{background:'#FBFBFB', borderRadius:'10px', display:'flex', alignItems:'center', maxWidth:'247px', height:'168px'}}>
                       <Container>
                             <Typography sx={{fontSize:'18px', fontWeight:'700', textAlign:'center'}}>Language</Typography>
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
                       </Container>
                     </Container>
                 </Grid>
           </Grid>
        
    );
};

export default Setting;