const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;

    console.log(event);
    console.log("Login Button Clicked");
    
    localStorage.setItem(USERNAME_KEY, userName);
    
    PaintGreeting(userName);
}

function onLogoutSubmit(evnet) {
    localStorage.removeItem(USERNAME_KEY);
    console.log("Logout");
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.add(HIDDEN_CLASSNAME);
}

function PaintGreeting(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`;
    logout.classList.remove(HIDDEN_CLASSNAME);
    logout.addEventListener("click", onLogoutSubmit);
}

    const StorageUserName = localStorage.getItem(USERNAME_KEY);

    if(StorageUserName === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }
    else {
        PaintGreeting(StorageUserName);
    }
    


