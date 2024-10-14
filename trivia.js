/* tell the time and date to the user */
var myDate = new Date();
var myDay = myDate.getDay();

// array of days. 
var weekday = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

// get hour value. 
var hours = myDate.getHours();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
var minutes = myDate.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;
var myTime = hours + ":" + minutes + "" + ampm + myDate.getSeconds();

/* create greeting message */
function getGreeting() {
    const hour = new Date().getHours();
    var greeting;
  
    switch (true) {
      case hour < 12:
        greeting = " Good morning Professor!";
        break;
      case hour < 18:
        greeting = " Good afternoon Professor!";
        break;
      default:
        greeting = " Good evening Professor!";
    }
  
    return greeting;
  }

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
 
/* calculate percentage */
function calculatePercentage(score, total) {
    const percentage = (score / total) * 100;
    return percentage.toFixed(2) + "%"; // Format to two decimal places
  }
  
  const studentScore = 100;
  const totalMarks = 100;
  
  const percentageScore = calculatePercentage(studentScore, totalMarks);