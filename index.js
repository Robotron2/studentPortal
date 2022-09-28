// SignUp

let errorDisplay = document.getElementById("disp")
let firstNameInput = document.getElementById("firstNameInput")
let lastNameInput = document.getElementById("lastNameInput")
let userEmailInput = document.getElementById("userEmailInput")
let userPasswordInput = document.getElementById("userPasswordInput")
const signUpBtn = document.getElementById("signUpBtn")

const clearErrorMsg = () => {
    disp.style.visibility = "hidden"
}
const reloadLogin = () => {
    window.location.href = "login.html"
}
const reloadSignUp = () => {
    window.location.href = "index.html"
}



let allStudents = []

if (localStorage.entireStudents) {
    allStudents = JSON.parse(localStorage.getItem('entireStudents'))
}

signUpBtn.addEventListener("click", () => {
    console.log(firstNameInput.value)
    if (firstNameInput.value == "" || lastNameInput.value == "" || userEmailInput.value == "" || userPasswordInput.value == "") {
        // alert("Kindly fill in your details!")
        disp.innerHTML = "Kindly fill all details"
        setTimeout(clearErrorMsg, 1000)
        setTimeout(reloadSignUp, 1000)
    } else {
        let newStudent = {
            studentFirstname: firstNameInput.value,
            studentLastname: lastNameInput.value,
            studentEmail: userEmailInput.value,
            studentPassword: userPasswordInput.value,
        }
        allStudents.push(newStudent)
        localStorage.setItem('entireStudents', JSON.stringify(allStudents))
        firstNameInput.value = ""
        lastNameInput.value = ""
        userEmailInput.value = ""
        userPasswordInput.value = ""
        window.location = "login.html"
    }
})