import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NoSsr from '@material-ui/core/NoSsr';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Cursor from 'src/components/Cursor';
import Intro from 'src/components/Intro';
import ScrollTop from 'src/components/ScrollTop';
import Drawer from 'src/components/Drawer';
import Gallery from 'src/components/Gallery';
import Trust from 'src/components/Trust';
import Contact from 'src/components/Contact';
import Copyright from 'src/components/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  toolbar: {
    minHeight: 0,
  },
  menuIcon: {
    position: 'fixed',
    top: 40,
    left: 40,
    '& > *': {
      backgroundColor: '#ffffff !important',
    },
  },
}));

export default function Index(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Toolbar id="back-to-top-anchor" className={classes.toolbar} />
      <div className={classes.root}>
        <Intro />
        <NoSsr>
          {/* use NoSSR for window.mediaQuery in Gallery */}
          <Gallery />
          <Cursor />
        </NoSsr>
        <Trust />
        <Contact />
        <Copyright />
        <div className={classes.menuIcon}>
          <Fab onClick={handleDrawerOpen}>
            <MenuIcon fontSize="large" />
          </Fab>
        </div>
        <Drawer open={open} onClose={handleDrawerClose} />
      </div>
      <ScrollTop {...props}>
        <Fab size="small">
          <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
