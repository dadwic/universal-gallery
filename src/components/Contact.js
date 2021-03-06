import React from 'react';
import dynamic from 'next/dynamic';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const Map = dynamic(() => import('./Map'), { ssr: false });

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  info: {
    padding: theme.spacing(12, 8),
  },
  title: {
    fontWeight: 'bold !important',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <section className={classes.root} id="contact">
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.info}>
            <Typography variant="h4" className={classes.title} gutterBottom>
              Contact us
            </Typography>
            <Typography variant="body1">
              Keep track of what's happening with your data, change permissions,
              and run reports against your data anywhere in the world. Keep
              track of what's happening with your data, change permissions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Map />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
