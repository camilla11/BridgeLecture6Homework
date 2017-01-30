import React, { Component } from 'react';
import $ from 'jquery';

import Movie from '../../components/movie'

class Movies extends Component {

  constructor() {
   super();

   this.state = {
     movies: [],
     currentDirector: 'No Current Director',
     badSearch : false,
     form : {
     directorName : '',},
   }

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
   // binding the this that is inside the current constructor to the this inside the selectCurrentHouse
  }

  handleSubmit(event) {
       event.preventDefault();
       const searchDirectorName = this.state.form.directorName;
       this.setState({
         currentDirector: searchDirectorName
       });
       this.setState({
         form : {
           directorName : '',
          },
         badSearch : true
       });

       $.get('http://netflixroulette.net/api/api.php?director='+ searchDirectorName).then(response =>{
          console.log(response);
          this.setState({
            movies:response,
            badSearch:false
          });
      });

    }

   handleChange(event) {
     this.setState({
       form: {
         directorName: event.target.value,
       }
     });
   }

  render() {
    return (
      <div>
      Current Director: {this.state.currentDirector}
      <p>Example: Quentin Tarantino </p>
       <form onSubmit={this.handleSubmit}>
         <label>
           Search a directors name for their movies on Netfix:
           <input type="text" value={this.state.form.directorName} onChange={this.handleChange}/>
         </label>
         <input type="submit" value="Submit" />
       </form>

       <p>{this.state.badSearch ? "Sorry, no results found" : ""}</p>
       { this.state.movies.map((movie) =>
         <Movie key={movie.show_title}
           title={movie.show_title}
         />)
       }

      </div>
    );
  }
}

export default Movies;
