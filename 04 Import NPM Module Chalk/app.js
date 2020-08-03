const chalk = require("chalk")

const error = chalk.redBright.bold

console.log(chalk.cyanBright("Kawalpreet", chalk.underline.inverse("Juneja")))

console.log(error("Error! Error! Error!"))