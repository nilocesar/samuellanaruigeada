events.on("ready",function(){$(".botao").on("click",function(){$(this).find(".pulse").css("animation","none")}),$(".btn").on("click",function(){var n=$(this).index(".btn");$(".btn").eq(n+1).removeClass("block-2")}),$(".button-type-next-page05").on("click",function(){scorm.saveObject("pag02",!0),navigate.next()})});
//# sourceMappingURL=script.js.map
