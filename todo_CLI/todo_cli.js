const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout 
})

let welcomeMenu = 
"\n\n😄Welcome to Todo List Application😄\n" + "------------------------------------"

let functionMenu = 
"\nPlease choose one of the following functions:\n\n" +  "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit\n\n"

// arrar to record the todo list
let arrTodoList = []

//function to turn arrary into a list on screen
let todoListContentMenu = function(){
for (let i = 0; i < arrTodoList.length; i++){
   console.log("\n" + i + arrTodoList[i]);
}
return 
}

console.log (welcomeMenu)

function view() {
  if(arrTodoList.length === 0){
    console.log("List is empty...\n")
    return main()
  }else{
  todoListContentMenu()
  
  return main()
  }
}

function newItem (){
  rl.question("\nwhat?\n \n", (answer2) => {
    arrTodoList.push(`[]${answer2}`)
     return main()
    })
}

let completeAnswer 
function complete (){
  console.log(`\nCompleted \"${arrTodoList[completeAnswer].substring(2)}\"`)
  arrTodoList[completeAnswer] = arrTodoList[completeAnswer].replace("[]", "[✓]")
  return main()
}

let deleteAnswer 
function deleteItem (){
  if(arrTodoList[deleteAnswer][1] === "]"){
  console.log(`\nDeleted \"${arrTodoList[deleteAnswer].substring(2)}\"`)
  }else{
  console.log(`\nDeleted \"${arrTodoList[deleteAnswer].substring(3)}\"`)
  }
  arrTodoList.splice(deleteAnswer,1);
  return main()
}

function quit (){
  console.log ("\nSee you soon! 😄")
  rl.close() 
}


function main(){
  rl.question(functionMenu, (answer) => {
    if(answer==='v') {
      view();
    }else if(answer==='n'){
      newItem();
    }else if(answer[0]==='c'){
      completeAnswer = answer[1]
      complete ();
    }else if(answer[0]==='d'){
      deleteAnswer = answer[1]
      deleteItem ();
    }else if(answer==='q'){
      quit ();
    }
  })
}

main()


