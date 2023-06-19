import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { Stack } from '@mui/material'
import { ImageContainer } from '../../../styled-components/CustomStyles.style'
import confirmIcon from '../../../assets/images/icons/dialogs/confirm.png'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import DialogActions from '@mui/material/DialogActions'
import {
    CustomButtonCancel,
    CustomButtonSuccess,
} from '../../../styled-components/CustomButtons.style'
import { WrapperForCustomDialogConfirm } from './CustomDialogConfirm.style'

const CustomDialogConfirmStyle = (props) => {
    const { open, onClick, onClose, onSuccess } = props

    const { t } = useTranslation()

    return (
        <div>
            <Button variant="outlined" onClick={onClick}>
                {t('Open Confirm Dialog')}
            </Button>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <WrapperForCustomDialogConfirm>
                    <Stack alignItems="center" justifyContent="center">
                        <ImageContainer>
                            <img src={confirmIcon} alt="closeIcon" />
                        </ImageContainer>
                        <DialogTitle id="alert-dialog-title">
                            <Typography variant="h4">
                                {t('Confirm this request ? ')}
                            </Typography>
                        </DialogTitle>
                    </Stack>
                    <DialogActions>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            spacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <CustomButtonCancel
                                variant="contained"
                                onClick={onClose}
                            >
                                {t('Cancel')}
                            </CustomButtonCancel>
                            <CustomButtonSuccess
                                variant="contained"
                                onClick={onSuccess}
                            >
                                {t('Yes')}
                            </CustomButtonSuccess>
                        </Stack>
                    </DialogActions>
                </WrapperForCustomDialogConfirm>
            </Dialog>
        </div>
    )
}

CustomDialogConfirmStyle.propTypes = {}

export default CustomDialogConfirmStyle
