import * as React from 'react';
import { useState }  from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';

import SearchAppBar from '../appbar/appbar.js'
import ContentWindow from '../contentWindow/contentWindow.js';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const initialArray = [0,0,0,0,0,0,0,0];
const tile = { md: 'repeat(4, 1fr)' };
const list = { md: 'repeat(1, 0.25fr)' };

export default function App() {
  const [value, setValue] = useState(list);
  const [content, setContent] = useState("");

  const date = new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour:'numeric',
    minute:'numeric',
  });;

  const handleChange = (value) =>  value === true ? setValue(tile) : setValue(list);
  
  const handleInput = (e) => {
    setContent(e.target.value);
    localStorage.setItem('cellValue', e.target.value)
  };
  
  return (
    <>
    <SearchAppBar onChange={handleChange}/>

    <Grid >
      {[darkTheme].map((theme, index) => (
        <Grid item xs={8} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: '#212326',
                display: 'grid',
                gridTemplateColumns:  value  ,
                gap: 2,
              }}
            >
              {initialArray.map((initialArray, index) => (
                    <IconButton key={index} >
                    <Box style = {{ display: 'flex', flexDirection: 'column', fontSize: 'small'}}>
                    <TextField
                      variant="standard"
                      InputProps={{ disableUnderline: true }}
                      id="standart-multiline-flexible"
                      key={index} 
                      elevation={0}
                      sx={{
                        '&:active': {
                          border: '2px solid #FBB728',
                        },
                        ':hover': {
                          background: '#464646',
                        },
                        border: '1px solid #444242',
                        borderRadius: '5px',
                        minHeight: '300px',
                        minWidth: '300px',
                      }}
                      multiline
                      maxRows={12}
                      onChange={handleInput}
                    />
                      <Paper >
                          <h4 >{date}</h4> 
                      </Paper>

                    </Box>
                    </IconButton>
              ))}
            <ContentWindow key={uuidv4()} content={content}/> 
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    </>
  );
}
