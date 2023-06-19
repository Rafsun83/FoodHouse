import React from 'react'
import { Badge, BottomNavigation, BottomNavigationAction, Paper, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const BottomNav = () => {
    const [value, setValue] = React.useState(0);

    const orangeColor = '#EF7822';

    const MuiBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
        // color: '#ccc',
        '&.Mui-selected': {
          color: orangeColor,
        },
    }));

    return (
        <>
            <Paper className='bottom-navigation-wrap' sx={{ display: { xs: 'block', md: 'none'}, py: 1, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                <MuiBottomNavigationAction
                    label="Home"
                    icon={
                        <HomeIcon />
                    }
                />
                <MuiBottomNavigationAction
                    label="Wishlist"
                    icon={
                        <Badge badgeContent={4} color="error">
                            <FavoriteBorderOutlinedIcon />
                        </Badge>
                    }
                />
                <MuiBottomNavigationAction
                    label="Cart"
                    icon={
                        <Badge badgeContent={4} color="error">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    }
                />
                <MuiBottomNavigationAction
                    label="Notification"
                    icon={
                        <Badge badgeContent={0} color="error">
                            <NotificationsIcon />
                        </Badge>
                    }
                />
                </BottomNavigation>
            </Paper>
        </>
    )
}

export default BottomNav;