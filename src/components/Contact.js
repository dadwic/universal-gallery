import React from 'react';
import dynamic from 'next/dynamic';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
const Map = dynamic(() => import('./Map'), { ssr: false });

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: 'rgb(247, 249, 250)',
    boxShadow: '0 5px 20px 0 rgb(90 202 157 / 5%)',
    borderTop: '1px solid #ddd',
  },
  container: {
    height: '100%',
  },
  info: {
    padding: theme.spacing(8, 0),
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      marginRight: theme.spacing(1),
    },
  },
  title: {
    fontWeight: 'bold !important',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <section className={classes.root} id="contact">
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.info}>
            <Typography variant="h4" className={classes.title} gutterBottom>
              Contact us
            </Typography>
            <Typography variant="body1">
              Let’s get in touch:
              <Box className={classes.box}>
                <PhoneIcon />
                <Typography variant="h6">+1 (514)691 8777</Typography>
              </Box>
              <Box className={classes.box}>
                <MailIcon />
                <Typography variant="h6">
                  universal.gallery.inc@gmail.com
                </Typography>
              </Box>
              <Box className={classes.box}>
                <RoomIcon />
                <Typography variant="h6" noWrap>
                  110 Avenue de Forest Gardens, Pointe-Claire, QC H9R 3T1
                </Typography>
              </Box>
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
