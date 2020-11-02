console.log(document)
let down = document.getElementById('down')
console.log(down.innerHTML)
//down.innerHTML = "Down"
console.log(down.innerHTML)
const playingField = document.getElementById('playing-field').innerHTML
console.log(playingField)
const ball = document.getElementById('block')
//ball.style.backgroundColor = "yellow"


  
  const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
header.setAttribute("class", "my-header")
document.body.appendChild(header)




const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: asaid"
subHeader.style.color = 
subHeader.setAttribute("class", "subHeader")
document.body.appendChild(subHeader)


const moveRight = function(){
    let current = document.getElementById("block").style.left
    if(current == "")
        current = 0
    const final = parseInt(current) + 15
    document.getElementById("block").style.left = final+"px"
  }
  const moveLeft = function(){
    let current = document.getElementById("block").style.left
    if(current == "")
        current = 0
    const final = parseInt(current) - 15
    document.getElementById("block").style.left = final+"px"
  }
  const moveDown = function(){
    let current = document.getElementById("block").style.top
    if(current == "")
        current = 0
    const final = parseInt(current) + 15
    document.getElementById("block").style.top = final+"px"
  }
  const moveUp = function(){
    let current = document.getElementById("block").style.top
    if(current == "")
        current = 0
    const final = parseInt(current) - 15
    document.getElementById("block").style.top = final+"px"
  }
  const upArrow = document.getElementById('up')
  const downArrow = document.getElementById('down')
  const leftArrow = document.getElementById('left')
  const rightArrow = document.getElementById('right')

  upArrow.onclick = function(){moveUp()}
  downArrow.onclick = function(){moveDown()}
  leftArrow.onclick = function(){moveLeft()}
  rightArrow.onclick = function(){moveRight()}

  