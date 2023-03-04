import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function ContentWindow({content}) {
    console.log(content)
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
            background: '#212326',
            position: 'fixed',
            top: '120px',
            left: '375px',
        },
      }}
    >
      <Paper >
            {content}
      </Paper>

    </Box>
  );
}