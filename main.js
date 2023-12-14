<<<<<<< HEAD
// Variables
const luckyCookie = document.querySelector("img")
const mainScreen = document.querySelector("main")
const secondScreen = document.querySelector(".second-screen")
const resetButton = document.querySelector("button")
const cookieMessages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Delight the world with compassion, kindness and grace.",
  "Experience is what you have left when everything else gone."
]
const fortuneMessage = document.querySelector(".second-screen p")
const backgroundGradient = document.body
backgroundGradient.style.backgroundImage = "linear-gradient(260deg, var(--bg-gradient-first-color) 0%, var(--bg-gradient-second-color) 100%)"

// Events
luckyCookie.addEventListener('click', toggleCookie)
resetButton.addEventListener('click', toggleCookie)
luckyCookie.addEventListener('keydown', keyEnter)
resetButton.addEventListener('keydown', keyEnter)

// Callback functions
function toggleCookie() {
  mainScreen.classList.toggle("hide")
  secondScreen.classList.toggle("hide")
  
  let randomNumber = Math.random()
  let randomIndexNumber = randomNumber * cookieMessages.length
  let randomIndex = Math.floor(randomIndexNumber)
  // let randomIndex = Math.floor(Math.random() * cookieMessages.length)
  
  fortuneMessage.innerHTML = cookieMessages[randomIndex]

  // console.log(randomNumber)
  // console.log(cookieMessages.length)
  // console.log(randomIndexNumber)
  // console.log(randomIndex)
  // console.log(cookieMessages[randomIndex])

  // Background Changing
  if ( backgroundGradient.style.backgroundImage == "linear-gradient(260deg, var(--bg-gradient-first-color) 0%, var(--bg-gradient-second-color) 100%)") {
    backgroundGradient.style.backgroundImage = "linear-gradient(100deg, var(--bg-gradient-second-color), #ffcc00)"
  } else if (backgroundGradient.style.backgroundImage == "linear-gradient(100deg, var(--bg-gradient-second-color), #ffcc00)"){
    backgroundGradient.style.backgroundImage = "linear-gradient(260deg, #ff9900 0%, var(--bg-gradient-second-color) 100%)"
  } else if (backgroundGradient.style.backgroundImage == "linear-gradient(260deg, #ff9900 0%, var(--bg-gradient-second-color) 100%)"){
    backgroundGradient.style.backgroundImage = "linear-gradient(to bottom, #ffcc00, #ff9700)"
  } else {
    backgroundGradient.style.backgroundImage = "linear-gradient(260deg, var(--bg-gradient-first-color) 0%, var(--bg-gradient-second-color) 100%)"
  }
}

function keyEnter(event) {
  event.preventDefault()
  console.log(event.key)
  if (event.key == "Enter") {
    toggleCookie()
  }
  // Por que quando é <button> o Enter não faz o .toggle da função callback??? Porque estava fazendo submit e bugando a aplicação -> .preventDefault()
}


=======
// Variables
const luckyCookie = document.querySelector("img")
const mainScreen = document.querySelector("main")
const secondScreen = document.querySelector(".second-screen")
const resetButton = document.querySelector("button")
const cookieMessages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Delight the world with compassion, kindness and grace.",
  "Experience is what you have left when everything else gone."
]
const fortuneMessage = document.querySelector(".second-screen p")
const backgroundGradient = document.body
backgroundGradient.style.backgroundImage = "linear-gradient(260deg, var(--bg-gradient-first-color) 0%, var(--bg-gradient-second-color) 100%)"

// Events
luckyCookie.addEventListener('click', toggleCookie)
resetButton.addEventListener('click', toggleCookie)
luckyCookie.addEventListener('keydown', keyEnter)
resetButton.addEventListener('keydown', keyEnter)

// Callback functions
function toggleCookie() {
  mainScreen.classList.toggle("hide")
  secondScreen.classList.toggle("hide")
  
  let randomNumber = Math.random()
  let randomIndexNumber = randomNumber * cookieMessages.length
  let randomIndex = Math.floor(randomIndexNumber)
  // let randomIndex = Math.floor(Math.random() * cookieMessages.length)
  
  fortuneMessage.innerHTML = cookieMessages[randomIndex]

  // console.log(randomNumber)
  // console.log(cookieMessages.length)
  // console.log(randomIndexNumber)
  // console.log(randomIndex)
  // console.log(cookieMessages[randomIndex])

  // Background Changing
  if ( backgroundGradient.style.backgroundImage == "linear-gradient(260deg, var(--bg-gradient-first-color) 0%, var(--bg-gradient-second-color) 100%)") {
    backgroundGradient.style.backgroundImage = "linear-gradient(100deg, var(--bg-gradient-second-color), #ffcc00)"
  } else if (backgroundGradient.style.backgroundImage == "linear-gradient(100deg, var(--bg-gradient-second-color), #ffcc00)"){
    backgroundGradient.style.backgroundImage = "linear-gradient(260deg, #ff9900 0%, var(--bg-gradient-second-color) 100%)"
  } else if (backgroundGradient.style.backgroundImage == "linear-gradient(260deg, #ff9900 0%, var(--bg-gradient-second-color) 100%)"){
    backgroundGradient.style.backgroundImage = "linear-gradient(to bottom, #ffcc00, #ff9700)"
  } else {
    backgroundGradient.style.backgroundImage = "linear-gradient(260deg, var(--bg-gradient-first-color) 0%, var(--bg-gradient-second-color) 100%)"
  }
}

function keyEnter(event) {
  event.preventDefault()
  console.log(event.key)
  if (event.key == "Enter") {
    toggleCookie()
  }
  // Por que quando é <button> o Enter não faz o .toggle da função callback??? Porque estava fazendo submit e bugando a aplicação -> .preventDefault()
}


>>>>>>> origin/main
