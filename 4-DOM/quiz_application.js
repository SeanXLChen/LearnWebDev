const quizForm = document.getElementById("quiz-form");
const resultsContainer = document.getElementById("results");

const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["4", "22", "3", "5"],
    correctAnswer: "4",
  },
  {
    question: "Who is the President of the United States?",
    answers: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
    correctAnswer: "Joe Biden",
  },
  {
    question: "Who is the best soccer player in the world?",
    answers: [
      "Kylian Mbappé",
      "Leo Messi",
      "Cristiano Ronaldo",
      "Erling Haaland",
    ],
    correctAnswer: "Leo Messi",
  },
  {
    question: "What is 3 * 2?",
    answers: ["4", "22", "3", "6"],
    correctAnswer: "6",
  },
  {
    question: "What is 10 / 2?",
    answers: ["4", "5", "3", "6"],
    correctAnswer: "5",
  },
  // Add more questions as needed
];

function loadQuestions() {
  questions.forEach((question, questionIndex) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `${questionIndex + 1}. ${question.question}`;
    questionDiv.appendChild(questionTitle);

    question.answers.forEach((answer, answerIndex) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="question${questionIndex}" value="${answer}"> ${answer}`;
      questionDiv.appendChild(label);
    });

    quizForm.insertBefore(questionDiv, quizForm.lastElementChild);
  });
}

function showResults() {
  let score = 0;
  questions.forEach((question, index) => {
    const questionAnswers = quizForm.querySelectorAll(
      `[name="question${index}"]`
    );
    const selectedAnswer = quizForm[`question${index}`].value;
    const isCorrect = selectedAnswer === question.correctAnswer;
    if (isCorrect) {
      score++;
    }

    // Highlight answers
    questionAnswers.forEach((answer) => {
      if (answer.value === question.correctAnswer) {
        answer.parentElement.classList.add("correct"); // Highlight correct answer
      } else if (answer.value === selectedAnswer) {
        answer.parentElement.classList.add("incorrect"); // Highlight incorrect answer
      }
    });
  });
  resultsContainer.innerHTML = `You scored ${score} out of ${questions.length}.`;
  resultsContainer.style.display = "block";
}

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showResults();
});

document.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
});
