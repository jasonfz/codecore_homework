//creating variables to make the grid

let _0_0 = "□ "; let _1_0 = "□ "; let _2_0 = "□ "; let _3_0 = "□ "; let _4_0 = "□ "; let _5_0 = "□ "; let _6_0 = "□ "; let _7_0 = "□ "; let _8_0 = "□ "; let _9_0 = "□ "; 
let _0_1 = "□ "; let _1_1 = "□ "; let _2_1 = "□ "; let _3_1 = "□ "; let _4_1 = "□ "; let _5_1 = "□ "; let _6_1 = "□ "; let _7_1 = "□ "; let _8_1 = "□ "; let _9_1 = "□ "; 
let _0_2 = "□ "; let _1_2 = "□ "; let _2_2 = "□ "; let _3_2 = "□ "; let _4_2 = "□ "; let _5_2 = "□ "; let _6_2 = "□ "; let _7_2 = "□ "; let _8_2 = "□ "; let _9_2 = "□ "; 
let _0_3 = "□ "; let _1_3 = "□ "; let _2_3 = "□ "; let _3_3 = "□ "; let _4_3 = "□ "; let _5_3 = "□ "; let _6_3 = "□ "; let _7_3 = "□ "; let _8_3 = "□ "; let _9_3 = "□ "; 
let _0_4 = "□ "; let _1_4 = "□ "; let _2_4 = "□ "; let _3_4 = "□ "; let _4_4 = "□ "; let _5_4 = "□ "; let _6_4 = "□ "; let _7_4 = "□ "; let _8_4 = "□ "; let _9_4 = "□ "; 
let _0_5 = "□ "; let _1_5 = "□ "; let _2_5 = "□ "; let _3_5 = "□ "; let _4_5 = "□ "; let _5_5 = "□ "; let _6_5 = "□ "; let _7_5 = "□ "; let _8_5 = "□ "; let _9_5 = "□ ";
let _0_6 = "□ "; let _1_6 = "□ "; let _2_6 = "□ "; let _3_6 = "□ "; let _4_6 = "□ "; let _5_6 = "□ "; let _6_6 = "□ "; let _7_6 = "□ "; let _8_6 = "□ "; let _9_6 = "□ ";  
let _0_7 = "□ "; let _1_7 = "□ "; let _2_7 = "□ "; let _3_7 = "□ "; let _4_7 = "□ "; let _5_7 = "□ "; let _6_7 = "□ "; let _7_7 = "□ "; let _8_7 = "□ "; let _9_7 = "□ "; 
let _0_8 = "□ "; let _1_8 = "□ "; let _2_8 = "□ "; let _3_8 = "□ "; let _4_8 = "□ "; let _5_8 = "□ "; let _6_8 = "□ "; let _7_8 = "□ "; let _8_8 = "□ "; let _9_8 = "□ "; 
let _0_9 = "□ "; let _1_9 = "□ "; let _2_9 = "□ "; let _3_9 = "□ "; let _4_9 = "□ "; let _5_9 = "□ "; let _6_9 = "□ "; let _7_9 = "□ "; let _8_9 = "□ "; let _9_9 = "□ "; 

