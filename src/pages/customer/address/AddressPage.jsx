import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import map from '../../../../public/static/profile/map.png'
import { Box, Button, Container, Divider, Grid, IconButton, Modal, Typography } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:220,
    bgcolor: '#FFFFFF',
    boxShadow: 24,
    p: 4,
    boxShadow:'0px 0px 2px rgba(145, 158, 171, 0.2), 0px 10px 20px -5px rgba(145, 158, 171, 0.1)',
    borderRadius:'10px',
    

  };

const AddressPage = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container sx={{background:'#FFFFFF', border:'1px solid rgba(239, 120, 34, 0.1)', borderRadius:'5px'}}>

                         <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                         <Typography sx={{fontSize:'14px', fontWeight:'700'}} ><LocationOnIcon sx={{fontSize:'14px', color:'#EF7822'}}/> Home</Typography>
                         <Typography>
                             <IconButton>
                             <EditLocationAltIcon sx={{fontSize:'14px', color:'#0094FF'}}/> 
                             </IconButton>
                             <IconButton  onClick={handleOpen}>
                             <DeleteIcon sx={{fontSize:'14px', color:'#EF7822'}}/></IconButton> </Typography>
                         </Box>
                         <Divider/>
                         <Typography sx={{color:'#808080'}}>25 rue Robert Latouche, Nice, 06200, Côte D’azur, France</Typography>
                         <Modal
                            open={open}
                             onClose={handleClose}
                             aria-labelledby="modal-modal-title"
                             aria-describedby="modal-modal-description"
                           >
                          <Container sx={style}>
                              <img style={{position:'absolute', zIndex:'1', top:'-60px', left:'125px'}} src={map.src} alt="" />
                     
                            <Box sx={{textAlign:'center',padding:'10px'}}>
                            <Typography id="modal-modal-description" sx={{ mt: 3,padding:'10px'}}>
                                 Are you sure you want to delete 
                                   this address?
                              </Typography>
                             <Box sx={{display:'flex', justifyContent:'space-around'}}>
                             <Button sx={{background:'#E5E5E5', color:'black', width:'120px'}}>Cancel</Button>
                             <Button sx={{background:'#FF686A', color:'white', width:'120px'}}>Delete</Button>
                             </Box>
                            </Box>
                          </Container>
                       </Modal>                        
                       
        </Container>
    );
};

export default AddressPage;