// step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: Get the email address inside the email input field
    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: get the password

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    // Danger: Do Not Verify email password on client side

    //step-4: verify email and password

    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid User')
    }

})