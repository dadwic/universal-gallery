import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: 650,
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, #fff 400px, ${theme.palette.primary.main} 0%)`,
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
  cardContent: {
    '&:last-child': {
      padding: theme.spacing(4, 2),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6, 3),
      },
    },
  },
  title: {
    fontWeight: 'bold',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
              <Card className={classes.root} variant="outlined">
                <CardContent className={classes.cardContent}>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography
                          variant="h4"
                          align="center"
                          className={classes.title}
                          gutterBottom
                        >
                          Contact
                        </Typography>
                        <Typography
                          variant="h6"
                          align="center"
                          color="textSecondary"
                        >
                          Write something.
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          name="fullName"
                          label="Full Name"
                          variant="outlined"
                          autoComplete="cc-name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          name="email"
                          label="E-mail"
                          variant="outlined"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          multiline
                          fullWidth
                          required
                          rows={4}
                          label="Message"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Fields that are marked with * sign are required.
                        </Typography>
                        <Button
                          disabled
                          type="submit"
                          size="large"
                          color="primary"
                          variant="contained"
                        >
                          Send
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}
