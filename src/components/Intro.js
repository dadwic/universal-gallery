import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'transparent',
    backgroundImage:
      'linear-gradient(180deg, rgb(247, 249, 250) 100%, #fff 0%)',
  },
  section: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '1140px',
    padding: theme.spacing(10, 2),
  },
  image: { display: 'block', width: '100%', height: '100%' },
  cardImg: { maxWidth: theme.spacing(8) },
  aos: {
    color: 'transparent',
    display: 'inline-block',
    height: 'auto',
    width: 'auto',
  },
  card: {
    width: '100%',
    height: '100%',
    boxShadow: '0 2px 10px 0 rgba(23, 70, 161, .11)',
    transition:
      'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      transform: 'translate3d(0, -5px, 0)',
      boxShadow:
        '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
    },
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:last-child': {
      padding: '32px 16px',
      [theme.breakpoints.up('md')]: {
        padding: '48px 24px',
      },
    },
  },
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section} id="intro">
        <div className="jarallax">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="overline" color="primary">
                        100+ Projects
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4" color="textPrimary">
                        Mobile App & Web Development
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        align="left"
                      >
                        Our mission is to help you to grow your design skills,
                        meet and connect with professional dsigners who share
                        your passions.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <span
                    className={clsx(
                      classes.aos,
                      'lazy-load-image-background opacity lazy-load-image-loaded'
                    )}
                  >
                    <img
                      width="auto"
                      height="auto"
                      alt="Integrations"
                      src="/images/illustrations/progressive-app.svg"
                      className={classes.image}
                    />
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid
                  item
                  md={6}
                  xs={12}
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="PHP"
                            src="/images/logos/php.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="Laravel"
                            src="/images/logos/laravel.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="Node.js"
                            src="/images/logos/nodejs.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="React"
                            src="/images/logos/react.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="Next.js"
                            src="/images/logos/nextjs.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="Material-UI"
                            src="/images/logos/mui.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="overline" color="primary">
                        20+ Technologies
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4" color="textPrimary">
                        Technology Stacks
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        align="left"
                      >
                        Our mission is to help you to grow your design skills,
                        meet and connect with professional dsigners who share
                        your passions.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}
