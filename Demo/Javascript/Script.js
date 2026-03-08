function collect_fname() {
    let Fname = document.getElementById("fName").value;
    console.log("First Name: " , Fname);
    if (Fname == "") {
        document.getElementById("nameError").innerHTML = "Please enter your first name.";
        return false;
    }
        else {
            
        }
        return false;
}
function collect_lname() {
    let Lname = document.getElementById("lName").value;
    console.log("Last Name: " , Lname);
    if (Lname == "") {
        document.getElementById("lnameError").innerHTML = "Please enter your last name.";
        return false;
    }
        else {
            
        }
        return false;
}
function collect_email(){
    let email = document.getElementById("Email").value;
    console.log("Email: " , email);
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Please enter your email.";
        return false;
    }
        else {
            
        }
        return false;
}
function collect_pnumber() {
    let pnumber = document.getElementById("phoneNumber").value;
    console.log("Phone Number: " , pnumber);
    if (pnumber == "") {
        document.getElementById("pnumberError").innerHTML = "Please enter your phone number.";
        return false;
    }
        else {
            
        }
        return false;
}
function collect_data() {
    let Data = document.getElementById("tArea").value;
    console.log("Data: " , Data);
    if (Data == "") {
        document.getElementById("dataError").innerHTML = "Please write something.";
        return false;
    }
        else {
            
        }
        return false;
}