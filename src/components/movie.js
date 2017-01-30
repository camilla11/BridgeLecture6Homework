import React from 'react';
import {Link} from 'react-router';

export default function Movie({
  title,
}) {
  // needs an arrow function here, not sure why , it needs to return something
  // so you need a function that calls the function selectCurrentHouse
  return <div>
       <Link to={"/movieDetails/" + title} >{title} </Link>
   </div>;
}
