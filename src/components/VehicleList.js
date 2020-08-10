import React from 'react';
import { Link } from 'react-router-dom';

const VehicleList = (props) => {
  const vehicles = props.vehicles.map( (vehicle, i) => {
    return <div key={i}>
      <Link to={{ pathname: '/vehicles/' + encodeURIComponent(vehicle.name), state: {vehicle} }} >
        {vehicle.name}
      </Link>
    </div>
  });

  return (
    <div>
      <h4>Vehicles</h4>
      <div> {vehicles} </div>
    </div>
  );
};

export default VehicleList;