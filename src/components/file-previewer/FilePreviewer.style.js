import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { ImageContainer } from '../../styled-components/CustomStyles.style'
import IconButton from '@mui/material/IconButton'
import React from 'react'

export const FilePreviewerWrapper = styled(ImageContainer)(
    ({ theme, width, objectFit }) => ({
        cursor: 'pointer',
        height: '8.75rem',
        width: width ? '100%' : '8.75rem',
        borderRadius: '12px',
        '& img': {
            borderRadius: '12px',
            objectFit: objectFit ? 'contained' : 'cover',
        },
    })
)

export const IconButtonImagePreviewer = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.customColor.five,
    color: theme.palette.customColor.three,
    position: 'absolute',
    borderRadius: '50%',
    bottom: -13,
    right: -18,
}))
export const CustomBoxForFilePreviewer = styled(Box)(({ theme }) => ({
    position: 'relative',
}))
