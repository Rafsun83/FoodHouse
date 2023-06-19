import React from 'react'
import { ListItemText, List, ListItem, MenuItem, Divider, Typography,Grid } from '@mui/material'
import { useRouter } from 'next/router'
import Link from './Link'
import ListItemIcon from '@mui/material/ListItemIcon'
import { InboxOutlined } from '@mui/icons-material'
import profile from '../../../public/static/profile/profile.png'
import loyality from '../../../public/static/profile/loyality.png'
import settings from '../../../public/static/profile/settings.png'
import cupons from '../../../public/static/profile/cupons.png'
import address from '../../../public/static/profile/address.png'
import wallate from '../../../public/static/profile/wallate.png'


const MenuBar = () => {
    const router = useRouter()

    const activeRoute = (routeName, currentRoute) => {
        return routeName === currentRoute ? true : false
    }
    const routes = [
        {
            id: 1,
            label: 'Personal Info',
            path: '/customer/profile',
            img: profile,
        },
        {
            id: 2,
            label: 'Coupons',
            path: '/customer/coupon',
            img: cupons,
        },
        {
            id: 3,
            label: 'Wallets',
            path: '/customer/wallets',
            img: wallate,
        },
        {
            id: 4,
            label: 'Loyality Pints',
            path: '/customer/loyality',
            img: loyality,
        },
        {
            id: 5,
            label: 'Your Address',
            path: '/customer/address',
            img: address,
        },
        {
            id: 6,
            label: 'Settings',
            path: '/customer/settings',
            img: settings,
        },
    ]
    return (
    
        <List>
            <Typography sx={{ padding: '0px 0px 30px 0px', color: '#4B566B', fontSize: '26px', fontWeight: '700', textAlign: 'center' }}>Your Profile</Typography>
            {routes.map((item, index) => (
                <Link
                    href={item.path}
                    style={{ textDecoration: 'none', color: 'black' }}
                    key={index}
                >
                    <Grid container md={12} xs={12}>
                     <Grid md={12} xs={12}>
                     <MenuItem
                        selected={activeRoute(item.path, router.pathname)}
                    >
                        <ListItem button key={index}>
                            <ListItemIcon>
                                {' '}
                                <img src={item.img.src } alt="" />{' '}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem>

                    </MenuItem>
                    <Divider />

                     </Grid>

                     </Grid>
                  
                </Link>
            ))}
        </List>
    )
}
export default MenuBar
