console.log("This is my Index");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#success').hide();
$('#failure').hide();

name.addEventListener('blur', () => {
    console.log("name is blurred");
    //validate name here
    let regex = /^[A-Z]([0-9a-zA-z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
    }
})
email.addEventListener('blur', () => {
    console.log("email is blurred");
    //validate email here
    let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone number is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone number  is not valid');
        phone.classList.add('is-invalid');
        validphone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("You clicked on submit");
    console.log("validEmail,validUser,validPhone")
    //submit your form here

    if (validEmail && validPhone && validUser) {
        console.log('Phone, email and user are valid. Submitting the form');
        
        let failure = document.getElementById('failure');
   
    let success = document.getElementById('success');
    success.classList.add('show');
    // failure.classList.remove('show');
    $('failure').hide();
    $('#success').show();
    setTimeout(() => {
        
    },1000);
}

    else {
        console.log('One of my Phone, email and user are valid. Hence not submitting the form.Please correct the errors and try again');
  
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // // success.classList.remove('show');
        // $('success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }
})