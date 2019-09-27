$(document).ready(function() {
  var game = {
    questions: [
      {
        question: "What color is the sky?",
        possibles: ["Blue", "White", "Light Blue", "Black"],
        id: "question-one",
        answer: 0
      },
      {
        question: "Are chickens mammals?",
        possibles: ["Yes", "No", "Kind of", "Not really"],
        id: "question-two",
        answer: 1
      },
      {
        question: "Why are whales the largest mammals?",
        possibles: [
          "They eat a lot",
          "They work out",
          "They were made that way",
          "They were small before"
        ],
        id: "question-three",
        answer: 2
      },
      {
        question: "Why do javaScript Developers wear glasses?",
        possibles: [
          "They are nerds",
          "They are too smart",
          "They don't eat carrots",
          "They don't C#"
        ],
        id: "question-four",
        answer: 3
      },
      {
        question: "What color is a tree?",
        possibles: ["Green", "Brown", "Yellow", "Not enough information given"],
        id: "question-five",
        answer: 3
      },
      {
        question: "How much higher can a human jump than a mountain?",
        possibles: ["3ft", "1meter", "2km", "Mountains can't jump"],
        id: "question-six",
        answer: 3
      },
      {
        question: "Where are fish from?",
        possibles: ["Finding Nemo", "The river", "The lighthouse", "The ocean"],
        id: "question-seven",
        answer: 3
      },
      {
        question: "Why do cows moo?",
        possibles: [
          "They feel pain",
          "They like to growl",
          "They need to communicate",
          "God speaks with them",
          "They are angry"
        ],
        id: "question-eight",
        answer: 2
      }
    ]
  };

  var message = "Game Over!";

  $(".startGame").on("click", function() {
    $(".wrapper").show();
    console.log("hello");

    $(".startGame").hide();
  });

  var number = 120;
  $("#timeLeft").on("click", run);

  function decrement() {
    number--;
    $("#timeLeft").html("<h2>" + number + " seconds" + "</h2>");
    if (number === 0) {
      stop();
      $("#message").html("time up!");
      checkAnswers();
    }
  }

  function run() {
    counter = setInterval(decrement, 1000);
  }

  function stop() {
    clearInterval(counter);
  }

  run();

  function formTemplate(data) {
    var qString = "<form id='questionOne'>" + data.question + "<br>";
    var possibles = data.possibles;
    for (var i = 0; i < possibles.length; i++) {
      var possible = possibles[i];
      console.log(possible);
      qString =
        qString +
        "<input type='radio' name='" +
        data.id +
        "' value=" +
        i +
        ">" +
        possible;
    }
    return qString + "</form>";
  }
  window.formTemplate = formTemplate;

  function buildQuestions() {
    var questionHTML = "";
    for (var i = 0; i < game.questions.length; i++) {
      questionHTML = questionHTML + formTemplate(game.questions[i]);
    }
    $("#questions-container").append(questionHTML);
  }

  function isCorrect(question) {
    var answers = $("[name=" + question.id + "]");
    var correct = answers.eq(question.answer);
    var isChecked = correct.is(":checked");
    return isChecked;
  }

  buildQuestions();

  function resultsTemplate(question) {
    var htmlBlock = "<div>";
    htmlBlock = htmlBlock + question.question + ": " + isChecked;
    return htmlBlock + "</div>";
  }

  function checkAnswers() {
    var resultsHTML = "";
    var guessedAnswers = [];
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0;

    for (var i = 0; i < game.questions.length; i++) {
      if (isCorrect(game.questions[i])) {
        correct++;
      } else {
        if (checkAnswered(game.questions[i])) {
          incorrect++;
        } else {
          unAnswered++;
        }
      }
    }
    $(".results").html(
      "<br> correct: " +
        correct +
        ", " +
        "<span> " +
        "incorrect: " +
        incorrect +
        ", " +
        "<span> " +
        "unanswered: " +
        unAnswered
    );
  }

  function checkAnswered(question) {
    var anyAnswered = false;
    var answers = $("[name=" + question.id + "]");
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        anyAnswered = true;
      }
    }
    return anyAnswered;
  }

  $("#doneButton").on("click", function() {
    checkAnswers();
    stop();
    $("#messageDiv").html("<br> Game Over! <br>");
  });
});
