// 1. generate word from array?




// let hangManImg = document.querySelector(".img")



let words = ["APPLE", "CAR", "COMPUTER", "CODECORE"];

let word = words[Math.floor(Math.random() * words.length)];
console.log(word)

// let word = "HELLOW"
// console.log(word)
// // -------------- entered word --------------
// document.createElement('h1')


// box = document.createElement('div')
//     box.style.backgroundColor = 'orange'
//     box.innerHTML = '<h1> H </h1>'
//     let checkbox = document.querySelector('.checkbox')
//     checkbox.appendChild(box)


for(let i = 0; i<word.length; i++){
    let box = document.createElement('h1')
    box.classList.add('box')
    box.style.backgroundColor = 'orange'
    box.innerText = "_"
    let checkbox = document.querySelector('.checkbox')
    checkbox.appendChild(box)
}




// //  ---------------


let kmark = 0
let winmark = 0

const allLetterButton = document.querySelectorAll(".button")
allLetterButton.forEach(letterNode => {
    letterNode.addEventListener("click", event =>{
        letterNode.style.backgroundColor = 'red';
        setTimeout(function(){
            letterNode.style.backgroundColor = '';
        }, 300)
        let pressedLetter = letterNode.innerText


        let mark = 0
        let chance = 5 - kmark

        for(let i = 0; i<word.length; i++) {
            let checkbox = document.querySelector('.checkbox')
                let box = checkbox.children[i]


            if (pressedLetter == word[i]){
                
                if(box.innerText==word[i]){
                    
                }else{

                box.innerText = word[i]

                
                mark ++
                winmark ++
                console.log("winmark")
                console.log(winmark)
                // alert("Right Guess");
        if (winmark ===word.length){
            let winSound = new Audio("sounds/win.mp3");
            winSound.play();
            alert("u win")
          }
                return(i)
                }
            } 
        }

        let img = document.querySelector("img")

        if (mark ===0){
            kmark ++
            console.log("kmark")
        console.log(kmark)
           
            alert("No Match " + chance + " chances left");
            

            let noPhoto = "asset/gallows" + kmark + ".jpg"
            img.setAttribute('src', noPhoto)

            if (kmark === 6){
                let loseSound = new Audio("sounds/lose.mp3");
                loseSound.play();
                alert("GameOver the right word is " + word);
                // window.location.reload();
                return
            }
        }

   

        let check = 0
        for (let i = 0; i<word.length; i++){
            let box = checkbox.children[i]
            if(box.innerText==word[i]){
            check ++
            }
        }
    

    })
})
 