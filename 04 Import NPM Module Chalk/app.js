const chalk = require("chalk")

const error = chalk.redBright.bold

console.log(chalk.blue("Kawalpreet", " ", chalk.underline.inverse.bgWhite("Juneja")))

console.log(error("Error! Error! Error!"))