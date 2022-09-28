// Login
allStudents = JSON.parse(localStorage.getItem('entireStudents'))
let errorDisplay = document.getElementById("disp")
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let matchFound = false
const loginBtn = document.getElementById("loginBtn")

const clearErrorMsg = () => {
    disp.style.visibility = "hidden"
}
const reloadLogin = () => {
    window.location.href = "login.html"
}

const logIn = () => {
    if (loginEmail.value == "" || loginPassword.value == "") {
        errorDisplay.innerHTML = 'Oppss! Kindly fill in your Email and Password'
        setTimeout(clearErrorMsg, 1000)
        setTimeout(reloadLogin, 1000)

    } else {
        errorDisplay.innerHTML = ''
        for (i = 0; i < allStudents.length; i++) {
            if (allStudents[i].studentEmail == loginEmail.value && allStudents[i].studentPassword == loginPassword.value) {
                // console.log(useremail.value);
                matchFound = true
                break;
            }
        }
        if (matchFound) {
            alert("Login Successful")
            window.location.href = "search.html"
        } else {
            errorDisplay.innerHTML = 'Incorrect Email or Password!'
            setTimeout(clearErrorMsg, 1000)
            Email.value = ''
            Password.value = ''
        }
    }
}
loginBtn.addEventListener("click", logIn)