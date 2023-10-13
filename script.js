let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
  constructor(title, rating, haveWatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
  }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
  allMovies.push(movie);
};

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";

  allMovies.forEach((movie, index) => {
    const movieContainer = document.createElement("li");
    movieContainer.classList.add("movie-container");

    // Set the background color based on the rating
    if (movie.rating >= 3.5) {
      movieContainer.style.backgroundColor = "#ABFC93";
    } else {
      movieContainer.style.backgroundColor = "#FCA593";
    }

    // Create a container for the title and button
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("movie-info");

    // Create an h2 element for the "Title" label and the movie title
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const titleHeading = document.createElement("h2");
    titleHeading.textContent = "Title:";
    titleContainer.appendChild(titleHeading);

    const movieTitle = document.createElement("strong");
    movieTitle.textContent = movie.title;
    titleContainer.appendChild(movieTitle);

    // Create an h2 element for the "Rating" label and the movie rating
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("rating-container");

    const ratingHeading = document.createElement("h2");
    ratingHeading.textContent = "Rating:";
    ratingContainer.appendChild(ratingHeading);

    const movieRating = document.createElement("span");
    movieRating.textContent = movie.rating;
    ratingContainer.appendChild(movieRating);

    // Create the button within a container
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const toggleButton = document.createElement("button");
    toggleButton.textContent = movie.haveWatched ? "Watched" : "Not Watched";
    toggleButton.addEventListener("click", () => {
      movie.haveWatched = !movie.haveWatched;
      printMovies();
    });

    buttonContainer.appendChild(toggleButton);

    // Append the title, rating, and button containers to the info container
    infoContainer.appendChild(titleContainer);
    infoContainer.appendChild(ratingContainer);
    infoContainer.appendChild(buttonContainer);

    // Append the info container to the movie container
    movieContainer.appendChild(infoContainer);

    // Append the movie container to the list
    movieList.appendChild(movieContainer);
  });
  // Add an event listener to the sorting button
  document
    .getElementById("sort-movies-button")
    .addEventListener("click", () => {
      // Sort the allMovies array by rating in descending order
      allMovies.sort((a, b) => b.rating - a.rating);

      // Add a CSS class to trigger the slide effect
      document.getElementById("movie-list").classList.add("slide-effect");

      // Wait for the slide animation to finish (adjust the delay as needed)
      setTimeout(() => {
        // Remove the slide effect class
        document.getElementById("movie-list").classList.remove("slide-effect");

        // Call printMovies to re-render the sorted list
        printMovies();
      }, 1000); // Adjust the delay (in milliseconds) to match your animation duration
    });

  const totalMovies = document.getElementById("total-movies");
  totalMovies.textContent = `Total number of movies: ${allMovies.length}`;
};

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
  const highRatedMovies = allMovies.filter((movie) => movie.rating > rating);
  const highRatedMoviesCount = highRatedMovies.length;

  // Sort highRatedMovies by rating in descending order
  highRatedMovies.sort((a, b) => b.rating - a.rating);

  const highRatedList = document.getElementById("high-rated-list");
  highRatedList.innerHTML = "";

  highRatedMovies.forEach((movie, index) => {
    const movieItem = document.createElement("li");

    // Create strong element for the rating
    const ratingElement = document.createElement("strong");
    ratingElement.textContent = `Rating: ${movie.rating}`;

    // Create text node for the title
    const titleText = document.createTextNode(`Title: ${movie.title}`);

    // Add the elements to the list item
    movieItem.appendChild(titleText);
    movieItem.appendChild(document.createElement("br")); // Add a line break
    movieItem.appendChild(ratingElement);

    movieItem.classList.add("high-rated-movie"); // Add a class for styling

    highRatedList.appendChild(movieItem);
  });

  const highRatedCount = document.getElementById("high-rated-count");
  highRatedCount.textContent = `Total number of movies with a rating higher than ${rating}: ${highRatedMoviesCount}`;
};

//Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
  const movieToChange = allMovies.find((movie) => movie.title === title);

  if (movieToChange) {
    movieToChange.haveWatched = !movieToChange.haveWatched;

    // Find the corresponding button in the movie list
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      if (button.dataset.title === title) {
        button.textContent = movieToChange.haveWatched
          ? "Watched"
          : "Not Watched";
      }
    });

    // Re-render the movie list to update the styling
    printMovies();
  }
};

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();

let movie1 = new Movie("Parasite", 2, false);
/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);
