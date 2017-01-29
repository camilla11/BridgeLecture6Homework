import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

import Movie from '../../components/movie'

class App extends Component {

  constructor() {
   super();

   this.state = {
     movies: [],
     currentDirector: 'No Current Director',
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
         directorName : '',},
       });

       $.get('http://netflixroulette.net/api/api.php?director='+ searchDirectorName).then(response =>{
          console.log(response);
          this.setState({
            movies:response
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


       {this.state.movies.map((movie) =>
         <Movie key={movie.show_title}
           name={movie.show_title}
         />)
       }

      </div>
    );
  }
}

export default App;
