import React from 'react'

import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    headerStyle: {
        flex: 1,
      },
    barPosition: {
        marginBottom: '20px'
    }
  });
  

const Header = () => {
    const classes = useStyles();

    return (
        <div>
        <AppBar position='static' className={classes.barPosition}>
            <Toolbar>
                <Typography className={classes.headerStyle}>
                    <h3>MufasaToday</h3>
                </Typography>
                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;
