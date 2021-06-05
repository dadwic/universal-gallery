import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4, 0, 2),
  },
  icon: {
    color: theme.palette.common.white,
  },
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1">
              {'Copyright © '}
              {new Date().getFullYear()}{' '}
              <MuiLink color="inherit" href="/">
                UG Inc.
              </MuiLink>{' '}
              All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <IconButton
              data-aos="zoom-in"
              target="_blank"
              href="https://www.instagram.com/universal.gallery.inc/"
            >
              <InstagramIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
