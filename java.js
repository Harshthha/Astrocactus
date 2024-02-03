const sign_in_btn=document.querySelector("#sign_in_btn");
const sign_up_btn=document.querySelector("#sign_up_btn");
const container=document.querySelector(".c");
const sign_in_btn2=document.querySelector("#sign_in_btn2");
const sign_up_btn2=document.querySelector("#sign_up_btn2");

sign_up_btn.addEventListener("click",() =>{
    container.classList.add("sign_up_mode");
});

sign_in_btn.addEventListener("click",() =>{
    container.classList.remove("sign_up_mode");
});

sign_up_btn2.addEventListener("click",() =>{
    container.classList.add("sign_up_mode2");
}); 

sign_in_btn2.addEventListener("click",() =>{
    container.classList.remove("sign_up_mode2");
});
function validcheck(){
    var isValidEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value);
    var isNotEmptyPassword = document.getElementById("pass1").value!=="";
    var isPasswordEqual = document.getElementById("pass1").value===document.getElementById("pass2").value;
    var isNotEmptyusername = document.getElementById("Username").value!=='';
    var isNotEmptyemail = document.getElementById("email").value!=='';
    if(!(isNotEmptyPassword && isPasswordEqual && isNotEmptyusername && isNotEmptyemail && isValidEmail )){
        window.alert("invavaild credential");
    }
    return isNotEmptyPassword && isPasswordEqual && isNotEmptyusername && isNotEmptyemail && isValidEmail;

}

function validcheck1() {
    const usernameInput = document.getElementById("uname");
    const passwordInput = document.getElementById("pass0");

    const isNotEmptyUsername = usernameInput.value !== '';
    const isNotEmptyPassword = passwordInput.value !== "" && /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordInput.value);

    if (!(isNotEmptyPassword && isNotEmptyUsername)) {
        window.alert("Invalid credentials for sign-in. Please check your username and password.");
        return false;
    }

    return true;
}

