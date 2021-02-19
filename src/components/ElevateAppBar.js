import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  brand: {
    fontWeight: 'bold',
    fontFamily: 'monospace',
    padding: theme.spacing(1),
  },
  list: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolbarLink: {
    color: '#ffffff',
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  divider: {
    height: theme.spacing(3),
    alignSelf: 'center',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="h6" className={classes.brand}>
              david.sh
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <List className={classes.list} dense>
              <ListItem disableGutters>
                <Link
                  noWrap
                  color="inherit"
                  variant="body2"
                  className={classes.toolbarLink}
                >
                  Intro
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  noWrap
                  color="inherit"
                  variant="body2"
                  className={classes.toolbarLink}
                >
                  History
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  noWrap
                  color="inherit"
                  variant="body2"
                  className={classes.toolbarLink}
                >
                  Gallery
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  noWrap
                  color="inherit"
                  variant="body2"
                  className={classes.toolbarLink}
                >
                  Contact
                </Link>
              </ListItem>
            </List>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/davidshahriari"
              >
                <GitHubIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}
