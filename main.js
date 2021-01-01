// ref to name input
const nameInput = document.querySelector('#name');
// ref to msg heading
const msgOutput = document.querySelector('#msg');

// to read name and to greet user
nameInput.addEventListener("input", function(e)) {
    const message = `Welcome ${e.target.value.toUpperCase()} !
    Let's see some facts about your birthday!`;
    msgOutput = innerHTML = message;
}