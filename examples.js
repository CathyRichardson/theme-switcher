// let instructionsNode = document.getElementById("instructions");
// console.log(instructionsNode)

// let buttons = document.getElementsByTagName("button")
// console.log(buttons)

// let instructions = document.querySelector("#instructions")
// instructions.innerText = "Choose a theme:"
// instructions.className = "new-class"
// console.log(instructions)

// let fbButton = document.querySelector(".facebookbutton")
// fbButton.classList.add("new-class")
// fbButton.style.color = "green"
// console.log(fbButton.classList)
// console.log(fbButton.className)
// console.log(fbButton)

// let buttons = document.querySelectorAll('button')
// console.log(buttons)

// let buttonsbyTagName = document.getElementsByTagName('button')
// console.log(buttonsbyTagName)

function submit() {
    alert('Post has been submitted!')
  }
  
  let submitBtn = document.querySelector(".submitBtn")
  submitBtn.addEventListener("click", submit);
  // submitBtn.addEventListener("mouseout", submit);
  
  // let inputValue = '';
  // document.getElementById("myInput")
  //  addEventListener("change", function(event){
  //     inputValue = event.target.value 
  //     console.log(inputValue)
  // })
  
  
  //Bubbling
  // document.querySelector("header").addEventListener("click", () => alert('clicked the header'))
  
  // fbButton.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //     alert('clicked the fb button')
  // })
  
  fbButton.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault(0);
      console.log('clicked the fb button')
  })
  
  
  // Node methods creatElement
  // let myDiv = document.createElement('div');
  // // let ourText = document.createTextNode('My div text');
  // myDiv.innerText ='My div text';
  // console.log(myDiv);
  
  // document.querySelector('main').appendChild(myDiv);
  // myDiv.remove();