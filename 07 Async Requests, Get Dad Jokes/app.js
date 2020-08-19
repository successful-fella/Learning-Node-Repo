const request = require('request')
const fs = require('fs')

console.log("Getting a dad joke")


const url = "https://icanhazdadjoke.com/"
request({ url: url, headers: { "Accept": "application/json" }}, (error, response) => {
	if(!error) {
		const lame_joke = JSON.parse(response.body).joke
		console.log(lame_joke)
		// Extra, might as well save it to a text file as a revision
		fs.appendFileSync('jokes.txt', lame_joke + "\n")
	} else {
		console.log("This. This is what the problem with free APIs is.")
	}
})


// Since request is async below will execute first
console.log("Still fetching")