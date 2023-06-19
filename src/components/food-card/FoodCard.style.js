import { styled } from '@mui/material/styles'
import { Button, Typography, Stack, CardContent, Card, CardActions } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
// import {
//     CustomColouredTypography,
//     ImageContainer,
// } from '../../styled-components/CustomStyles.style'

export const CustomCardContent = styled(CardContent)(
    ({ theme, minHeight, minHeightForCustomCard }) => ({
        // eslint-disable-next-line no-mixed-operators
        borderLeft: "1px solid #FFEBDD",
        borderRight: "1px solid #FFEBDD",
        borderBottom: "1px solid #FFEBDD",
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        textAlign: 'center'

    })
)

export const FoodTitleTypography = styled(CardContent)(() => ({
    // eslint-disable-next-line no-mixed-operators
        fontSize: '18px',
        padding: 0
    })
)

export const FoodSubTitleTypography = styled(CardContent)(() => ({
    // eslint-disable-next-line no-mixed-operators
        fontSize: '16px',
        padding: 0,
        color: 'rgba(0, 0, 0, 0.6)',
        lineHeight: 1.75,
        letterSpacing: '0.00938em'
    })
)

export const CustomFoodCard = styled(Card)(() => ({
    // eslint-disable-next-line no-mixed-operators
        borderRadius: '10px',
        position: 'relative',
        margin: '0 auto',
        marginBottom: '10px',
        overflow: 'hidden'
   })
)
export const RatingWrapTypography = styled(Typography)(() => ({
    // eslint-disable-next-line no-mixed-operators
        fontSize: '16px',
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: 600,
        lineHeight: 'normal',
        color: 'rgba(0, 0, 0, 0.87)',
    })
)
export const RatingStarIcon = styled(StarIcon)(() => ({
    // eslint-disable-next-line no-mixed-operators
        fontSize: '16px'
    })
)

export const PricingCardActions = styled(CardActions)(() => ({
        padding: '8px',
        alignItems: 'flex-end',
        paddingTop: '12px',
        paddingBottom: 0,
    })
)

export const StyledButton = styled(Button)(({ theme }) => ({
        color: '#EF7822',
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '0',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '12px',
        border: '1px solid #EF7822',
        position: 'absolute',
        width: 60,
        height: 60,
        zIndex: 9,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#EF7822',
        },
    })
);
export const OfferTypography = styled(Typography)(({ theme }) => ({
        position: 'absolute',
        background: '#EF7822',
        color: '#fff',
        zIndex: 9,
        padding: '10px 30px 10px 15px',
        borderRadius: '10px 0px 50px',
        fontWeight: 500
    })
);
export const NewTypography = styled(Typography)(({ theme }) => ({
        position: 'absolute',
        background: '#FF4B55',
        color: '#fff',
        zIndex: 9,
        padding: '10px 30px 10px 15px',
        borderRadius: '10px 0px 50px',
        fontWeight: 500
    })
);






// export const CustomInnerPaper = styled(Paper)(({ theme, background }) => ({
//     position: 'absolute',
//     height: '100%',
//     width: '70%',
//     top: 0,
//     left: 0,
//     borderRadius: '10px 600px 10px 10px',
//     opacity: 0.1,
//     background: background
//         ? background
//         : `linear-gradient(0deg,${theme.palette.neutral[100]}  0%, ${theme.palette.primary.main} 100%)`,
// }))
// export const CustomInnerStack = styled(Stack)(({ theme }) => ({
//     position: 'absolute',
//     height: '100%',
//     width: '100%',
//     top: 0,
//     left: 0,
//     background: 'transparent',
//     zIndex: 999,
//     textAlign: 'center',
//     padding: '0.938rem',
// }))
// export const CustomTypographyCard = styled(Typography)(
//     ({ theme, marginBottom, fontSize, color }) => ({
//         fontSize: fontSize ? `${fontSize}rem` : 'inherit',
//         color: color ? theme.palette.primary.main : 'inherit',
//         fontWeight: 'bold',
//         marginBottom: marginBottom && '1.563rem',
//     })
// )

// export const NormalPaper = styled(Paper)(({ theme }) => ({
//     padding: '1.875rem',
//     background: theme.palette.background.paper,
//     border: '1px solid rgba(65, 83, 179, 0.05)',
//     boxSizing: 'border-box',
//     boxShadow:
//         '0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.1)',
//     borderRadius: '10px',
// }))

// export const CustomColouredTypographyForCustomInfoCard = styled(
//     CustomColouredTypography
// )(({ theme }) => ({
//     marginBottom: '1.563rem',
// }))
// export const CustomTypographyForCustomInfoCard = styled(Typography)(
//     ({ theme }) => ({
//         fontSize: '1.125rem',
//         fontWeight: 'bold',
//     })
// )
// export const CustomIconContainerForCustomInfoCard = styled(ImageContainer)(
//     ({ theme }) => ({
//         width: 'auto',
//         height: '1.25rem',
//     })
// )
// export const CustomImageContainerForCustomInfoCard = styled(ImageContainer)(
//     ({ theme }) => ({
//         width: 'auto',
//         height: '9rem',
//     })
// )

// export const CustomButtonForCustomCard = styled(Button)(({ theme }) => ({
//     width: '71%',
// }))
