function leftTriangle(nabil) {
    let result = '';
    for (let i = nabil; i > 0; i--) {
        if (i === nabil) {
            result += '#'.repeat(i) + '\n';
        } else {
            let empty = nabil - i
            result += ' '.repeat(empty) + '#'.repeat(i) + '\n'
        }
    }
    return result;
}

console.log(leftTriangle(7))

//_________________________________________________________//

for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}

//_________________________________________________________//

var board = "";
var evenRow = " # # # #";
var oddRow = "# # # # ";

for (var i = 0; i < 8; i++) {

    if (i % 2 == 0) board += evenRow + '\n';
    else board += oddRow + '\n';
}

console.log(board);

