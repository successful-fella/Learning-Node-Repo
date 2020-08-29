// Wait for operations (add, sub) like waiting for server to response
const operations = (a, b, callback) => {
	setTimeout(() => {
		const addition = a + b // in real world we will get response from server
		const substraction = a - b
		callback(addition, substraction)
	}, 3000)
}


// Now call the callback function!
operations(10, 5, (addition, substraction) => {
	console.log(addition, substraction) // Expected response 15 and 5
}) 