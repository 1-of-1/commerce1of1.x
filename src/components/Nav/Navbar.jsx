import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/oneofone.jpg'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography varient="h6" className={classes.title} color="primary">
              <img src={logo} alt="1of1" height="25px" className={classes.image} />
              1of1.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.grow} />
              <IconButton aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                      <ShoppingCart />
                  </Badge>
              </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;
