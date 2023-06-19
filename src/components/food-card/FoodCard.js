import React from 'react'
import {
    CustomCardContent,
    CustomFoodCard,
    FoodSubTitleTypography,
    FoodTitleTypography,
    RatingWrapTypography,
    RatingStarIcon,
    PricingCardActions,
    StyledButton,
    OfferTypography,
    NewTypography,
} from './FoodCard.style'

import { useTranslation } from 'react-i18next'
import { Typography, CardMedia, CardActionArea } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const FoodCard = (props) => {
    const { image } = props
    const { t } = useTranslation()
    return (
        <>
            <CustomFoodCard sx={{ maxWidth: '250px' }} elevation={0}>
                <OfferTypography>30% OFF</OfferTypography>
                {/* <NewTypography>New</NewTypography> */}
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height={250}
                        image={image}
                    />
                    <CustomCardContent>
                        <FoodTitleTypography
                            gutterBottom
                            variant="h6"
                            component="h6"
                        >
                            Salman Avacado Sushi
                        </FoodTitleTypography>
                        <FoodSubTitleTypography
                            variant="subtitle1"
                            color="text.secondary"
                        >
                            Hugry Puppets
                        </FoodSubTitleTypography>
                        <RatingWrapTypography variant="subtitle2">
                            4.5{' '}
                            <RatingStarIcon
                                fontSize="small"
                                sx={{ ml: '3px', color: '#FE961C' }}
                            />
                        </RatingWrapTypography>
                        <PricingCardActions disableSpacing>
                            <Typography
                                variant="subtitle1"
                                component="span"
                                display="block"
                                sx={{
                                    color: 'red',
                                    textDecoration: 'line-through',
                                    mr: 1,
                                }}
                            >
                                $ 34.00
                            </Typography>
                            <Typography
                                component="h6"
                                display="block"
                                fontWeight={500}
                            >
                                $ 34.00
                            </Typography>
                        </PricingCardActions>
                    </CustomCardContent>
                </CardActionArea>
                <StyledButton aria-label="select">
                    <ArrowForwardIcon fontSize="small" />
                </StyledButton>
            </CustomFoodCard>
        </>
    )
}

FoodCard.propTypes = {}

export default FoodCard
