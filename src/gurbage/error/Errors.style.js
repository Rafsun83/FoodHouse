import { Container, Paper, styled, Typography } from '@mui/material'
import { ImageContainer } from '../../styled-components/CustomStyles.style'

export const ContentWrapper = styled(Container)(({ theme, iconicSidebar }) => ({
    display: 'flex',
    flex: '1 1 auto',
    width: '100%',
    paddingTop: '6.25rem',
    paddingBottom: '10vh',
}))

export const CustomPaperForNotFound = styled(Paper)(
    ({ theme, iconicSidebar }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
        padding: '1.875rem',
        width: '100%',
        height: '80vh',
        borderRadius: '0.625rem',
        boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.2), 0px 5px 20px #E5EAF1',
    })
)

export const ImageContainerForNotFound = styled(ImageContainer)(
    ({ theme }) => ({
        maxHeight: '13.438rem',
        maxWidth: '16.875rem',
    })
)

export const CustomTypographyGray = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutral[300],
    fontWeight: 'bold',
    fontSize: '1.75rem',
    letterSpacing: '0.104rem',
}))

export const CustomTypographyForError = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    textTransform: 'uppercase',
}))
