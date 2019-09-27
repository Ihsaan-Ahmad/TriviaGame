$("#start").on("click", function() {
  game.start();
});

$(document).on("click", "#end", function() {
  game.done();
});

var questions = [
  {
    question: "What color is the sky?",
    answers: ["Blue", "White", "Light Blue", "Black"],
    correctAnswer: ["Blue"]
  },
  {
    question: "Are chickens mammals?",
    answers: ["Yes", "No", "Kind of", "Not really"],
    correctAnswer: ["No"]
  },
  {
    question: "Why are whales the largest mammals?",
    answers: [
      "They eat a lot",
      "They work out",
      "They were made that way",
      "They were small before"
    ],
    correctAnswer: ["They were made that way"]
  },
  {
    question: "Why do javaScript Developers wear glasses?",
    answers: [
      "They are nerds",
      "They are too smart",
      "They don't eat carrots",
      "They don't C#"
    ],
    correctAnswer: ["They don't C#"]
  },
  {
    question: "What color is a tree?",
    answers: ["Green", "Brown", "Yellow", "Not enough information given"],
    correctAnswer: ["Not enough information given"]
  },
  {
    question: "How much higher can a human jump than a mountain?",
    answers: ["3ft", "1meter", "2km", "Mountains can't jump"],
    correctAnswer: ["Mountains can't jump"]
  },
  {
    question: "Do birds jump before take-off?",
    answers: [
      "A little bit",
      "Maybe",
      "They could if they try",
      "They jump quite a margin"
    ],
    correctAnswer: ["A little bit"]
  },
  {
    question: "Where are fish from?",
    answers: ["Finding Nemo", "The river", "The lighthouse", "The ocean"],
    correctAnswer: ["The Ocean"]
  },
  {
    question: "Why do you have your wallet/purse?",
    answers: [
      "So I can buy things",
      "So I can stay secure",
      "So I can look cool",
      "All of the above"
    ],
    correctAnswer: ["All of the above"]
  }
];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#subwrapper").prepend(
      '<h2> Time Remaining: <span id="counter">120</span> Seconds</h2>'
    );
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#subwrapper").append("<h2>" + questions[i].question + "</h2");
      for (var j = 0; j < questions[i].answers.length; j++) {
        $("#subwrapper").append(
          "<input type= 'radio' name = 'question-' " +
            i +
            " ' value='" +
            questions[i].answers[j] +
            "'>'" +
            questions[i].answers[j]
        );
      }
    }
    $("#subwrapper").append('<br><button id="end">Done</button>');
  },
  done: function() {
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name=question-1]":checked'), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#subwrapper h2").remove();

    $("#subwrapper").html("<h2>Finished!</h2>");
    $("#subwrapper").append("<h3>Correct Answer: " + this.correct + "<h3");
    $("#subwrapper").append("<h3>Incorrect Answer: " + this.incorrect + "<h3");
    $("subwrapper").append(
      "<h3>Unanswered: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};
