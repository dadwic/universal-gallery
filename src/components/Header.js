import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: `calc(100vh - ${theme.spacing(8)})`,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/images/shapes/banner-bg.svg)',
  },
  section: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '1140px',
    padding: theme.spacing(0, 2, 6),
  },
  scrollDown: {
    width: '50px',
    height: '50px',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 'border-radius',
    backgroundColor: 'transparent !important',
    cursor: 'pointer',
  },
  logo: {
    margin: '0 auto',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Header() {
  const classes = useStyles();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#intro'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <div className="jarallax">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Avatar className={classes.logo}>
                <SvgIcon viewBox="0 0 512 512" fontSize="large">
                  <g>
                    <path d="m495.418 146.225-83.042 19.497-4.409-52.266-66.698 60.703 19.321-120.659-57.056 20.039-47.534-73.539-47.534 73.539-57.056-20.039 19.321 120.659-66.698-60.703-4.409 52.266-83.042-19.497 28.696 89.179-45.278 21.577 128.397 99.961-14.238 57.32 126.841-20.633v118.371h30v-118.371l126.841 20.633-14.238-57.32 128.397-99.961-45.278-21.577z" />
                  </g>
                </SvgIcon>
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" align="center">
                David Shahriari
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary" align="center">
                Full Stack Web Developer
              </Typography>
            </Grid>
          </Grid>
        </div>
      </section>
      <IconButton className={classes.scrollDown} onClick={handleClick}>
        <KeyboardArrowDownIcon color="primary" />
      </IconButton>
    </div>
  );
}
