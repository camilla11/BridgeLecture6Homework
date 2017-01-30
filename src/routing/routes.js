import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from '../containers/App/App';
import MovieDetails from '../containers/MovieDetails/MovieDetails';

const Routes = () =>(
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route name="movieDetails" path="movieDetails/:title" component={MovieDetails}/>
    </Router>
)

export default Routes;
    //  <Route path="movieInfo" component={MovieInfo} />
