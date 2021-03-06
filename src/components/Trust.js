import React from 'react';
import dynamic from 'next/dynamic';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0),
    backgroundColor: 'rgb(247, 249, 250)',
    boxShadow: '0 5px 20px 0 rgb(90 202 157 / 5%)',
    borderBottom: '1px solid #ddd',
  },
  title: {
    fontWeight: 'bold !important',
  },
  logo: {
    maxWidth: 120,
  },
}));

export default function Trust() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              align="left"
              className={classes.title}
              gutterBottom
            >
              Trusted by Millions of People
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary">
              We are registered as a distributor with AMFI, as an investment
              advisor with SEBI and platform partners with BSE.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} container>
            <Grid
              item
              container
              xs={4}
              alignItems="center"
              justifyContent="center"
              data-aos="fade-up"
            >
              <img
                className={classes.logo}
                src="/images/logos/airbnb.svg"
                alt="Airbnb"
              />
            </Grid>
            <Grid
              item
              container
              xs={4}
              alignItems="center"
              justifyContent="center"
              data-aos="fade-up"
            >
              <img
                className={classes.logo}
                src="/images/logos/coinbase.svg"
                alt="Coinbase"
              />
            </Grid>
            <Grid
              item
              container
              xs={4}
              alignItems="center"
              justifyContent="center"
              data-aos="fade-up"
            >
              <img
                className={classes.logo}
                src="/images/logos/dribbble.svg"
                alt="Dribbble"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
