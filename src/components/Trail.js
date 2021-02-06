import React from 'react';
import { useTrail, a } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    display: 'flex',
    position: 'relative',
    top: theme.spacing(3),
    left: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    position: 'relative',
    width: '100%',
    height: '55px',
    lineHeight: '55px',
    color: '#000',
    // textShadow: '1px 1px #333',
    fontSize: '4em',
    fontWeight: 800,
    letterSpacing: '-2px',
    willChange: 'transform, opacity',
    overflow: 'hidden',
  },
}));

export default function Trail({ open, children, ...props }) {
  const classes = useStyles();
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 55 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className={classes.root}>
      <IconButton>
        <MenuIcon fontSize="large" />
      </IconButton>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className={classes.text}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}
