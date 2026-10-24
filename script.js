<script src="script.js"></script>
const grade = document.getElementById("grade");

if (grade) {
  grade.addEventListener("change", function () {
    const message = document.getElementById("grade-message");

    if (message) {
      message.textContent =
        "You selected Grade " + grade.value + ".";
    }
  });
}

function showSubject(subject) {
  const message = document.getElementById("subject-message");

  if (message) {
    message.textContent =
      "You selected " + subject +
      ". Learning materials will be added soon!";
  }
}

function checkAnswer(answer) {
  const result = document.getElementById("quiz-result");

  if (result) {
    if (answer === "HTML") {
      result.textContent =
        "Correct! HTML structures web pages.";
    } else {
      result.textContent = "Not quite. Try again!";
    }
  }
}
  
