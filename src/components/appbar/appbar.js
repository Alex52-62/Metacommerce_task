import * as React from 'react';
import { useState }  from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import BasicModal from '../modal/modal';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(70),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

export default function SearchAppBar({ onChange }) {
  const [open, setOpen] = useState(false);

  const [showArrow, setShowArrow] = useState(true);

  const [show, setShow] = useState('hidden');

  const toggleShowArrow = () => {
    showArrow ? setShow('visible') : setShow('hidden');
    localStorage.setItem('show', show);
    onChange(showArrow);
    setShowArrow(!showArrow);
  };

  const handleOpen = () =>  setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BasicModal handleModalClose={handleClose} open={open}/>
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static">
        <Toolbar sx = {{zIndex: "1400"}}>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleShowArrow}
          >
              <FormatListBulletedIcon sx={{p:2}}/>
            </IconButton>

            <IconButton onClick={toggleShowArrow}>
              <GridViewIcon type="button" />
            </IconButton>

            <IconButton>
              <ArrowBackIosIcon sx={{ ml: 4 , visibility: show }}/>
            </IconButton>
            
            <IconButton onClick={handleOpen}>
              <DeleteIcon sx={{ ml: 22 }}/>
            </IconButton>

            <OpenInNewIcon sx={{ ml: 4 }}/>
            <FormatAlignCenterIcon sx={{ ml: 20 }}/>




          <Search >
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

        </Toolbar>
      </AppBar>
    </ThemeProvider>

    </Box>
  );
}