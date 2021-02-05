import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Intro from 'src/components/Intro';
import ScrollTop from 'src/components/ScrollTop';

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
      </div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
