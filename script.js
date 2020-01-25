// Check if Web Storage Supported
function CheckWebStorage() {
    if (typeof(Storage) == "undefined") {
        alert("Sorry! No Web Storage support..")
    }
}

// Initial Web Storage Values
function InitialWebStorage() {
    if (sessionStorage.Name == null) {
        sessionStorage.Name = "Sittichai Nanthanasit (Tong)"
        sessionStorage.Skills = "English, Piano, SQL, VB.NET"
        sessionStorage.BackgroundColor = "1"
    }
}

// Set Web Storage Variable
function SetWebStorageVariable(Variable, Value) {
    if (Variable == "Name") {sessionStorage.Name = Value}
    else if (Variable == "Skills") {sessionStorage.Skills = Value}
    else if (Variable == "BackgroundColor") {sessionStorage.BackgroundColor = Value}
}

// Document Write from Web Storage
function PrintWebStorageVariable(Variable) {
    if (Variable === "Name") {document.write(sessionStorage.getItem("Name"))}
    else if (Variable === "Skills") {document.write(sessionStorage.getItem("Skills"))}
    else if (Variable === "BackgroundColor") {ChangeBackgroundColor(sessionStorage.getItem("BackgroundColor"))}
}

// Open Config Prompt from Key Press
function Config(Input) {
    if (Input == "1") {
        SetWebStorageVariable("Name", ChangeName())
        location.reload()
    }
    else if (Input == "2") {
        SetWebStorageVariable("Skills", ChangeSkills())
        location.reload()
    }
    else if (Input == "3") {
        SetWebStorageVariable("BackgroundColor", ChangeBackgroundColor())
    }
}

// Prompt for Name and Change the Web Storage
function ChangeName() {
    let Name = prompt("Change the name here.", sessionStorage.getItem("Name"))
    if (Name !== null) {return Name}
    else {return sessionStorage.getItem("Name")}
}

// Prompt for Skills and Change the Web Storage
function ChangeSkills() {
    let Skills = prompt("Change the skills here.", sessionStorage.getItem("Skills"))
    if (Skills !== null) {return Skills}
    else {return sessionStorage.getItem("Skills")}
}

// Prompt for Background Color and Change the Web Storage
function ChangeBackgroundColor() {
    let BackgroundColor = prompt("Input number for background color: 1 Black, 2 Blue, 3 White", sessionStorage.getItem("BackgroundColor"))
    if (BackgroundColor !== null && (BackgroundColor == "1" || BackgroundColor == "2" || BackgroundColor == "3")) {
        if (BackgroundColor == "1") {
            document.body.style.backgroundColor = "black"
        }
        else if (BackgroundColor == "2") {
            document.body.style.backgroundColor = "blue"
        }
        else if (BackgroundColor == "3") {
            document.body.style.backgroundColor = "white"
        }
        return BackgroundColor
    }
    else {return sessionStorage.getItem("BackgroundColor")}
}