import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Bullet from '@mui/icons-material/Lens';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Services(props) {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}  id="services">
        <Typography variant="display3" gutterBottom align='center' style={{marginTop: '64px' }}>
          What we can do for you
        </Typography>
        <Typography variant="display2" gutterBottom align='left'>
          OUR APPS
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
        We develop applications for web and native devices with an overarching goal of creating a positive experience for the people using them or contributing to a positive social impact on the world…or, preferably both! We are currently working on concepts that inspire an active lifestyle, help you adopt a healthy diet and make it easier for people with reduced hearing to stay social.        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="display2" gutterBottom align='left'>
          WE HELP BUSINESSES AND STARTUPS SHAPE AND BUILD OUT THEIR IDEAS
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          We work with businesses developing their ideas and shaping their ideas into rich concepts. With years of experience with product development we can help you with designing and developing prototypes, as well as advising on system design and architecture. We adopt lean product development principles and focus on product quality at all stages of a product life-cycle. A competitive product in this day of age needs to tell a story and have a strong, well thought through design with the user experience at the centre of the focus. The company brand or the business’ product profile should shape the product and needs to be a part of the process from day one.
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          Our approach is to take small testable steps to help make informed decisions throughout the process. During our work we consider all the different aspects of software development and take on different perspectives to ensure the best possible solution for end users and your business objectives.
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          We have a lot of experience in shaping products and developing software solutions from an idea to a production ready product. We offer consulting every step of the way and can advise on designs, technology choices and feasibility, or we can help you get started with a product development plan.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="display2" gutterBottom align='left'>
          WE OFFER BUSINESSES STRATEGIC AND OPERATIONAL ADVICE
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          We offer a combination of business understanding and a deep technical understanding to provide a technical perspective in business strategy decisions. We also offer advice on all aspects of managing an engineering team. 
        </Typography>
        <Typography variant="subheading" gutterBottom align="left">
          For business strategy we can provide advice on:
        </Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Feasibility of a technical solution.</Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Forming a technical roadmap.</Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Strategies in building a development team.</Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Evaluate third party companies that is considered for product development.</Typography>
        <Typography variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Evaluate off the shelf technology or software as a service platforms.</Typography>
        <Typography variant="subheading" gutterBottom align="left">
          We can help engineering teams by advising on:
        </Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Professionalising or streamlining development processes and workflows.</Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Growing the engineering team.</Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Recruitment – Setup a hiring plan, participate in interviews and evaluate the candidates.</Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Designing the team's Agile approach.</Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />System architecture and solution design.</Typography>
        <Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Importance of code quality and best practices.</Typography>
        <Typography style={{marginBottom: '40px' }}variant="body1" gutterBottom align="left"><Bullet style={{ height: '10px' }} />Clean code.</Typography>
      </Grid>
    </Grid>
  );
}

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
