let fname = "player";

// greet function
function greet() {
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values from form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // show results
    greetParagraph.innerHTML = "hey " + age + " year old " + fname + " " + lname + "!";
}

// trivia function
function trivia() {

    // grab the trivia paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    // get the checked values
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // determine the answer
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. best type of chocolate though!";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. ew rotten tuna!";
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }

}

// lie function
function lie() {

    // grab the lie paragraph
    let lieAnswer = document.getElementById("lie-answer");

    // get the checked values
    let bonesSelected = document.getElementById("bones").checked;
    let brotherSelected = document.getElementById("brother").checked;
    let dogSelected = document.getElementById("dog").checked;

    // determine the answer
    if (bonesSelected) {
        lieAnswer.innerHTML = fname + ", you are wrong. be more careful than me!";
    } else if (brotherSelected) {
        lieAnswer.innerHTML = fname + ", you are wrong. his name is Jayesh!";
    } else if (dogSelected) {
        lieAnswer.innerHTML = fname + ", you are correct!";
    }

}

// truth function
function truth() {

    // grab the lie paragraph
    let truthAnswer = document.getElementById("truth-answer");

    // get the checked values
    let skiingSelected = document.getElementById("skiing").checked;
    let rockSelected = document.getElementById("rock").checked;
    let sailingSelected = document.getElementById("sailing").checked;

    // determine the answer
    if (skiingSelected && sailingSelected && !rockSelected) {
        truthAnswer.innerHTML = fname + ", you are correct!"
    } else if (skiingSelected || sailingSelected) {
        truthAnswer.innerHTML = fname + ", you are close! try again!"
    } else {
        truthAnswer.innerHTML = fname + ", you are wrong. try again!"
    }

}
