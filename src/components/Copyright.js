import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 0),
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
            <IconButton data-aos="zoom-in">
              <FacebookIcon className={classes.icon} />
            </IconButton>
            <IconButton data-aos="zoom-in">
              <TwitterIcon className={classes.icon} />
            </IconButton>
            <IconButton data-aos="zoom-in">
              <LinkedInIcon className={classes.icon} />
            </IconButton>
            <IconButton data-aos="zoom-in">
              <TelegramIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
