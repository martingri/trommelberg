import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Parallax } from 'react-parallax';

const styles = theme => ({
  banner: {
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  bannerText: {
    color: '#fff',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '45px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '40px'
    },
  }
});

function Banner(props) {
  const { classes } = props;
  const bannerImg = require(`../assets/img/${props.bannerImg}`);

  return (
    <div>
      <Parallax
      bgImage={bannerImg}
      strength={200}>
      <div style={{ height: '70vh', paddingTop: '64px' }} >
        <Grid container className={classes.banner}
          alignItems='center'
          direction='column'
          justifyContent='center'>
          <Grid item>
            <Typography className={classes.bannerText} variant="display4" gutterBottom>
              {props.bannerText}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Parallax>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
