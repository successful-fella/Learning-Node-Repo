const createStairs = function(n) {
    var stairs = ''
    for(var i = 0; i <= n; i++) {
        for(var j = n; j > 0; j--) {
            if(i < j)
                stairs += " "
            else
                stairs += "#"
        }
        stairs += "\n"
    }
    return stairs
}

module.exports = createStairs