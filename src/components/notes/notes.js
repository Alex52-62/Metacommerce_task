import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import SearchAppBar from '../appbar/appbar.js'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 250,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const initialArray = [0,0,0,0,0,0,0,0];
const tile = { md: 'repeat(4, 1fr)' };
const list = { md: 'repeat(1, 0.25fr)' };


export default function App() {
  return (
    <>
    <SearchAppBar/>

    <Grid >
      {[darkTheme].map((theme, index) => (
        <Grid item xs={8} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: '#212326',
                display: 'grid',
                gridTemplateColumns:  tile ,
                gap: 2,
              }}
            >
              {initialArray.map((initialArray, index) => (
                <Item 
                  key={index} 
                  elevation={0}
                  sx={{
                    border: '1px solid #444242',
                  }}
                  >
                  {`cardContent=${initialArray}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    </>
  );
}