

// greet function
function contact() {
    // grab the greet paragraph
    let contactParagraph = document.getElementById("contact");

    // get values from form
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // show results
    if (fname != "") {
        contactParagraph.innerHTML = "thank you, " + fname + ", for your response!";
    } else {
        contactParagraph.innerHTML = "<i>FIRST NAME IS REQUIRED</i>"
    }

    document.getElementById("contact-form").reset();
}