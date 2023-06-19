import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

//ellipsis
export const CustomTypographyEllipsis = styled(Typography)(({ theme }) => ({
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
}))

export const CustomTypographyGray = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutral[500],
}))
