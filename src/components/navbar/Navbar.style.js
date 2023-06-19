import { AppBar, styled } from '@mui/material'

export const NavbarRoot = styled(AppBar)(
    ({ theme, notFound, iconicSidebar }) => ({
        paddingTop: '0.1rem',
        paddingBottom: '0.1rem',
        [theme.breakpoints.up('lg')]: {
            left: notFound ? 'none' : iconicSidebar ? '5rem' : '17.5rem',
            width: `calc(100% - ${
                notFound ? 'none' : iconicSidebar ? '5rem' : '17.5rem'
            })`,
        },
        backgroundColor: theme.palette.neutral[100],
        ...(theme.palette.mode === 'light'
            ? {
                  boxShadow: theme.shadows[3],
              }
            : {
                  backgroundColor: theme.palette.background.paper,
                  borderBottomColor: theme.palette.divider,
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '0.063rem',
                  boxShadow: 'none',
              }),
    })
)
