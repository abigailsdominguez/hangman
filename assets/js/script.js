$(document).ready(() => {
	let words = ["DISCRIMINANT", "COEFFICIENT", "STRING", "CONCATENATE", "SPAN", "BREAK", "BUTTON", "INPUT", "TEXTAREA", "PUSH", "CONTAINER", "PADDING", "MARGIN", "BORDER", "JAVASCRIPT", "BOOTSTRAP", "HYPERTEXT", "CONSOLE", "ALERT", "LENGTH", "PLACEHOLDER", "TARGET", "CLASS", "TERMINAL", "INDEX", "FUNCTION", "PARAMETER", "APPEND", "PREPEND", "ARRAY", "VIEWPORT", "STYLESHEET", "FLOAT", "JQUERY", "ASSETS", "SCRIPT", "HEADER", "FOOTER", "HOVER", "VISITED", "NUMBER", "LINK", "EMAIL","FIZZBUZZ", "MAIN", "GITHUB", "GITLAB", "RESPONSIVENESS", "SWITCH", "LOOP" ,"JUMBOTRON", "DROPDOWN", "OVERFLOW", "ATTRIBUTE", "INLINE", "BLOCK"];
	shuffle(words);
	let word = words[0];
	let wordArray = word.split("");
	let errorCounter = 0;
	let formedWordArray = [];

	for (i = 0; i < word.length; i++) {
		let resultIndex = ("span"+[i]);
		$("<span/>").attr("id","new").appendTo("span#result");  
		$("#result").append("<span id="+resultIndex+">_ </span");
	}

	$(".hangmanBtn").click((event) => {
		let input = $(event.currentTarget).val();
		let inputIsValid = false;

		$(event.currentTarget).addClass("clicked");

		for (index = 0; index < word.length; index++) {
			if (input == wordArray[index]) {
				$("span#span"+[index]).html(" " + input + " ");
				inputIsValid = true;
				formedWordArray[index] = input;
			}
		}

		let finalWord = formedWordArray.join("");
		if (finalWord == word) {
			$("#gameOver").html("YOU WIN!!!");
			$("#playAgain").show();
			$(".hangmanBtn").addClass("clicked");
		}

		if (inputIsValid == false) {
			errorCounter += 1;
			$("#error"+[errorCounter]).show();
		
			if (errorCounter >= 10) {
				$("#gameOver").html("GAME OVER");
				$("#playAgain").show();
				$(".hangmanBtn").addClass("clicked");
				$("#result").html("CORRECT ANSWER: "+ word);
			}
		}
	});

	$("#playAgain").click(() => {
		window.location.reload();
	});
});

function shuffle(a) {
	for (let i = a.length-1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}