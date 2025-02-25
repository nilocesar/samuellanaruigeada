var acessOptions = {
	labels: {
		menuTitle: " ",
		increaseText: "Aumentar",
		decreaseText: "Diminuir",
		increaseTextSpacing: "Aumentar espaçamento das fontes",
		decreaseTextSpacing: "Diminuir espaçamento das fontes",
		invertColors: "Inverter cores",
		grayHues: "Tonalidade cinza",
		underlineLinks: "Sublinhar links",
		bigCursor: "Aumentar o cursor",
		readingGuide: "reading guide (in my language)",
		textToSpeech: "text to speech (in my language)",
		speechToText: "speech to text (in my language)",
	},
	textToSpeechLang: "pt-BR",
	speechToTextLang: "pt-BR",
	// textPixelMode: true,
	hotkeys: {
		enabled: true,
	},
	icon: {
		circular: true,
		img: "",
		position: {
			top: {
				size: 0,
				units: "px",
			},
			left: {
				size: 0,
				units: "px",
			},
			type: "fixed",
		},
	},
	modules: {
		increaseText: false,
		decreaseText: false,
		invertColors: true,
		increaseTextSpacing: true,
		decreaseTextSpacing: true,
		grayHues: true,
		underlineLinks: true,
		bigCursor: true,
		readingGuide: false,
		textToSpeech: false,
		speechToText: false,
	},
	textPixelMode: true,
};

events.on("ready", function () {
	var engine_config = navigate.currentScreen.model.acessibility;

	setTimeout(function () {
		if (engine_config.tools) {
			// CREATE TOOLS
			createTools();
		}
	}, 1000);
});

function createTools() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		//Caso seja IE
		$(".icone-active-help-25").attr("aria-hidden", "true");
		$(".icone-active-help-25").attr("tabindex", -1);
	} else {
		new Accessibility(acessOptions);
		$("._access-icon").empty();
		$("._access-menu").attr("aria-hidden", "true");
		$("._access-menu").attr("tabindex", -1);

		$("._access-menu").find("i").attr("aria-hidden", "true");
		$("._access-menu").find("i").attr("tabindex", -1);

		$("._access-menu").find("ul").attr("aria-hidden", "true");
		$("._access-menu").find("ul").attr("tabindex", -1);

		$("._access-menu").find("ul").find("li").attr("aria-hidden", "true");
		$("._access-menu").find("ul").find("li").attr("tabindex", -1);
	}

	$(".acessibility_controll").on("click", function () {
		contrasteAcessibity();
	});

	function contrasteAcessibity() {
		var contrast1 = $('[data-access-action="increaseTextSpacing"]');
		var contrast2 = $('[data-access-action="decreaseTextSpacing"]');
		var contrast3 = $('[data-access-action="invertColors"]');
		var contrast4 = $('[data-access-action="grayHues"]');
		var contrast5 = $('[data-access-action="underlineLinks"]');
		var contrast6 = $('[data-access-action="bigCursor"]');

		var config = navigate.currentScreen.model;

		if (config.language == "en-us") {
			contrast1.text("Increase font spacing");
			contrast2.text("Decrease font spacing");
			contrast3.text("Invert colors");
			contrast4.text("Grayscale");
			contrast5.text("Underline links");
			contrast6.text("Increase the cursor");
		}

		if (config.language == "es") {
			contrast1.text("Aumentar espaciado del texto");
			contrast2.text("Reducir espaciado del texto");
			contrast3.text("Invertir colores");
			contrast4.text("Escala de grises");
			contrast5.text("Subrayar enlaces");
			contrast6.text("Cursor grande");
		}

		const accessibilityConfigCustomLibras =
			navigate.currentScreen.model.acessibility.customLibras;

		if (accessibilityConfigCustomLibras) {
			$("body").trigger("callLibras", ["contrast"]);

			contrast1.on("click", function () {
				$("body").trigger("callLibras", ["contrast-01"]);
			});
			contrast2.on("click", function () {
				$("body").trigger("callLibras", ["contrast-02"]);
			});
			contrast3.on("click", function () {
				$("body").trigger("callLibras", ["contrast-03"]);
			});
			contrast4.on("click", function () {
				$("body").trigger("callLibras", ["contrast-04"]);
			});
			contrast5.on("click", function () {
				$("body").trigger("callLibras", ["contrast-05"]);
			});
			contrast6.on("click", function () {
				$("body").trigger("callLibras", ["contrast-06"]);
			});
		}
	}
}
