import React from 'react';

const VehicleDetail = (props) => {

  const {
    name,
    model,
    passengers,
    cost_in_credits,
    cargo_capacity,
    crew,
    max_atmosphering_speed,
    vehicle_class,
    length,
    manufacturer
  } = props.location.state.vehicle

  return (
    <div>
      <h2>{name}</h2>
      <p>Model: {model}</p>
      <p>Passengers: {passengers}</p>
      <p>Cost: {cost_in_credits}</p>
      <p>Cargo Capacity: {cargo_capacity}</p>
      <p>Crew Numbers: {crew}</p>
      <p>Max Speed: {max_atmosphering_speed}</p>
      <p>Vehicle Class: {vehicle_class}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Length: {length}</p>
    </div>
  );
};

export default VehicleDetail;