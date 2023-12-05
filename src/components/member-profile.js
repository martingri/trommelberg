import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Bullet from '@mui/icons-material/Lens';

const includeQualifications = false;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  profileImage: {
    float: 'left',
    paddingRight: '30px',
    paddingBottom: '10px',
    [theme.breakpoints.down('xl')]: {
      width: '40%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  }
});

function generateEducation(education, id) {
  return (<div key={id}><Typography variant="subheading" gutterBottom align="left" key={`subheading${id}`}>{education.authority}</Typography>
    <Typography variant="body1" gutterBottom align="left" key={id}>{education.degree} - {education.years}</Typography></div>);
}

function generateBullet(point, id) {
  return (<div key={id}><Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left" key={id}><Bullet style={{ height: '10px' }} />{point}</Typography></div>);
}

function generatePitchParagraph(text, id) {
  return (
    <Typography key={id} variant="body1" gutterBottom align="left">
      {text}
    </Typography>);
}

function listQualifications(profile) {
  const education = profile.education;
  const expertise = profile.expertise;
  const experience = profile.experience;
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="display2" gutterBottom align="left">
            EDUCATION
          </Typography>
          {education.map((object, i) => generateEducation(object, i))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="display2" gutterBottom align="left">
            EXPERTISE
    </Typography>
          {expertise.map((text, i) => generateBullet(text, i))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="display2" gutterBottom align="left">
            EXPERIENCE & STRENGTHS
    </Typography>
          {experience.map((text, i) => generateBullet(text, i))}
        </Grid>
      </Grid>
    </Grid>
  );
}

function MemberProfile(props) {
  const { classes } = props;
  const profile = props.profile;
  const pitch = profile.pitch;
  const imagePath = require(`../assets/img/${profile.profileImage}`);
  return (
    <Grid style={{ marginBottom: '20px' }} container>
      <Grid item xs={12}>
        <img src={imagePath} className={classes.profileImage} alt={profile.name}/>
        <Typography variant="display3" gutterBottom align='left'>
          {profile.name}
        </Typography>
        <Typography style={{marginBottom: '.7em'}} variant="subheading" gutterBottom align='left'>
          {profile.title}
        </Typography>
        {pitch.map((text, i) => generatePitchParagraph(text, i))}
      </Grid>
        if({includeQualifications}) {
          listQualifications(profile)
        }
    </Grid>
  );
}

MemberProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemberProfile);
