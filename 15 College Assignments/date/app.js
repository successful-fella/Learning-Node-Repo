const date = require('./date.js')

let date_obj = date()
let date_time_arr = date_obj.toISOString().split('T')
let date_time_str = "Date is - " + date_time_arr[0] + " & Time is - " + date_time_arr[1]
console.log(date_time_str)