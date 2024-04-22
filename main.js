let item = document.querySelector(`ul`);

for (let i = 1; i <= 100; i++) {
	//stringa vuota per memorizzare l'output
	let output = "";


	if (i % 3 === 0) {
		let valore;
		// Aggiungi "Fizz" all'output se il numero è un multiplo di 3  
		output += "Fizz";
		


	}

	if (i % 5 === 0) {
		// Aggiungi "Buzz" all'output se il numero è un multiplo di 5
		output += "Buzz";
		


	}

	if (output === "") {
		// Se la stringa di output è vuota mi stampi il numero i
		output = i;
	 
	}
	console.log(output);
	item.innerHTML += `<li>${output}</li>`;

}
