

// greet function
function contact() {
    // grab the greet paragraph
    let contactParagraph = document.getElementById("contact");

    // get values from form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // show results
    contactParagraph.innerHTML = "thank you, " + fname + ", for your response!";

    document.getElementById("contact-form").reset();
}