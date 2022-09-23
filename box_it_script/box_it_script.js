const input = process.argv.splice(2, process.argv.length - 1)

// ┏ ━ ┓
// ┃   ┃
// ┣ ━ ┫
// ┃   ┃
// ┗ ━ ┛

 //---find longest Word length from the array
let longestWord = 0
for(let element of input){
    if(element.length > longestWord){
        longestWord = element.length
    }
}
let lineNumber = longestWord

// //------------------DrawLine Function

let strightLine = "━"
// console.log(strightLine)

function drawLine(lineNumber){
    return strightLine.repeat(lineNumber)
}
drawLine(4)

// //-------------------drawTopBorder Function
let topLeftCorner = "┏"
let topRightCorner = "┓"
function drawTopBorder(lineNumber){
   return topLeftCorner + drawLine(lineNumber) + topRightCorner
}
drawTopBorder(4)

// //-----------------drawMiddleBorder Function

let middleLeftCorner = "┣"
let middleRightCorner = "┫"
function drawMiddleBorder(lineNumber){
    return middleLeftCorner + drawLine(lineNumber) + middleRightCorner
 }
drawMiddleBorder(4)

// //-----------------drawBottomBorder Function

let bottomLeftCorner = "┗"
let bottomRightCorner = "┛"
function drawBottomBorder(lineNumber){
    return bottomLeftCorner + drawLine(lineNumber) + bottomRightCorner
 }
drawBottomBorder(4)

//  //---------------- boxIt Function

function boxIt (input){
    let middlePart = ""
    let speceOnRight = ""
    let firstLine = ""
    let firstword = input[0]

    if(input[0]!==undefined){
      speceOnRight = ' '.repeat(lineNumber - input[0].length)
      firstLine = "\n" + "┃" + firstword + speceOnRight + "┃"
    }

    for(let i = 1; i <input.length; i++ ){
        word=input[i]
        speceOnRight = ' '.repeat(longestWord - word.length)
        middleLine = drawMiddleBorder(lineNumber) + "\n" + "┃" + word + speceOnRight + "┃" + "\n"
        middlePart = middlePart + middleLine
}
   
    return drawTopBorder(lineNumber) + firstLine + "\n" + middlePart + drawBottomBorder(lineNumber)
 }

console.log(boxIt(input))


// // // const Arg1 = process.argv[2];
// // // const Arg2 = parseInt(process.argv[3]);

// // // console.log("first argument:", Arg1);
// // // console.log("second argument:", Arg2);

// // // console.log(Arg2 > 200); 

// // // $ node boxit.js 'Jon Snow' 'Cersei Lannister' 'Daenerys Targaryen'
// // // $ node boxit.js 'Jon Snow'
// // // $ node boxit.js