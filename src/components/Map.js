import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
    },
  },
}));

const position = [45.4600145, -73.8092315];

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            110 Avenue de Forest Gardens,
            <br />
            Pointe-Claire, QC H9R 3T1, Canada
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
