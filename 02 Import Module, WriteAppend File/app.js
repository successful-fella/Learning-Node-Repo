const fs = require('fs')

fs.writeFileSync("kp.txt", "yo KP")

fs.appendFileSync("kp.txt", ". What's up?")