import {
    Alert,
    Badge,
    Box,
    Button,
    Chip,
    Container,
    Divider,
    FormControlLabel,
    Paper,
    Stack,
    styled,
    TextField,
    Typography,
} from '@mui/material'
//import { Link } from 'react-router-dom'

export const FlexContainerCol = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})
export const FlexContainerSpaceBetween = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})
export const FlexContainerCenter = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
})
export const FlexContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
})
export const CustomTextField = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {},
}))
export const CustomPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
}))

export const CustomPaperBigCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '1.875rem',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.2), 0px 5px 20px #E5EAF1',
}))

export const CustomButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {},
}))
export const CustomFullDivider = styled(Divider)(({ theme }) => ({
    width: '100%',
}))
export const LayoutCenter = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingTop: '7.5rem',
}))
export const CustomAlert = styled(Alert)(({ theme }) => ({}))
export const OutletWrapper = styled(Container)(({ theme, iconicSidebar }) => ({
    display: 'flex',
    flex: '1 1 auto',
    width: '100%',
    paddingTop: '6.25rem',
    paddingBottom: '10vh',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: iconicSidebar ? 180 : 310,
    },
}))

export const CustomImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',

    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contained',
    },
}))
export const CustomImageContainerWithBorderRadius = styled(Box)(
    ({ theme }) => ({
        borderRadius: '0.125rem',
        position: 'relative',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contained',
        },
    })
)
export const ImageContainer = styled(Box)(({ theme }) => ({
    borderRadius: '0.125rem',
    position: 'relative',
    '& img': {
        width: '100%',
        height: '30px',
        objectFit: 'contain',
    },
}))
export const CustomColouredTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.light,
}))
export const CustomColouredTypographySubtitle = styled(Typography)(
    ({ theme }) => ({
        marginTop: '0.563rem',
        textTransform: 'none',
        color: theme.palette.neutral[700],
    })
)

export const CenteringSingleComponentOnLayout = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
})

export const CustomStack = styled(Stack)({
    alignItems: 'center',
    width: '100%',
})
export const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    color: theme.palette.neutral[500],
}))

export const CustomBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        fontWeight: 'bold',
    },
}))
export const CustomTypographyBold = styled(Typography)(
    ({ theme, marginTop }) => ({
        fontWeight: 'bold',
    })
)
export const CustomTypographyAlign = styled(Typography)(({ theme, align }) => ({
    textAlign: align,
}))

export const CustomChip = styled(Chip)(({ theme }) => ({
    fontWeight: 'bold',
}))

export const CustomIconButton = styled(Box)(({ theme, marginTop }) => ({
    color: theme.palette.neutral[700],
    cursor: 'pointer',
}))

export const CustomBoxFullWidth = styled(Box)(({ theme }) => ({
    width: '100%',
}))
export const CustomStackFullWidth = styled(Stack)(({ theme }) => ({
    width: '100%',
}))
export const CustomBoxWithSpacing = styled(Box)(
    ({ theme, marginTopBottom }) => ({
        width: '100%',
        marginTop: marginTopBottom && `${marginTopBottom}rem`,
        marginBottom: marginTopBottom && `${marginTopBottom}rem`,
    })
)
// export const CustomLink = styled(Link)(({ theme, width }) => ({
//     textDecoration: 'none',
//     width: width ? '100%' : 'auto',
// }))
