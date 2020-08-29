// Take in hours and rate per hour to compute gross pay.
// Pay the hourly rate for hours upto 40 and 1.5 times of hourly rate for all hours worked above 40 hours.
// Use 45 hours and rate of 10.50 per hour to test the program (the pay should be 498.75).

const hours	= 45
const rate	= 10.50

console.log((40 * rate) + (((hours - 40 < 0)?0:hours-40) * rate * 1.5))

