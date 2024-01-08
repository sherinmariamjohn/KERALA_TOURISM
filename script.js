
function validateName(){
    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')
    
    // message.style.display = "none"
    if(name.value.trim() == ''){
        alert('Please enter your username')
        nameError.innerHTML = 'Enter Your Name'
        Message.style.display = "block"
        return false;
        
    }else if(name.value.length<6){
        nameError.innerHTML = 'username must be less than 6 letters'
        
        return false;
    }
    else{
        nameError.innerHTML =''
       
        return true;
        
    }
}

function validateEmail(){
    let emailError = document.getElementById('email-error')
    let email = document.getElementById('email')
    
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    
    if(email.value.trim()==''){
        alert('Please enter your email')
        emailError.innerHTML = 'Please enter a valid email'
        return false
    }else if( !email.value.match(regEx)){
        emailError.innerHTML = 'Please enter a valid email'
        return false
    
    }else{
        emailError.innerHTML='You have entered a valid email'
        return true
    }
}

function validatePassword(){
    let password = document.getElementById('password')
    let passwordError = document.getElementById('password-error')
    console.log(password)
    

    let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    
    if(password.value.trim()==''){
        alert('Please enter your password')
        passwordError.innerHTML = 'Password should be atleast 8 characters,must be included uppercase,lowercase,and 3 numeric values'
        return false

    }else if(password.value.length<8){
    passwordError.innerHTML = 'Not Matched'
    return false

   }else{
    passwordError.innerHTML = 'Strong Password'
    return true
   }
}

function validateRepeat(){
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeat')
    let repeatError = document.getElementById('repeat-error')
    

    if(password.value != repeatPassword.value){
        
        repeatError.innerHTML = 'Password Mismatch'
        return false

    }else {
        repeatError.innerHTML = 'Password Matched'
        return true
       
    }
}
function validateSignup(){
   let signup = document.getElementById('signup')
   alert('Congratulations, Your account has been successfully created')
   }
 



let email = document.getElementById('email');
let password = document.getElementById('password');
let loginEmail = document.getElementById('loginEmail');

const isEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const isStrength = /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/;

loginEmail.addEventListener('click', () => {
    if (email.value.trim() === '') {
        alert('Please enter email');
    } else if (password.value.trim() === '') {
        alert('Please enter password');
    } else if (!isEmail.test(email.value.trim())) {
        alert('Email must be a lowercase!!');
    } else if (!isStrength.test(password.value.trim())) {
        alert('Password must contains one uppercase, one lowercase, 1 digits, and length atleast 6 characters long');
    } else {
        alert('Login Successfull!!!');
    }
});















   


