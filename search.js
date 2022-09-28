let allStudents = JSON.parse(localStorage.getItem('entireStudents'))
let container1 = document.getElementById("container1")
let container2 = document.getElementById("container2")
let userInput = document.getElementById("userInput")
const searchBtn = document.getElementById("searchBtn")
const okayBtn = document.getElementById("okayBtn")
table.innerHTML = ""
table.innerHTML += `
<center>
            <tr>
                <th >S/N</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Actions</th>
                
            </tr>
        
`



const displayTable = () => {

    container2.classList.remove("hide")
    okayBtn.classList.remove("hide")
    for (let student = 0; student < allStudents.length; student++) {
        table.innerHTML +=
            `
            <td>${student+1}</td>
            <td>${allStudents[student].studentFirstname}</td>
            <td>${allStudents[student].studentLastname}</td>
            <td>${allStudents[student].studentEmail}</td>
            <td>
                <button class="btn btn-lg btn-success" id="edit">Edit</button>
                <button class="btn btn-lg btn-danger" id="delete">Delete</button>
            </td>
            </center>
            
        `
    }
}

okayBtn.addEventListener("click", () => {
    window.location.href = "index.html"
})