class Turtle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.arrayPostion = [[x,y]]
        this.directionValue = 0
    }
 
    // forward method (default facing East)
    forward(steps){
        if(this.directionValue === 0){ //facing East    
            for(let i = 0; i < steps; i++){
            this.x += 1;
            this.arrayPostion.push([this.x,this.y])
            }
        }else if(this.directionValue === 1||this.directionValue === -3){//facing South
            for(let i = 0; i < steps; i++){
            this.y += 1;
            this.arrayPostion.push([this.x,this.y])
            }
        }else if(this.directionValue === 2||this.directionValue === -2){//facing West
            for(let i = 0; i < steps; i++){
            this.x =this.x - 1;
            this.arrayPostion.push([this.x,this.y])
            }
        }else if(this.directionValue === 3||this.directionValue === -1){//facing North
            for(let i = 0; i < steps; i++){
            this.y =this.y - 1;
            this.arrayPostion.push([this.x,this.y])
            }
        }    
        return this;
    }

    // right method
    right(){
        this.directionValue = this.directionValue + 1
        if(this.directionValue === 4){this.directionValue = 0}
        return this;
        }
   
    // left method
    left(){
        this.directionValue = this.directionValue - 1
        if(this.directionValue === -4){this.directionValue = 0}
        return this;
        }

    // allPoints method
    allPoints(){
        console.log("All coordinates:")
        console.log(this.arrayPostion)
        return this;
    }

    // print method
    print(){
        // draw diagram function for arrayPosition
        for(let element of this.arrayPostion){
            let str = "_" + element[0] + "_" + element[1]
            //Object.keys({_0_0})[0] returns variable name: "_0_0"
            
            //but doesn't work when using inside a for of loop, so I have to use if else statement.  
            
            //eg. arrGrid = [_0_0, _1_0, _3_0 ]
            
            //for(let element of arrGrid){console.log(Object.keys({element})[0])} 
            //returns only "element"
            
            if (str ===  Object.keys({_0_0})[0]){     
                _0_0 ="■ ";
            }else if(str ===  Object.keys({_1_0})[0]){
                _1_0 ="■ ";
            }else if(str ===  Object.keys({_2_0})[0]){
                _2_0 ="■ ";
            }else if(str ===  Object.keys({_3_0})[0]){
                _3_0 ="■ ";
            }else if(str ===  Object.keys({_4_0})[0]){
                _4_0 ="■ ";
            }else if(str ===  Object.keys({_5_0})[0]){
                _5_0 ="■ ";
            }else if(str ===  Object.keys({_6_0})[0]){
                _6_0 ="■ ";
            }else if(str ===  Object.keys({_7_0})[0]){
                _7_0 ="■ ";
            }else if(str ===  Object.keys({_8_0})[0]){
                _8_0 ="■ ";
            }else if(str ===  Object.keys({_9_0})[0]){
                _9_0 ="■ ";
            }else if(str ===  Object.keys({_0_1})[0]){
                _0_1 ="■ ";
            }else if(str ===  Object.keys({_1_1})[0]){
                _1_1 ="■ ";
            }else if(str ===  Object.keys({_2_1})[0]){
                _2_1 ="■ ";
            }else if(str ===  Object.keys({_3_1})[0]){
                _3_1 ="■ ";
            }else if(str ===  Object.keys({_4_1})[0]){
                _4_1 ="■ ";
            }else if(str ===  Object.keys({_5_1})[0]){
                _5_1 ="■ ";
            }else if(str ===  Object.keys({_6_1})[0]){
                _6_1 ="■ ";
            }else if(str ===  Object.keys({_7_1})[0]){
                _7_1 ="■ ";
            }else if(str ===  Object.keys({_8_1})[0]){
                _8_1 ="■ ";
            }else if(str ===  Object.keys({_9_1})[0]){
                _9_1 ="■ ";
            }else if(str ===  Object.keys({_0_2})[0]){
                _0_2 ="■ ";
            }else if(str ===  Object.keys({_1_2})[0]){
                _1_2 ="■ ";
            }else if(str ===  Object.keys({_2_2})[0]){
                _2_2 ="■ ";
            }else if(str ===  Object.keys({_3_2})[0]){
                _3_2 ="■ ";
            }else if(str ===  Object.keys({_4_2})[0]){
                _4_2 ="■ ";
            }else if(str ===  Object.keys({_5_2})[0]){
                _5_2 ="■ ";
            }else if(str ===  Object.keys({_6_2})[0]){
                _6_2 ="■ ";
            }else if(str ===  Object.keys({_7_2})[0]){
                _7_2 ="■ ";
            }else if(str ===  Object.keys({_8_2})[0]){
                _8_2 ="■ ";
            }else if(str ===  Object.keys({_9_2})[0]){
                _9_2 ="■ ";
            }else if(str ===  Object.keys({_0_3})[0]){
                _0_3 ="■ ";
            }else if(str ===  Object.keys({_1_3})[0]){
                _1_3 ="■ ";
            }else if(str ===  Object.keys({_2_3})[0]){
                _2_3 ="■ ";
            }else if(str ===  Object.keys({_3_3})[0]){
                _3_3 ="■ ";
            }else if(str ===  Object.keys({_4_3})[0]){
                _4_3 ="■ ";
            }else if(str ===  Object.keys({_5_3})[0]){
                _5_3 ="■ ";
            }else if(str ===  Object.keys({_6_3})[0]){
                _6_3 ="■ ";
            }else if(str ===  Object.keys({_7_3})[0]){
                _7_3 ="■ ";
            }else if(str ===  Object.keys({_8_3})[0]){
                _8_3 ="■ ";
            }else if(str ===  Object.keys({_9_3})[0]){
                _9_3 ="■ ";
            }else if(str ===  Object.keys({_0_4})[0]){
                _0_4 ="■ ";
            }else if(str ===  Object.keys({_1_4})[0]){
                _1_4 ="■ ";
            }else if(str ===  Object.keys({_2_4})[0]){
                _2_4 ="■ ";
            }else if(str ===  Object.keys({_3_4})[0]){
                _3_4 ="■ ";
            }else if(str ===  Object.keys({_4_4})[0]){
                _4_4 ="■ ";
            }else if(str ===  Object.keys({_5_4})[0]){
                _5_4 ="■ ";
            }else if(str ===  Object.keys({_6_4})[0]){
                _6_4 ="■ ";
            }else if(str ===  Object.keys({_7_4})[0]){
                _7_4 ="■ ";
            }else if(str ===  Object.keys({_8_4})[0]){
                _8_4 ="■ ";
            }else if(str ===  Object.keys({_9_4})[0]){
                _9_4 ="■ ";
            }else if(str ===  Object.keys({_0_5})[0]){
                _0_5 ="■ ";
            }else if(str ===  Object.keys({_1_5})[0]){
                _1_5 ="■ ";
            }else if(str ===  Object.keys({_2_5})[0]){
                _2_5 ="■ ";
            }else if(str ===  Object.keys({_3_5})[0]){
                _3_5 ="■ ";
            }else if(str ===  Object.keys({_4_5})[0]){
                _4_5 ="■ ";
            }else if(str ===  Object.keys({_5_5})[0]){
                _5_5 ="■ ";
            }else if(str ===  Object.keys({_6_5})[0]){
                _6_5 ="■ ";
            }else if(str ===  Object.keys({_7_5})[0]){
                _7_5 ="■ ";
            }else if(str ===  Object.keys({_8_5})[0]){
                _8_5 ="■ ";
            }else if(str ===  Object.keys({_9_5})[0]){
                _9_5 ="■ ";
            }else if(str ===  Object.keys({_0_6})[0]){
                _0_6 ="■ ";
            }else if(str ===  Object.keys({_1_6})[0]){
                _1_6 ="■ ";
            }else if(str ===  Object.keys({_2_6})[0]){
                _2_6 ="■ ";
            }else if(str ===  Object.keys({_3_6})[0]){
                _3_6 ="■ ";
            }else if(str ===  Object.keys({_4_6})[0]){
                _4_6 ="■ ";
            }else if(str ===  Object.keys({_5_6})[0]){
                _5_6 ="■ ";
            }else if(str ===  Object.keys({_6_6})[0]){
                _6_6 ="■ ";
            }else if(str ===  Object.keys({_7_6})[0]){
                _7_6 ="■ ";
            }else if(str ===  Object.keys({_8_6})[0]){
                _8_6 ="■ ";
            }else if(str ===  Object.keys({_9_6})[0]){
                _9_6 ="■ ";
            }else if(str ===  Object.keys({_0_7})[0]){
                _0_7 ="■ ";
            }else if(str ===  Object.keys({_1_7})[0]){
                _1_7 ="■ ";
            }else if(str ===  Object.keys({_2_7})[0]){
                _2_7 ="■ ";
            }else if(str ===  Object.keys({_3_7})[0]){
                _3_7 ="■ ";
            }else if(str ===  Object.keys({_4_7})[0]){
                _4_7 ="■ ";
            }else if(str ===  Object.keys({_5_7})[0]){
                _5_7 ="■ ";
            }else if(str ===  Object.keys({_6_7})[0]){
                _6_7 ="■ ";
            }else if(str ===  Object.keys({_7_7})[0]){
                _7_7 ="■ ";
            }else if(str ===  Object.keys({_8_7})[0]){
                _8_7 ="■ ";
            }else if(str ===  Object.keys({_9_7})[0]){
                _9_7 ="■ ";
            }else if(str ===  Object.keys({_0_8})[0]){
                _0_8 ="■ ";
            }else if(str ===  Object.keys({_1_8})[0]){
                _1_8 ="■ ";
            }else if(str ===  Object.keys({_2_8})[0]){
                _2_8 ="■ ";
            }else if(str ===  Object.keys({_3_8})[0]){
                _3_8 ="■ ";
            }else if(str ===  Object.keys({_4_8})[0]){
                _4_8 ="■ ";
            }else if(str ===  Object.keys({_5_8})[0]){
                _5_8 ="■ ";
            }else if(str ===  Object.keys({_6_8})[0]){
                _6_8 ="■ ";
            }else if(str ===  Object.keys({_7_8})[0]){
                _7_8 ="■ ";
            }else if(str ===  Object.keys({_8_8})[0]){
                _8_8 ="■ ";
            }else if(str ===  Object.keys({_9_8})[0]){
                _9_8 ="■ ";
            }else if(str ===  Object.keys({_0_9})[0]){
                _0_9 ="■ ";
            }else if(str ===  Object.keys({_1_9})[0]){
                _1_9 ="■ ";
            }else if(str ===  Object.keys({_2_9})[0]){
                _2_9 ="■ ";
            }else if(str ===  Object.keys({_3_9})[0]){
                _3_9 ="■ ";
            }else if(str ===  Object.keys({_4_9})[0]){
                _4_9 ="■ ";
            }else if(str ===  Object.keys({_5_9})[0]){
                _5_9 ="■ ";
            }else if(str ===  Object.keys({_6_9})[0]){
                _6_9 ="■ ";
            }else if(str ===  Object.keys({_7_9})[0]){
                _7_9 ="■ ";
            }else if(str ===  Object.keys({_8_9})[0]){
                _8_9 ="■ ";
            }else if(str ===  Object.keys({_9_9})[0]){
                _9_9 ="■ ";
            }             
        }

        let row0 =  _0_0 + _1_0 + _2_0 + _3_0 + _4_0 + _5_0 + _6_0 + _7_0 + _8_0 + _9_0 + "\n"
        let row1 =  _0_1 + _1_1 + _2_1 + _3_1 + _4_1 + _5_1 + _6_1 + _7_1 + _8_1 + _9_1 + "\n"
        let row2 =  _0_2 + _1_2 + _2_2 + _3_2 + _4_2 + _5_2 + _6_2 + _7_2 + _8_2 + _9_2 + "\n"
        let row3 =  _0_3 + _1_3 + _2_3 + _3_3 + _4_3 + _5_3 + _6_3 + _7_3 + _8_3 + _9_3 + "\n"
        let row4 =  _0_4 + _1_4 + _2_4 + _3_4 + _4_4 + _5_4 + _6_4 + _7_4 + _8_4 + _9_4 + "\n"
        let row5 =  _0_5 + _1_5 + _2_5 + _3_5 + _4_5 + _5_5 + _6_5 + _7_5 + _8_5 + _9_5 + "\n"
        let row6 =  _0_6 + _1_6 + _2_6 + _3_6 + _4_6 + _5_6 + _6_6 + _7_6 + _8_6 + _9_6 + "\n"
        let row7 =  _0_7 + _1_7 + _2_7 + _3_7 + _4_7 + _5_7 + _6_7 + _7_7 + _8_7 + _9_7 + "\n"
        let row8 =  _0_8 + _1_8 + _2_8 + _3_8 + _4_8 + _5_8 + _6_8 + _7_8 + _8_8 + _9_8 + "\n"
        let row9 =  _0_9 + _1_9 + _2_9 + _3_9 + _4_9 + _5_9 + _6_9 + _7_9 + _8_9 + _9_9 + "\n"
        let grid = row0 + row1 +row2+ row3 + row4 + row5 + row6 + row7 + row8 + row9;
        // console.log("coordinates on map:")
        // console.log(this.arrayPostion)
        console.log("All path on this 10 x 10 diagram:")
        console.log(grid)
    }
    
}
   
//The Turtle
console.log("----No1. The Turtle")
let turtle1 = new Turtle(0,0).allPoints()
let turtle2 = new Turtle(2,3).allPoints()


//Moving the turtle
console.log("----No2. Moving the turtle")
let turtle3 = new Turtle(0,0).forward(3).allPoints()


//Turning the turtle
console.log("----No3. Turning the turtle")
let turtle4 = new Turtle(0, 0).forward(3).right().forward(2).allPoints()
let turtle5 = new Turtle(0, 4).forward(3).left().forward(3).allPoints()

//All Points
console.log("No 4---All Points")
const flash = new Turtle(0, 4).forward(3).left().forward(3).allPoints()

//Print example
console.log("No 5---Print")
new Turtle(0, 4)
.forward(3)
.left()
.forward(3)
.right()
.forward(5)
.right()
.forward(8)
.right()
.forward(5)
.right()
.forward(3)
.left()
.forward(3)
.allPoints()
.print();



