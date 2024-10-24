import React from 'react';
import { makeStyles } from '@mui/styles'
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Banner from './components/banner';
import BigLogo from './components/big-logo';


const topBannerImg = 'TrommelbergUtsiktOnna.JPG';

const theme = createTheme();


const useStyles = makeStyles(() => ({

  typography: {
    // Use the system font.
    display4: {
      fontFamily: 'montserrat',
      letterSpacing: '0em',
      marginRight: '1.9em',
      marginLeft: '1.9em',
      fontSize: '4.5em',
      fontWeight: '100',
    },
    display3: {
      fontFamily: 'EB garamond',
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: '2em',
      letterSpacing: '0em',
      lineHeight: '1.2em',
      color: '#00988c'
    },
    display2: {
      fontFamily: 'montserrat',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '18px',
      letterSpacing: '.05em',
      lineHeight: '1.3em',
      textTransform: 'uppercase',
      color: '#001726'
    },
    subheading: {
      fontFamily: 'montserrat',
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '0.05em',
      lineHeight: '1.em',
      textTransform: 'uppercase',
      color: '#001726',
    },
    title: {
      fontFamily: 'montserrat',
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.1em',
      lineHeight: '1.em',
      textTransform: 'uppercase',
      color: '#001726',
    },
    body1: {
      fontFamily: 'montserrat',
      fontWeight: '400',
      wordWrap: 'break-word',
      fontStyle: 'normal',
      fontSize: '.8em',
      letterSpacing: '.015em',
      lineHeight: '1.7em',
      textTransform: 'none',
      color: '#001726',
      paddingBottom: '1em',
    },
    button: {
      fontFamily: 'montserrat',
      fontWeight: '600',
      letterSpacing: '.1em',
      fontSize: '12px',
      textTransform: 'lowercase',
      color: '#001726'
    },
    caption: {
      fontFamily: 'oswald',
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: '12px',
      letterSpacing: '.1em',
      lineHeight: '3em',
      textTransform: 'uppercase',
      color: '#000',
    }
  },
  root: {
    margin: 'auto',
  },
  topNavigation: {
    backgroundColor: 'white'
  }
}))

function Frontpage(props) {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid style={{ backgroundColor: '#f9f6f4' }} container>
            <Grid style={{ padding: '0px' }} item xs={12}>
              <Banner bannerImg={topBannerImg} bannerText={<Grid item xs={1}>
                <BigLogo />
              </Grid>
              } />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Frontpage;
