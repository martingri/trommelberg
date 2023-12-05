import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function ContactUs(props) {
  return (
    <Grid container spacing={24} id="contact-us">
      <Grid item xs={2}/>
      <Grid item xs={8}>
        <Typography variant="display3" gutterBottom align='center' style={{marginTop: '64px'}}>
          Get in touch
        </Typography>
        <Typography style={{textAlign: 'center'}} variant="body1" gutterBottom align="left">
          We love working with like minded people so if you think we're a good match for you and your venture hit us up by phone or email.
        </Typography>
        <Typography style={{textAlign: 'center'}} variant="title" gutterBottom align='left'>
          EMAIL
        </Typography>
        <Typography style={{textAlign: 'center'}} variant="body1" gutterBottom align="left">
          martin.grimeland(att)gmail.com
        </Typography>
        <Typography style={{textAlign: 'center'}} variant="title" gutterBottom align='left'>
          TELEPHONE
        </Typography>
        <Typography style={{textAlign: 'center'}} variant="body1" gutterBottom align="left">
          +61 (0) 47 52 55 779
        </Typography>
        <div style={{height:'10vh'}}/>
      </Grid>
     </Grid>
  );
}

ContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactUs);
