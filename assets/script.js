// **********#1 Javascript Code - Timer Countdown**********
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 4;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/image_1.jpg");
  mainEl.appendChild(imgEl);
}
setTime();

// **********#2 Javascript Code - Dark to Light Mode**********
// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

// **************#3 Javascript Code - Contact Me Information********
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse);

// *************#4 Javascript Code - Event Bubbling Propagation********
var outer = document.querySelector("#outer-divButton");
var inner = document.querySelector("#inner-divButton");
var center = document.querySelector("#center-divButton");

function changeWhite (event) {
    event.stopPropagation();
    event.currentTarget.setAttribute("style", "background-color: white");
}

function changeAquaMarine (event) {
    event.stopPropagation();
    event.currentTarget.setAttribute("style", "background-color: aquamarine");
}

function changePink (event) {
    event.stopPropagation();
    event.currentTarget.setAttribute("style", "background-color: pink");
}

outer.addEventListener("click", changeWhite);
inner.addEventListener("click", changeAquaMarine);
center.addEventListener("click", changePink);