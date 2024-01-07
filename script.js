let registerbtn = document.querySelector(".register");
let loginbtn = document.querySelector(".login");
let cpass = document.querySelector(".cpass");
let authbtn = document.querySelector(".btnAuth");

const activateRegister = () => {
    loginbtn.classList.remove("active") ;
    registerbtn.classList.add("active") ;
    cpass.style.display = "block";
    authbtn.innerText = "Register";
}
const activateLogin = () => {
    registerbtn.classList.remove("active") ;
    loginbtn.classList.add("active") ;
    cpass.style.display = "none";
    authbtn.innerText = "Login";
}
