import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";


// #8c57ff
const abcd = () => {
    return (
      <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Semester Registration
            </Typography>


            {/* <div className="nav-links-container">
             <Link className="nav-link" to="/bulk">Bulk</Link>
            </div>

          <div className="nav-links-container">
            <Link className="nav-link" to="/view">View</Link>
          </div> */}
            <Link style={{color:"white"}} className="nav-link" to="/">
              <Button color="inherit">Single Verification</Button>
            </Link>
          
            <Link style={{color:"white"}} className="nav-link" to="/bulk">
            <Button color="inherit">Bulk Verification</Button>
            </Link>

            <Link style={{color:"white"}} className="nav-link" to="/view">
            <Button color="inherit">View Verification</Button>
            </Link>

          </Toolbar>
        </AppBar>
      </Box>
      <Outlet/>
      </Fragment>
    );
  };

  export default abcd;