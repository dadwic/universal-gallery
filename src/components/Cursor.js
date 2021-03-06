import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cursor: {
    width: '40px',
    height: '40px',
    border: '2px solid #fefefe',
    borderRadius: '100%',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    transition: 'all 150ms ease',
    transitionProperty: 'background-color, opacity, transform, mix-blend-mode',
    zIndex: 9999,
    mixBlendMode: 'difference',
    boxShadow: theme.shadows[10],
  },
  cursorHidden: {
    opacity: 0,
  },
  cursorClicked: {
    transform: 'translate(-50%, -50%) scale(0.9)',
    backgroundColor: '#fefefe',
  },
  cursorLinkHovered: {
    transform: 'translate(-50%, -50%) scale(1.25)',
    backgroundColor: '#fefefe',
  },
}));

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

export default function Cursor() {
  if (typeof navigator !== 'undefined' && isMobile()) return null;
  const classes = useStyles();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseover', () => setLinkHovered(true));
      el.addEventListener('mouseout', () => setLinkHovered(false));
    });
  };

  const cursorClasses = clsx(classes.cursor, {
    [classes.cursorClicked]: clicked,
    [classes.cursorHidden]: hidden,
    [classes.cursorLinkHovered]: linkHovered,
  });

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
