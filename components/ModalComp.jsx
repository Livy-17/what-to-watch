import React from 'react';
import { Box, Typography, Modal } from '@mui/material';

function ModalComp({ modalOpen, handleModalClose, dataFiltered, theKey }) {

  const modalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return ( 
    <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyles}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {dataFiltered[theKey].title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            overview
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Cast: cast
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Where to watch: where to watch
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Published Year: pushbished year
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            IMDB Vote Count: imdb vote count
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            IMDB Rating: rating/100
          </Typography>
        </Box>
      </Modal>
    </div>
   );
}

export default ModalComp;