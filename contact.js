firstName = document.getElementById("firstName");
lastName = document.getElementById("lastName");
email = document.getElementById("email");
message = document.getElementById("message");
sendBtn = document.querySelector(".sendBtn");

fullAlert = document.querySelector(".full-alert");
fullString = document.querySelector(".full-string");
emailString = document.querySelector(".email-string");
nameAlert = document.querySelector(".name-alert");
emailAlert = document.querySelector(".email-alert");
messageAlert = document.querySelector(".message-alert");

successAlert = document.querySelector(".success-alert");
failAlert = document.querySelector(".fail-alert");

fullAlertString = "Form submission failed. Review the following information: "
review = [];

function checkName() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    firstNameValue == "" ? firstName.style.backgroundColor = "#ffeae8" : firstName.style.backgroundColor = "white";
    lastNameValue == "" ? lastName.style.backgroundColor = "#ffeae8" : lastName.style.backgroundColor = "white";
    if (firstNameValue === "" || lastNameValue === "") {
        nameAlert.style.display = "flex";
        if (!("Name" in review)) {
            review.push("Name");
        }
        return false;
    }
    nameAlert.style.display = "none";
    return true;
}

function checkEmail() {
    let emailValue = email.value.trim();
    let atPos = emailValue.indexOf("@");
    let dotPos = emailValue.lastIndexOf(".");
    if (emailValue === "") {
        emailString.innerText = "Email is required."
        emailAlert.style.display = "flex";
        if (!("Email" in review)) {
            review.push("Email");
        }
        email.style.backgroundColor = "#ffeae8";
        return false;
    }
    if (!(atPos > 0 && dotPos > atPos + 1 && dotPos < emailValue.length - 1)) {
        emailString.innerText = "Email is not valid. Email addresses should follow the format user@domain.com."
        emailAlert.style.display = "flex";
        if (!("Email" in review)) {
            review.push("Email");
        }
        email.style.backgroundColor = "#ffeae8";
        return false;
    }
    emailAlert.style.display = "none";
    email.style.backgroundColor = "white";
    return true;
}

function checkMessage() {
    let messageValue = message.value.trim();
    if (messageValue === "") {
        messageAlert.style.display = "flex";
        if (!("Message" in review)) {
            review.push("Message");
        }
        message.style.backgroundColor = "#ffeae8";
        return false;
    }
    messageAlert.style.display = "none";
    message.style.backgroundColor = "white";
    return true;
}

sendBtn.addEventListener("click", () => {
    checkName();
    checkEmail();
    checkMessage();
    if (review.length > 0) {
        fullAlert.style.display = "flex";
        fullString.innerText = fullAlertString + review.join(", ") + ".";
        review = [];
    }
    else {
        fullAlert.style.display = "none";
        sendMail();
    }
});

function sendMail() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let messageValue = message.value.trim();

    emailjs.init("Aavtdi8KNcns6SiNT");

    const formData = {
        name: firstNameValue + " " + lastNameValue,
        email: emailValue,
        message: messageValue,
    };

    emailjs.send("service_virajp4", "template_default", formData) // Replace with your service and template IDs
        .then(function (response) {
            successAlert.style.display = "flex";
            resetVals();
        }, function (error) {
            failAlert.style.display = "flex";
            resetVals();
        });
}

function resetVals() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
}