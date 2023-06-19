import { Box } from '@mui/material'
import React from 'react'
import HeroCarousal from './HeroCarousal'
import HeroLocationForm from './HeroLocationForm'

const HeroSectionSm = props => {
  return (
    <>
        <Box {...props}>
            <HeroCarousal />
            <HeroLocationForm />
        </Box>
    </>
  )
}

export default HeroSectionSm