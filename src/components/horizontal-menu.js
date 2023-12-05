import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from "@mui/material/Toolbar";
import Logo from './logo';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

function HorizontalMenu(props) {
  return (
    <Toolbar>
      <Grid container
        alignItems='center'
        direction='row'
        justifyContent='flex-start'>
        <Grid item xs={1}>
          <Logo />
        </Grid>
      </Grid>
      <Grid container
        alignItems='center'
        direction='row'
        justifyContent='flex-end'>
        <Button href="#">
          Home
        </Button>
        <Button href="#about-us">
          About Us
        </Button>
        <Button href="#services">
          Services
        </Button>
        <Button href="#contact-us">
          Contact Us
        </Button>
      </Grid>
    </Toolbar>
  );
}

HorizontalMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalMenu);