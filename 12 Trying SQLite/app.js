const sqlite3 = require("sqlite3")

let db = new sqlite3.Database("./database.db", (error) => {
	if(error) {
		return console.log(error.message)
	}
	console.log("Connected to SQLite!")
})


const table_query = "CREATE TABLE IF NOT EXISTS expense(expense_for text, expense_amount number, date_added date)"
const insert_query = "INSERT INTO expense(expense_for, expense_amount) VALUES ('Rice', 500), ('Mic', 3000), ('Recharge', 400)"
const truncate_query = "DELETE FROM expense"
let total_expense = 0


db.serialize(() => {
	db.run(table_query).run(insert_query).each("SELECT * FROM expense", (error, row) => {
		if(error) {
			throw error
		}
		total_expense += row.expense_amount
	})

	db.run(truncate_query)

	db.close(() => console.log("Your total expenditure is $"+total_expense))
})