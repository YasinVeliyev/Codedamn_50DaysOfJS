function high(x) {
	let ascii = "abcdefghijklmnopqrstuvwxyz";
	let wordArr = x.split(" ");
	let num = wordArr.map((word) =>
		word
			.split("")
			.map((letter) => ascii.indexOf(letter) + 1)
			.reduce((a, b) => a + b),
	);
	return wordArr[num.indexOf(Math.max(...num))];
}
