import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Trail from './Trail';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'transparent',
    backgroundImage:
      'linear-gradient(180deg, rgb(247, 249, 250) 100%, #fff 0%)',
  },
}));

export default function Intro() {
  const classes = useStyles();
  const [open, set] = useState(true);
  return (
    <div className={classes.root}>
      <Card />
      <Trail open={open} onClick={() => set((state) => !state)}>
        <span>Universal</span>
        <span>Gallery</span>
        <span>Inc.</span>
      </Trail>
    </div>
  );
}
