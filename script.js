const happyBtn = document.querySelector("#btn-smile");
const sadBtn = document.querySelector("#btn-sad");
const happyCounterText = document.getElementById("happy-counter");
const sadCounterText = document.getElementById("sad-counter");
const happyTimes = document.getElementById("happy-times");
const sadTimes = document.getElementById("sad-times");
const feelText = document.getElementById("feel");
const reset = document.getElementById("reset");

//let happyCounter = Number(localStorage.getItem("mood.happyCounter"));
//let sadCounter = Number(localStorage.getItem("mood.sadCounter"));

let mood = JSON.parse(localStorage.getItem("mood")) || {
  happyCounter: 0,
  sadCounter: 0,
};

let { happyCounter, sadCounter } = mood;

function timeOrTimes(num) {
  if (num > 1) return "times";
  else {
    return "time";
  }
}

console.log(timeOrTimes(happyCounter));

function update() {
  if (happyCounter > 0) {
    happyCounterText.innerText = happyCounter.toString();
    happyTimes.textContent =
      happyCounterText.textContent + " " + timeOrTimes(happyCounter);
  } else happyTimes.textContent = "";

  if (sadCounter > 0) {
    sadCounterText.innerText = sadCounter.toString();
    sadTimes.textContent =
      sadCounterText.textContent + " " + timeOrTimes(sadCounter);
  } else sadTimes.textContent = "";

  if (happyCounter > 0 || sadCounter > 0) {
    if (happyCounter > sadCounter) {
      feelText.innerText = "Wee :D";
    } else if (happyCounter == sadCounter) feelText.innerText = "Not sure";
    else feelText.innerText = "Why so sad? :(";
  } else feelText.textContent = "";

  //localStorage.setItem("mood", happyCounter.toString());
  //localStorage.setItem("sad-counter", sadCounter.toString());
  localStorage.setItem("mood", JSON.stringify({ happyCounter, sadCounter }));
}

happyBtn.addEventListener("click", () => {
  //happyCounterText.innerText = ++happyCounter;
  happyCounter++;
  update();
});

sadBtn.addEventListener("click", () => {
  //sadCounterText.innerText = ++sadCounter;
  sadCounter++;
  update();
});

reset.addEventListener("click", () => {
  happyCounter = 0;
  sadCounter = 0;
  update();
});

update();
