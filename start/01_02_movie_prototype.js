// Write your code here
//1st approach
// class Movie{
// constructor (title,director,genre,releaseYear,rating){
//   this.title = title;
//   this.director = director;
//   this.genre=genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }

// movieReview(){
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released
//   in ${this.releaseYear}. It received a rating of ${this.rating} `
// }

// }

// const movieReviewed = new Movie("title","director","genre","releaseYear",5)
// console.log(movieReviewed.movieReview());

function Movie(title,director,genre,releaseYear,rating){
  this.title = title;
  this.director = director;
  this.genre=genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}
//dont use arrow function here because it have its own scope
Movie.prototype.movieOverview = function() {
  return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating} `
}

const movieReview = new Movie("jailer","Nelson","action",2023,4.6);
console.log(movieReview.movieOverview())

