import React from 'react';
import { useTrail, a } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: theme.spacing(2),
  },
  text: {
    position: 'relative',
    width: '100%',
    height: '55px',
    lineHeight: '55px',
    color: 'black',
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
