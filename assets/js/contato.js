import requestPost from "./apiservice.js";

function getContact(event){
    event.preventDefault()
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        firstName: firstName,
        lastName:lastName,
        email:email,
        message:message,
    }

    requestPost('http//localhost8000.com', data) // Function to request type post 

    form.reset() // Reset Form
}

const form = document.getElementById('form-contact');
form.addEventListener('submit', getContact);
