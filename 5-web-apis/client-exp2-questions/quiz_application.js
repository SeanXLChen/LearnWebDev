const quizForm = document.getElementById("quiz-form");
const resultsContainer = document.getElementById("results");

let questions = [];

async function fetchQuestions() {
  try {
    const response = await fetch("http://localhost:8000/questions");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    questions = await response.json();

    loadQuestions();
  } catch (error) {
    console.error("Could not fetch questions:", error);
  }
}

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
  fetchQuestions();
});
