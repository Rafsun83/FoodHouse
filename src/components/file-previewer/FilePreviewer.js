import React, { useEffect, useState } from 'react'
import {
    CustomBoxForFilePreviewer,
    FilePreviewerWrapper,
    IconButtonImagePreviewer,
} from './FilePreviewer.style'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import { CustomBoxImageText } from '../../gurbage/admin/components/forms/FormWithFormik.style'
import { Grid, Stack } from '@mui/material'
import FileInputField from '../../gurbage/admin/components/forms/FileInputField'
import pdfIcon from '../../assets/images/icons/pdf.png'
import docIcon from '../../assets/images/icons/docx.png'
import txtIcon from '../../assets/images/icons/txt-file.png'
import folderIcon from '../../assets/images/icons/folder.png'

const FilePreviewer = (props) => {
    const {
        file,
        anchor,
        deleteImage,
        hintText,
        width,
        onChange,
        onDelete,
        errorStatus,
        acceptedFileInput,
        label,
        titleText,
    } = props
    console.log('neta', label)
    const [multipleImages, setMultipleImages] = useState([])
    useEffect(() => {
        if (file.length > 0) {
            const newImages = []
            file.forEach((image) =>
                newImages.push({
                    url: URL.createObjectURL(image),
                    type: image.name.split('.').pop(),
                })
            )
            setMultipleImages(newImages)
        } else {
        }
    }, [file])
    const renderFilePreview = () => {
        if (file.length > 0) {
            return (
                <Grid container spacing={3}>
                    {multipleImages.map((image, index) => {
                        console.log('zax', image.type)
                        return (
                            <Grid item xs={12} sm={4} md={4} key={index}>
                                <CustomBoxForFilePreviewer>
                                    {previewBasedOnType(image, index)}
                                    <IconButtonImagePreviewer
                                        onClick={() => onDelete(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButtonImagePreviewer>
                                </CustomBoxForFilePreviewer>
                            </Grid>
                        )
                    })}
                    <Grid item xs={12} sm={4} md={4}>
                        <FileInputField
                            titleText={titleText}
                            label={label}
                            hintText={hintText}
                            errorStatus={errorStatus}
                            width
                            onChange={onChange}
                            acceptedFileInput={acceptedFileInput}
                        />
                    </Grid>
                </Grid>
            )
        } else {
            const previewImage = {
                url: URL.createObjectURL(file),
                type: file.name.split('.').pop(),
            }
            return (
                <CustomBoxForFilePreviewer>
                    {previewBasedOnType(previewImage)}
                    <IconButtonImagePreviewer onClick={() => deleteImage()}>
                        <DeleteIcon />
                    </IconButtonImagePreviewer>
                </CustomBoxForFilePreviewer>
            )
        }
    }
    const previewBasedOnType = (file, fileIndex) => {
        if (
            file.type === 'jpg' ||
            file.type === 'jpeg' ||
            file.type === 'gif' ||
            file.type === 'png'
        ) {
            return (
                <FilePreviewerWrapper
                    onClick={() => anchor.current.click()}
                    width={width}
                >
                    <img src={file.url} alt="preview" />
                </FilePreviewerWrapper>
            )
        } else if (file.type === 'pdf') {
            return (
                <FilePreviewerWrapper
                    onClick={() => anchor.current.click()}
                    objectFit
                    width={width}
                >
                    <img src={pdfIcon} alt="pdf" />
                </FilePreviewerWrapper>
            )
        } else if (file.type === 'docx' || file.type === 'docx') {
            return (
                <FilePreviewerWrapper
                    onClick={() => anchor.current.click()}
                    objectFit
                    width={width}
                >
                    <img src={docIcon} alt="docx" />
                </FilePreviewerWrapper>
            )
        } else if (file.type === 'txt') {
            return (
                <FilePreviewerWrapper
                    onClick={() => anchor.current.click()}
                    objectFit
                    width={width}
                >
                    <img src={txtIcon} alt="text" />
                </FilePreviewerWrapper>
            )
        } else {
            return (
                <FilePreviewerWrapper
                    onClick={() => anchor.current.click()}
                    objectFit
                    width={width}
                >
                    <img src={folderIcon} alt="folder" />
                </FilePreviewerWrapper>
            )
        }
    }
    return (
        <Stack width="100%" alignItems="center" spacing={3}>
            {renderFilePreview()}
            {hintText && (
                <CustomBoxImageText>
                    <Typography>{hintText}</Typography>
                </CustomBoxImageText>
            )}
        </Stack>
    )
}
FilePreviewer.propTypes = {}
export default FilePreviewer
