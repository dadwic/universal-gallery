import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  section: {
    background: 'transparent',
    backgroundImage: 'linear-gradient(180deg, #fff 400px, rgb(17, 82, 147) 0%)',
  },
  content: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '1140px',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 2),
    },
  },
  title: {
    fontWeight: 'bold',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className="aos-init aos-animate" data-aos="fade-up">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                align="left"
                className={classes.title}
                gutterBottom
              >
                Contact
              </Typography>
              <Typography variant="h6" align="left">
                Write something.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="textSecondary" align="center">
                Full Stack Web Developer
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}
