import React from 'react'
import DashboardNavbar from '../../layouts/dashboard/DashboardNavbar'
import { Stack } from '@mui/material'
import {
    ContentWrapper,
    CustomPaperForNotFound,
    CustomTypographyForError,
    CustomTypographyGray,
    ImageContainerForNotFound,
} from './Errors.style'
import icon from '../../assets/images/icons/404icon.png'
import { useTranslation } from 'react-i18next'
import { CustomButtonGray } from '../../styled-components/CustomButtons.style'
import { CustomLink } from '../../styled-components/CustomStyles.style'

const NotFound = () => {
    const { t } = useTranslation()
    return (
        <>
            <DashboardNavbar notFound={true} />
            <ContentWrapper maxWidth="xxl">
                <CustomPaperForNotFound>
                    <Stack alignItems="center" spacing={1}>
                        <ImageContainerForNotFound>
                            <img src={icon} alt="icon" />
                        </ImageContainerForNotFound>
                        <CustomTypographyGray variant="h1">
                            {t('Page not found')}
                        </CustomTypographyGray>
                        <CustomLink to="/admin/dashboard">
                            <CustomButtonGray>
                                <CustomTypographyForError>
                                    {t('Go Back Home')}
                                </CustomTypographyForError>
                            </CustomButtonGray>
                        </CustomLink>
                    </Stack>
                </CustomPaperForNotFound>
            </ContentWrapper>
        </>
    )
}

export default NotFound
