
//Bodenlose reihe von definitionen von variablen mit Zuweisung von HTML-Elementen

let inputemail = document.getElementById("logmail")
let inputpassw = document.getElementById("logpass")
let pressbutton = document.getElementById("logbutton")
let presscreabutton = document.getElementById("cbutt")
let loginbutton = document.getElementById("Loginbutton")
let logoutbutton = document.getElementById("Logoutbutton")
let loggedin = false
let loggedinas = localStorage.getItem("account") || 0
let inputpassw2 = document.getElementById("logpass2")
let condmatch = document.getElementById("condmatch")
let test_acc = document.getElementById("test_acc")
let test = 200

//Temporäres Display als wer man eingeloggt ist

if (test_acc) {
    test_acc.innerText = "Logged in as " + localStorage.getItem("account")
}


//definiert Logout

function Logout() {
    localStorage.removeItem("account")
    window.location.href = "../Index.html"
    alert	("Succesful Logout")
}




let accounts = JSON.parse(localStorage.getItem("accounts")) || []

//definiert login

function attemptlogin() {
    let correctdata = false
    let mailvalue = inputemail.value
    let passvalue = inputpassw.value
    for (let account of accounts) {
        if (mailvalue == account.email && passvalue == account.password) {
            correctdata = true
            loggedinas = account.email
            loggedin = true
            break
        }

    }


//Überprüft bei Login Credentials

    if (correctdata) {
        localStorage.setItem("account", loggedinas)
        alert("Successful Login")
        window.location.href = "../Index.html"

    }
    else {

        alert("Wrong Credentials")


    }


}

//Checkt ob man eingelokt ist

if (loggedinas != 0) {
    if (loginbutton) {


        loginbutton.innerText = "Account"
        if (window.location.pathname.endsWith("/Index.html")) {
            loginbutton.href = "Additional_Pages/Account.html"

        }
        else {
            loginbutton.href = "Account.html"
        }

    }
    if (logoutbutton) {
        logoutbutton.onclick = Logout
    }
}

//bro guck halt wie die Funktion heißt

function createaccount() {
    if (inputemail.value == "" || inputpassw.value == "" || inputpassw2.value == "" ) {
        alert("Please fill out every field!")
        return
    } 
    
    //Condition 1
    if (inputpassw.value != inputpassw2.value) {
        alert("Passwords do not match!")
        return
    } 
    //Condition 2

    if (!/\d/.test(inputpassw.value)) {
        alert("No numbers were used in your Password")
        return
    }

    //Condition 3
    if (test == 1) {
        alert("Condition 3 triggered")
        return
    }
    //Condition 4
    if (test == 2) {
        alert("Condition 4 triggered")
        return
    }
    //Condition 5
    if (test == 3) {
        alert("Condition 5 triggered")
        return
    }

//Checkt ob Email schon im Localstorage vorhanden ist
   for (let account of accounts) {
        if (inputemail.value == account.email) {
            alert("Email already registered!")
            return
        }
    }

    accounts.push({ email: inputemail.value, password: inputpassw.value })

  localStorage.setItem("accounts", JSON.stringify(accounts))

    window.location.href = "Login.html"
}


function updateconditions() {
    condmatch.checked = inputpassw.value === inputpassw2.value;
    condnumb.checked = /\d/.test(inputpassw.value);
    condspeccharact.checked = /[!@#$%^&*(),.?":{}|<>]/.test(inputpassw.value);
    condupdowncasel.checked = /[a-z]/.test(inputpassw.value) && /[A-Z]/.test(inputpassw.value);
    condmin8char.checked = inputpassw.value.length >= 8;
}


function resetconds() {
    document.getElementById('condmatch').checked = false;
    document.getElementById('condnumb').checked = false;
    document.getElementById('condspeccharact').checked = false;
    document.getElementById('condupdowncasel').checked = false;
    document.getElementById('condmin8char').checked = false;
}


if (window.location.href.endsWith("/Login.html")) {
    pressbutton.onclick = attemptlogin
}

else if(presscreabutton) {  
    presscreabutton.onclick = createaccount

    inputemail.onkeyup = updateconditions;
    inputpassw.onkeyup = updateconditions;
    inputpassw2.onkeyup = updateconditions;

    updateconditions()
}   

if (window.location.href.endsWith("/Create%20Account.html")){
    window.addEventListener('load', (event) => {
        resetconds();
    });
    


}

