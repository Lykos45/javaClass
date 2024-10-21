//play game button
document.getElementById("playGameBtn").
addEventListener("click", function () {
document.getElementById("options").innerHTML = "<h3>The game has started!</h3>";
});

window.onload = function() {
    var startGame = document.getElementById("playGameBtn");

    startGame.onclick = function() {
        alert("Game started!");
    }
}

/* setting array for hero questions and answers*/
const quizData = [
    {
      question: "1/4 Who drives the batmobile?",
      options: ["A.superman", "B.batman", "C.spiderman", "D.hulk"],
      answer: "B.batman"
    },
    {
      question: "2/4 Who shoots webs from their wrists?",
      options: ["A.batman", "B.hulk", "C.spiderman", "D.superman"],
      answer: "C.spiderman"
    },
    {
      question: "3/4 Who turns green when they are mad?",
      options: ["A.hulk", "B.spiderman", "C.batman", "D.superman"],
      answer: "A.hulk"
    },
    {
      question: "4/4 Who wears an S on their chest and can fly?",
      options: ["A.batman", "B.spiderman", "C.hulk", "D.superman"],
      answer: "D.superman"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("quiz");
  
  var currentQuestion = 0;
  var score = 0;

  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "<h3></h3>";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }

  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <h3>Your score: ${score}/${quizData.length}</h3>
    `;
  }
  
  showQuestion();