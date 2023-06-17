//Get Elements
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const showLoginButton = document.getElementById('show-login');
const showSignupButton = document.getElementById('show-signup');
const signupContainer = document.querySelector('.form-container.signup');
const loginContainer = document.querySelector('.form-container.login');
const landingContainer = document.querySelector('.landing');

//Function to handle SignUp
function handleSignup(event){
    event.preventDefault(); // prevents the default behavior of submit button which is to refresh the browser

    //Get Input values
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    //create an object to store values
    let userData = {
        name:name,
        email:email,
        password:password
    } 

    // store in local storage 
    localStorage.setItem(email, JSON.stringify(userData));

    //alert success
    alert('signup successful, login now!')

    // clear the input fields
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
}


//function to handle login
function handleLogin(event){
    event.preventDefault(); // prevents the default behavior of submit button which is to refresh the browser

    //Get Input value
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    
    //get element from local storage
    let userData = JSON.parse(localStorage.getItem(email));

    if(userData && userData.password === password){
        showLandingPage()
    }else{
        alert('invalid email or password')
    }

    //clear input values
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

// show sign up page 
function showSignupPage() {
    signupContainer.classList.remove('hidden');
    loginContainer.classList.add('hidden');
    landingContainer.classList.add('hidden');
}

// show login page 
function showLoginPage(){
    signupContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
    landingContainer.classList.add('hidden');
}

// show landing page
function showLandingPage(){
    signupContainer.classList.add('hidden');
    loginContainer.classList.add('hidden');
    landingContainer.classList.remove('hidden');
}


//attach to event listeners
signupForm.addEventListener('submit', handleSignup);
loginForm.addEventListener('submit', handleLogin);
showSignupButton.addEventListener('click', showSignupPage);
showLoginButton.addEventListener('click', showLoginPage);