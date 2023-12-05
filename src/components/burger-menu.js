import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MenuItem, MenuList } from "@mui/material";
import Grow from '@mui/material/Grow';
import Paper from "@mui/material/Paper";
import { withStyles } from "@mui/styles";
import { Manager, Reference, Popper } from "react-popper";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Logo from './logo';
import Toolbar from "@mui/material/Toolbar";

const styles = theme => ({
  popperClose: {
    pointerEvents: "none"
  }
});

class BurgeMenu extends React.Component {
  constructor(){
    super();
    this.state = {
      open: false
    };  
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick(){
    this.setState({ open: !this.state.open });
  };

  handleMenuItemClick(anchor) {
    this.handleClose();
    this.jumpto(anchor);
  };

  handleClose() {
    if (!this.state.open) {
      return;
    }
    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };

  jumpto(anchor){
    var top = document.getElementById(anchor).offsetTop;
    window.scrollTo(0, top);
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

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
        <Grid
          container
          alignItems="flex-end"
          direction="column"
          justifyContent="flex-start"
        >
          <Grid item>
            <Manager>
              <Reference>
                <IconButton
                  aria-owns={open ? "menu-list" : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  aria-label="Burger Menu"
                  size="large">
                  <Icon>menu</Icon></IconButton>
              </Reference>
              <Popper
                placement="bottom-start"
                eventsEnabled={open}
                className={classNames({ [classes.popperClose]: !open })}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                    <Paper elevation={0}>
                      <MenuList role="menu">
                        <MenuItem onClick={() => this.handleMenuItemClick("root")}>Home</MenuItem>
                        <MenuItem onClick={() => this.handleMenuItemClick("about-us")}>About Us</MenuItem>
                        <MenuItem onClick={() => this.handleMenuItemClick("services")}>Services</MenuItem>
                        <MenuItem onClick={() => this.handleMenuItemClick("contact-us")}>Contact Us</MenuItem>
                      </MenuList>
                    </Paper>
                  </Grow>
                </ClickAwayListener>
              </Popper>
            </Manager>
          </Grid>
        </Grid>
      </Toolbar>
    );
  }
}

BurgeMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BurgeMenu);
