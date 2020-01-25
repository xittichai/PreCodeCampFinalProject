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