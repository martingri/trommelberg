import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import LogoImg from '../assets/img/HP-logo-green-new.svg';

const styles = theme => ({
  logo: {
    height: '1.5em',
    paddingTop: '.4em',
  },
});

function Logo(props) {
  const { classes } = props;

  return (
    <img src={LogoImg} alt="Trommelberg Gård" className={classes.logo}/>
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
