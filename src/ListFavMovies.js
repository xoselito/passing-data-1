import React, {Component} from 'react';

class ListFavMovies extends Component {
	render(){
      console.log('Props',this.props)
      
    	return(
        	<ol className='movies-list'>
          {this.props.profiles.map((profile)=>{      
          const userName = this.props.users[profile.userID].name;
          const favMovie = this.props.movies[profile.favoriteMovieID].name;
          return (
            <li key={profile.id}>
            {`${userName}'s favorite movie is ${favMovie}`}
            </li>
          
          )
//profile.userID
        })}
          	</ol>
        )
    }
}

export default ListFavMovies