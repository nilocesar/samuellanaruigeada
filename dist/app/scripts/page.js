!function r(a,n,l){function s(o,e){if(!n[o]){if(!a[o]){var t="function"==typeof require&&require;if(!e&&t)return t(o,!0);if(c)return c(o,!0);throw(e=new Error("Cannot find module '"+o+"'")).code="MODULE_NOT_FOUND",e}t=n[o]={exports:{}},a[o][0].call(t.exports,function(e){return s(a[o][1][e]||e)},t,t.exports,r,a,n,l)}return n[o].exports}for(var c="function"==typeof require&&require,e=0;e<l.length;e++)s(l[e]);return s}({1:[function(e,o,t){events.on("ready",function(){1==scorm.loadObject("pag01")&&$(".btn2").removeClass("block"),1==scorm.loadObject("pag02")&&$(".btn3").removeClass("block"),1==scorm.loadObject("pag03")&&$(".btn4").removeClass("block"),1==scorm.loadObject("pag04")&&$(".btn5").removeClass("block"),1==scorm.loadObject("pag16")&&$(".btn6").removeClass("block"),$(".component-template-header label").on("click",function(){"flex"===$(".container-menu-list").css("display")&&($(".component-template-header label").text("☰"),$(".component-template-header label").css("color","#F5D24B"),$(".component-template-header label").css("font-size","2rem")),"none"===$(".container-menu-list").css("display")&&($(".component-template-header label").text("✖"),$(".component-template-header label").css("color","#012F7C"),$(".component-template-header label").css("font-size","1.5rem"))});var e=Number($(".quizNum").text());if($(".box"+(e+1)).addClass("atual"),scorm.loadObject("quiz")){var o=scorm.loadObject("quiz").length-1;for(let e=0;e<=o;e++)(1==scorm.loadObject("quiz")[e].r?($(".boxNumQuiz .box"+(e+1)).addClass("respondido acertou"),$(`.boxNumQuiz .box${e+1} .num`).addClass("hide"),$(`.boxNumQuiz .box${e+1} .check`)):($(".boxNumQuiz .box"+(e+1)).addClass("respondido errou"),$(`.boxNumQuiz .box${e+1} .num`).addClass("hide"),$(`.boxNumQuiz .box${e+1} .error`))).removeClass("hide")}})},{}]},{},[1]);
//# sourceMappingURL=page.js.map
