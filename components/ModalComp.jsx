import React from 'react';
import { Box, Typography, Modal, Divider, withTheme } from '@mui/material';

function ModalComp({ modalOpen, handleModalClose, dataFiltered, theKey, serviceName }) {

  const modalStyles = {
    position: 'fixed',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    width: 400,
    color: 'white',
    backgroundColor: 'rgba(24, 24, 24, 1)',
    boxShadow: '0 0 5px 5px black',
    p: 5,
    borderRadius: '20px'
  };

  return ( 
    <div id='ModalComp'>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyles}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            《{dataFiltered[theKey].title}》
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dataFiltered[theKey].overview}
          </Typography>
          <Divider color='gray' sx={{ mt: 3 }} />
          <Typography color='rgba(118, 118, 118, 1)' sx={{ mt: 2}}>
            Cast: 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            {dataFiltered[theKey].cast.map(name => name + ', ' ).slice(0, -1).concat(dataFiltered[theKey].cast.slice(-1))}
          </Typography>
          <Typography color='rgba(118, 118, 118, 1)' sx={{ mt: 2 }}>
            Where to watch: 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            {serviceName}
          </Typography>
          <Typography color='rgba(118, 118, 118, 1)' sx={{ mt: 2 }}>
            Published Year:  
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            {dataFiltered[theKey].year}
          </Typography>
          <Typography color='rgba(118, 118, 118, 1)' sx={{ mt: 2 }}>
            IMDB View Count: 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            {dataFiltered[theKey].imdbVoteCount}
          </Typography>
          <Typography color='rgba(118, 118, 118, 1)' sx={{ mt: 2 }}>
            IMDB Rating: 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            {dataFiltered[theKey].imdbRating}/100
          </Typography>
        </Box>
      </Modal>
    </div>
   );
}

export default ModalComp;