// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDir = moviesArray.map((item) => item.director);
    return allDir;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArr = moviesArray.filter((item) => item.director === "Steven Spielberg" && item.genre.includes('Drama')) 
    return newArr.length;

}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sumScore = 0;
    
      const valScore = moviesArray.map((item) => item.score);
          
  
    for (let i = 0; i < valScore.length; i++){
      sumScore += valScore[i]/ valScore.length
    }
    return Math.round((sumScore * 100)) / 100
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let sumAvr = 0;

    const drama = moviesArray.filter((item => item.genre.includes ("Drama")))
    const avrDrama = drama.map((item => item.score))
    
    for (let i = 0; i < avrDrama.length ; i++){
        sumAvr += avrDrama[i] / avrDrama.length
    }
return sumAvr

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = [...moviesArray]

      newArr.sort((a,b) => a.year - b.year)
      
      return newArr
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = moviesArray.map((item) => item.title)
    
    newArr.sort()
 return newArr.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


