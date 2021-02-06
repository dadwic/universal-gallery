import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NoSsr from '@material-ui/core/NoSsr';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Cursor from 'src/components/Cursor';
import Intro from 'src/components/Intro';
import ScrollTop from 'src/components/ScrollTop';
import Drawer from 'src/components/Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

export default function Index(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Intro />
        <Drawer />
      </div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <NoSsr>
        <Cursor />
      </NoSsr>
    </React.Fragment>
  );
}
