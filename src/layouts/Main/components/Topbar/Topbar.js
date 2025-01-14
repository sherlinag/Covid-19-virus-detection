import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton ,Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logout from '@material-ui/icons/ExitToApp';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);




  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
          {/* <img
            alt="Logo"
            src="/images/logos/logo--white.svg"
          /> */}

          <h4 style={{ color:"#f78c2f"}}>Covid Detection</h4>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >



<a href="/login" style={{color:'#f78c2f'}}> <Logout />  
</a> 


          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
<a href="/login" style={{color:'white'}}> <Logout />  
</a> 
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
