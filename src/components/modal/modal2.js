import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const style = {
    width: '200vw',
    height: '150vh',
    bgcolor: 'black',
    pt: 12,
    pl: 2,
    color: 'white',
};

export default function ModalFullWindow({handleModalClose, open }) {

    const text = localStorage.getItem('cellValue');

    const [value, setValue] = React.useState(text);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Container maxWidth="xl">
            <TextField  
                type="text" 
                multiline  
                value={value}
                fullWidth={true}  
                onChange={e => {setValue(e.target.value); localStorage.setItem('cellTotalValue', value); }}/>
            </Container>  
        </Box>
      </Modal>
    </div>


  );
}

