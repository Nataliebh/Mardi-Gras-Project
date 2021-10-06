
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const btnStart = document.querySelector('#start');
const message = document.querySelector('.msg');
const btnPlayAgain = document.querySelector('#playAgain');
let numCorrect = 0;

const myQuestions = [
  {
    question: '1. Mardi Gras is also called:',
    answers: {
      A: 'Lazy Friday',
      B: 'Fat Tuesday',
      C: 'Sunny monday',
      D: 'Sunny monday',
    },
    correctAnswer: 'B'
  },
  {
    question: '2. What does the colors of Mardi Gras purple, gold and green mean?',
    answers: {
      A: 'Eat & Drink',
      B: 'Love and Happiness',
      C: 'Justice, power and faith',
      D: 'Nothing',
    },
    correctAnswer: 'C'
  },
  {
      question: '3. Beads and coins are thrown from the floats to the spectators. How does they called?',
      answers: {
          A: 'Fatties',
          B: 'Doubloons',
          C: 'Chling',
          D: 'Flus',
        },
        correctAnswer: 'B'
    },
    {
      question: '4. First Mardi Gras parade in New Orleans:',
      answers: {
        A: '1990',
        B: '1940',
        C: '1902',
        D: '1837',
      },
      correctAnswer: 'D'
    },
    {
      question: '5. What is the day before Mardi Gras called?',
      answers: {
        A: 'Lundi Gras',
        B: 'Mundi Gras',
        C: 'Green Gras',
        D: 'Fun Gras',
      },
      correctAnswer: 'A'
    },
    {
      question: '6. What day comes after Mardi Gras?',
      answers: {
        A: 'Hamburger Day',
        B: 'Big Day',
        C: 'Sunday',
        D: 'Ash Wednesday',
      },
      correctAnswer: 'D'
    },
    {
      question: '7. A man dressed as whom was credited with popularizing throwing beads during Mardi Gras?',
      answers: {
        A: 'Trump',
        B: 'Santa Claus',
        C: 'Ashton Kucher',
        D: 'Adam Levine',
      },
      correctAnswer: 'B'
    },
    {
      question: '8. How many king cakes are sold during an average carnival season?',
      answers: {
        A: '600',
        B: '1,234',
        C: '500,000',
        D: '20,000',
      },
      correctAnswer: 'C'
    },
    {
      question: '9. How many times have Mardi Gras parades been canceled in New Orleans?',
      answers: {
        A: '13',
        B: '3',
        C: '0',
        D: '30',
      },
      correctAnswer: 'A'
    },
    {
      question: '10. Which Italian city is famous for its carnival celebrations?',
      answers: {
        A: 'New York',
        B: 'Venice',
        C: 'Munich',
        D: 'Paris',
      },
      correctAnswer: 'B'
    },
];

// Start the game
btnStart.addEventListener('click', () =>{
  buildQuiz();
  submitButton.style.display = 'block';
  btnStart.style.display = 'none';
  btnPlayAgain.style.display = 'none';
});

// Render questions to html
function buildQuiz() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];
            // for each available answer
            for (letter in currentQuestion.answers) {

                // add an HTML radio button
                answers.push(
                    `<label>
                        <ul>
                        <li class="answer"><input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}</li>
                        </ul>
                    </label>`
                );
            }
            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('<br>')}`
            );
        }
    );
    // put output on the page
    quizContainer.innerHTML = output.join('');
};

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // for each question
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question' + questionNumber + ']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = '#8cbf3f';
        }
    });
    // Show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
    console.log('showResults', numCorrect);
}

// Submit the game
submitButton.addEventListener('click', () =>{
  showMessage();
  btnPlayAgain.style.display = 'block';
  submitButton.style.display = 'none';
  showResults();
  
});

// Show message (when submiting)
function showMessage(){
  // message.style.display = 'block';
  message.classList.add('reveal');
  if(numCorrect > 7) {
    message.innerHTML += '🏆great job!🏆'
  } else if(numCorrect > 4) {
    message.innerHTML += '😎Nicely Done!😎'
  } else {
    message.innerHTML += 'Good luck next time😉'
  }
}

// Play again
btnPlayAgain.addEventListener('click', () =>{
  numCorrect = 0;
  buildQuiz();
  submitButton.style.display = 'block';
  btnPlayAgain.style.display = 'none';
  message.classList.remove('reveal');
  message.remove();
  resultsContainer.innerHTML = '';
});

// button to top
const scrollTop = document.querySelector('#button-top');
window.addEventListener('scroll',() => {
    scrollTop.classList.toggle('active', window.scrollY > 500);
});
