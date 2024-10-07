// set up question and matching answer arrays
var heroQuest = ['drives the batmobile?', 'shoots webs from their wrists?', 'turns green when they are mad?', 'wears an S on their chest and can fly?'];
var heroAns = ['batman', 'spiderman', 'hulk', 'superman'];

// hero quiz function displays hero questions and gives the user 2 attempts to get it right - then returns a score
function heroQuiz() {
  // initialize points
  var points = 0;
  //use a for loop to loop through each hero question
  for (i = 0; i <= 3; i++) {
    //set attempts to 3
    var guesses = 3;
    // use a while loop to give the user 3 guesses to answer
    while (guesses > 0) {
      // prompt user with a hero question
      ans = prompt("Who " + heroQuest[i]);
      // see if the answer matches the answer array
      if (ans == heroAns[i]) {
        // if correct, add 1 to point, alert user and set guesses to 0
        points = points + 1;
        alert("Correct!");
        guesses = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from guesses
        alert("Incorrect");
        guesses = guesses - 1;
      } // end if
    } // end while
  } // end for
  // return the points variable
  return points;
} // end heroQuiz function