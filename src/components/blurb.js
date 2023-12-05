import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  blurb: {
    marginTop: '1em',
  }
});

function Blurb(props) {
  const { classes } = props;

  return (
    <Typography className={classes.blurb} variant="caption" gutterBottom>
        TECHNICAL AND PRODUCT SERVICES
    </Typography>
  );
}

Blurb.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blurb);
