import React from 'react';

export default function Movie({
  name,
}) {
  // needs an arrow function here, not sure why , it needs to return something
  // so you need a function that calls the function selectCurrentHouse
  return <div> {name}
   </div>;
}
