events.on("ready", function () {
  checkAdvance();
  adjustMenu();
  numberQuiz();

  function checkAdvance() {
    if (scorm.loadObject("pag01") == true) {
      $(".btn2").removeClass("block");
    }
    if (scorm.loadObject("pag02") == true) {
      $(".btn3").removeClass("block");
    }
    if (scorm.loadObject("pag03") == true) {
      $(".btn4").removeClass("block");
    }
    if (scorm.loadObject("pag04") == true) {
      $(".btn5").removeClass("block");
    }
    if (scorm.loadObject("pag16") == true) {
      $(".btn6").removeClass("block");
    }
  }

  function adjustMenu() {
    $(".component-template-header label").on("click", function () {
      if ($(".container-menu-list").css("display") === "flex") {
        $(".component-template-header label").text("☰");
        $(".component-template-header label").css("color", "#F5D24B");
        $(".component-template-header label").css("font-size", "3.5rem");
      }
      if ($(".container-menu-list").css("display") === "none") {
        $(".component-template-header label").text("✖");
        $(".component-template-header label").css("color", "#012F7C");
        $(".component-template-header label").css("font-size", "2.5rem");
      }
    });
  }

  function numberQuiz() {
    var quizNum = Number($(".quizNum").text());

    $(`.box${quizNum + 1}`).addClass("atual");

    if (scorm.loadObject("quiz")) {
      var quizAll = scorm.loadObject("quiz").length - 1;

      for (let i = 0; i <= quizAll; i++) {
        var loadQuiz = scorm.loadObject("quiz")[i];

        if (loadQuiz.r == 1) {
          $(`.boxNumQuiz .box${i + 1}`).addClass("respondido acertou");
          $(`.boxNumQuiz .box${i + 1} .num`).addClass("hide");
          $(`.boxNumQuiz .box${i + 1} .check`).removeClass("hide");
        } else {
          // console.log('ERROU')
          $(`.boxNumQuiz .box${i + 1}`).addClass("respondido errou");
          $(`.boxNumQuiz .box${i + 1} .num`).addClass("hide");
          $(`.boxNumQuiz .box${i + 1} .error`).removeClass("hide");
        }
      }
    }
  }
});
