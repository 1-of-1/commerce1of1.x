import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/oneofone.jpg'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" varient="h6" className={classes.title} color="primary">
              <img src={logo} alt="1of1" height="25px" className={classes.image} />
              1of1
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' &&(
          <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                      <ShoppingCart />
                  </Badge>
              </IconButton>
          </div>)}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
