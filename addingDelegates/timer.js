const firebaseConfig = {
    apiKey: "AIzaSyDYBY68V-yCpe7UUtFmBh2DEW4YokR6bpQ",
    authDomain: "mun2024-c700e.firebaseapp.com",
    projectId: "mun2024-c700e",
    storageBucket: "mun2024-c700e.appspot.com",
    messagingSenderId: "1065660880106",
    appId: "1:1065660880106:web:2fc6594508ff20bd01b393",
    measurementId: "G-RPZMNSPQ6M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();





var countdownSeconds = 0;
var originalSeconds = 0;
var interval;

// Get references to HTML elements by declasring the ids as elements
const inputTimeField = document.getElementById("inputTime");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const endButton = document.getElementById("endButton");
const countdownDisplay = document.getElementById("countdown");
const originalTimeDisplay = document.getElementById("originalTime");

// Function to update the countdown display
function updateCountdown() {
    let minutes = Math.floor(countdownSeconds / 60);
    let seconds = countdownSeconds % 60;

    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    countdownDisplay.innerHTML = formattedMinutes + ":" + formattedSeconds;

    // Calculate original minutes and seconds
    var originalMinutes = Math.floor(originalSeconds / 60);
    var originalSecs = originalSeconds % 60;

    var formattedOriginalMinutes =
        originalMinutes < 10 ? "0" + originalMinutes : originalMinutes;
    var formattedOriginalSecs =
        originalSecs < 10 ? "0" + originalSecs : originalSecs;

    originalTimeDisplay.innerHTML =
        formattedOriginalMinutes + ":" + formattedOriginalSecs;

    if (countdownSeconds === 0) {
        clearInterval(interval);
        alert("Time is up!");
        document.getElementById("inputTime").value="";
    } else {
        countdownSeconds--;
    }
}

// Function to start the countdown
function startCountdown() {
    var inputTime = parseInt(inputTimeField.value, 10);
    if (!isNaN(inputTime) && inputTime > 0) {
        countdownSeconds = inputTime;
        originalSeconds = inputTime; // Store the original time
        updateCountdown();
        interval = setInterval(updateCountdown, 1000);
    }
}

// Function to pause the countdown
function pauseCountdown() {
    clearInterval(interval);
}

// Function to end the countdown
function endCountdown() {
    clearInterval(interval);
    countdownSeconds = 0;
    originalSeconds = 0;
    updateCountdown();
}

// Attach event listeners to buttons
startButton.addEventListener("click", startCountdown);
pauseButton.addEventListener("click", pauseCountdown);
endButton.addEventListener("click", endCountdown);



function SetAgenda(){
    var agendabox=inputAgenda.value;
    var displayagenda=document.querySelector('.agendadisplay').innerHTML=`Agenda:${agendabox}`;
}
      
function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}







//Speakers List Code

let counter1 = 0;
let maxSpeakers1 = document.querySelector('.maxSpeakers').value;
let tally1 = 0;
let remaing;

//need to add a change if the number for max speakers gets chagned the software should allow it 
//also need to link this entire thing to a list of speakers and with thier respected countries so points can be alloted accoridngly
//we can probably enter the countries to a for loop of a spreadsheet then save it in local storage and into an array
function addNewCountry() {
    const countryInput = document.querySelector('.countryAdd');
    const countryName = countryInput.value.trim();
    if (counter1 == 0){
        maxSpeakers1 = document.querySelector('.maxSpeakers').value;
        counter1++;
    }
    
    

    if (countryName !== "" && remaing != 0) {
        // Append the new list item to the ul
        var countryList = document.getElementById('countryList');
        console.log(maxSpeakers1);

        // Create a new list item
        var newCountry = document.createElement('li');
        newCountry.textContent = countryName;

        const removeButton = document.createElement('button');
        removeButton.textContent = "X";
        removeButton.onclick = function () {
            countryList.removeChild(newCountry);
            let remainingSpeaker = parseInt(document.querySelector('.remainingSpeakers').value);
            document.querySelector('.remainingSpeakers').value = remainingSpeaker + 1;
        }
        newCountry.appendChild(removeButton);

        countryList.appendChild(newCountry);

        // Clear the input field
        countryInput.value = '';
        //Increment
        tally1++;
        remaing = document.querySelector('.remainingSpeakers').value = maxSpeakers-tally;
        console.log(maxSpeakers1);
    }
    if(remaing == 0){
        document.querySelector('.remainingSpeakers').value = 0;
        window.alert('The Maximmum amount of people in the Speakers list has been reached');
    }    
    
}

