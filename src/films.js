// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  // use of ... (spread) operator to copy the array and the set operator to avoid 
  // duplicates in our new array
  let result = [...new Set(array.map(movie => movie.director))];
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  // find all instances of the director with the filter method()
  let inputDirector = array.filter(movie => movie.director.includes(director));
  // create an array with the director's titles using map method()
  let directorTitles = inputDirector.map(movieTitle => ({
    title: movieTitle.title,
    year: movieTitle.year,
    director: movieTitle.director,
    duration: movieTitle.duration,
    genre: movieTitle.genre,
    score: movieTitle.score,
  }));
  return directorTitles;
  console.log(directorTitles);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // get the director's info from last exercice
  let moviesInfo = getMoviesFromDirector(array, director);
  // get the addition of all the movies score
  let moviesScore = moviesInfo.reduce((initialScore, currentValue) => {
    let score = initialScore + currentValue.score;
    return score;
  }, 0);
  // get the average
  let averageScore = moviesScore / moviesInfo.length;
  return averageScore;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  // create a new array with only the movie titles using map()
  let moviesByTitle = array.map(movie => movie.title);
  //sort the new array using sort()
  let moviesOrderedByTitle = moviesByTitle.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  // create a new array with length 20 using splice() method to "cut" the array at the position
  let moviesOrderedMaxLength = [...moviesOrderedByTitle].splice(0, 20);
  return moviesOrderedMaxLength;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // order the movies by year with sort. Is necessary to copy the array, but with the new order
  let orderByYear = [...array].sort(function (a, b) {
    // compare the years so they can be ordered from older to newer
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
      // when the movies are by year, is necessary to order them alphabetically
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  // console.log(orderByYear);
  return orderByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  // get all movies by category first
  let moviesByGenre = array.filter(movie => movie.genre.includes(genre));
  // get all the scores and add them into a variable using reduce
  let scoreByGenre = moviesByGenre.reduce(function (initialScore, currentValue) {
    let score = initialScore + currentValue.score;
    return score;
  }, 0);
  // get the average. The array's length is only of the movies with an score, that is why we need the filter() method
  let averageScoreByGenre = Number(scoreByGenre / (moviesByGenre.filter(movie => movie.score)).length);
  return Number(averageScoreByGenre.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  // first change the movie's duration format => create a function that gets the movie duration to change
  const updatedDurationMovies = (movieDuration) => {
    // if the format is H and MIN is necessary to get both elements and add them (we compare the format with regEx)
    if (movieTime = movieDuration.match(/(?:(\d)h )?(\d+)min/)) {
      const hours = parseInt(movieTime[1]);
      const minutes = parseInt(movieTime[2]);
      return (hours * 60) + minutes;
    // if there's only H we have to convert it to MIN
    } else if (movieTime = movieDuration.match(/(\d+)h/)){
      const hours = parseInt(movieTime[1]) * 60;
      return hours;
    // if we only get the minutes we return the duration as it is
    } else {
      return movieDuration;
    }
  }

  // with the new durations is necessary to create a new array with the updated information, using map() method
  let newArray = array.map(movie => ({
    ...movie,   // copy the element
    duration: updatedDurationMovies(movie.duration)   // update the array
  }));
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}