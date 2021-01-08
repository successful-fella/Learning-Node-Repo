const express = require("express")
const contact = require("./contact_db")

const server = express()

const port = 5000

server.get("/", (req, resp, next) => {
	resp.send("Hey!")
})

server.get("/contact", (req, resp, next) => {
	const contact_details = contact()
	resp.json(contact_details)
})

server.listen(port)