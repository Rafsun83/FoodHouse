import React from 'react'
import FooterLg from './FooterLg'
import FooterSm from './FooterSm'

const Footer = () => {
  return (
    <>
        <FooterLg className='footer-wrap lg' sx={{ display: { xs: 'none', md: 'block'} }} />
        <FooterSm className='footer-wrap sm' sx={{ display: { xs: 'block', md: 'none'} }} />
    </>
  )
}

export default Footer