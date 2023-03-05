import * as React from 'react';
import { useState }  from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ModalFullWindow from '../modal/modal2';

export default function ContentWindow({content}) {
  const [open, setOpen] = useState(false);

  const date = new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour:'numeric',
    minute:'numeric',
  });;

  const show = localStorage.getItem('show');

  const handleOpen = () =>  setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Box    
      id="content"
      sx={{
        visibility: show,
        display: 'flex',
        '& > :not(style)': {
            background: '#212326',
            position: 'fixed',
            top: '120px',
            left: '375px',
        },
      }}
    >

      <ModalFullWindow handleModalClose={handleClose} open={open} content={content}/> 

      <Paper >
          <Button  onClick={handleOpen}/>
          <h4 style = {{ marginLeft : 300, color : 'grey' }}>{date}</h4> 
          {content} 
      </Paper>

    </Box>
  );
}