import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import LogoImg from '../assets/img/Trommelberg.png';

const styles = theme => ({
  logo: {
    height: '1.5em',
    paddingTop: '0.4em',
  },
});

export function NoStyleLogo(props) {
  const { classes } = props;

  return (
    <img src={LogoImg} alt="Trommelberg Gård" className={classes.logo}/>
  );
}

NoStyleLogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoStyleLogo);
