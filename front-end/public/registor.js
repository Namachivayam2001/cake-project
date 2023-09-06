const form = document.getElementById("form");
const uid = document.getElementById("userid");
const uidError = document.getElementById("uidError");
const fname = document.getElementById("fname");
const fnameError = document.getElementById("fnameError");
const lname = document.getElementById("lname");
const lnameError = document.getElementById("lnameError");
const male = document.getElementById("male");
const female = document.getElementById("female");
const other = document.getElementById("other");
const genderError = document.getElementById("genderError");
const dob = document.getElementById("dob");
const dobError = document.getElementById("dobError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const pass = document.getElementById("password");
const passError = document.getElementById("passwordError");
const Confirm = document.getElementById("confirmPassword");
const confirmError = document.getElementById("confirmError");
const agree = document.getElementById("agree");
const agreeError = document.getElementById("agreeError");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
})

const validate = () => {
    if(uidValidate()){
        if(fnameValidate()){
            if(lnameValidate()){
                if(genderValidate()){
                    if(dobValidate()){
                        if(emailValidate()){
                            if(phoneValidate()){
                                if(passValidate()){
                                    if(confirmValidate()){
                                        if(agreement()){
                                            form.submit();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const uidValidate = () => {
    const uidRegex = /^[a-zA-Z0-9_]+$/;
    const uidval = uid.value.trim();
    if(uidval.length == 0){
        uidError.innerHTML = "Userid not be empty";
        uid.style.borderColor = "red";
        return false;
    } else if(uidval.length <= 5){
        uidError.innerHTML = "Userid at least 6 char";
        uid.style.borderColor = "red";
        return false;
    } else if(!uidRegex.test(uidval)){
        uidError.innerHTML = "No special characters allow";
        uid.style.borderColor = "red";
        return false;
    } else{
        uidError.innerHTML = "";
        uid.style.borderColor = "green";
        return true;
    }
}

const fnameValidate = () => {
    const fnameRegex = /^[a-zA-Z]+$/;
    const fnameval = fname.value.trim();
    if(fnameval.length == 0){
        fnameError.innerHTML = "First name not be empty";
        fname.style.borderColor = "red";
        return false;
    } else if(!fnameRegex.test(fnameval)){
        fnameError.innerHTML = "Use only alphabets";
        fname.style.borderColor = "red";
        return false;
    } else{
        fnameError.innerHTML = "";
        fname.style.borderColor = "green";
        return true;
    }
}

const lnameValidate = () => {
    const lnameRegex = /^[a-zA-Z]+$/;
    const lnameval = lname.value.trim();
    if(lnameval.length == 0){
        lnameError.innerHTML = "Last name not be empty";
        lname.style.borderColor = "red";
        return false;
    } else if(!lnameRegex.test(lnameval)){
        lnameError.innerHTML = "Use only alphabets";
        lname.style.borderColor = "red";
        return false;
    } else{
        lnameError.innerHTML = "";
        lname.style.borderColor = "green";
        return true;
    }
}

const genderValidate = () => {
    if(!male.checked && !female.checked && !other.checked){
        genderError.innerHTML = "Please select a gender";
        return false;
    } else {
        genderError.innerHTML = "";
        return true;
    }
}

const dobValidate = () => {
    const selectedDate = new Date(dob.value);
    const currentDate = new Date();// Calculate the age difference in years
    const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
    // Check if the user is above 18 years
    if (ageDifference < 18) {
        dobError.innerHTML = "You must be at least 18 years old";
        return false;
    } else if (isNaN(selectedDate) || selectedDate > currentDate) {
        dobError.innerHTML = "Invalid date of birth";
        return false;
    } else {
        dobError.innerHTML = "";
        return true;
    }
}

const emailValidate = () => {
    const emailval = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailval.length == 0){
        emailError.innerHTML = "Email not be empty";
        email.style.borderColor = "red";
        return false;
    } else if (!emailRegex.test(emailval)) {
        emailError.innerHTML = "Invalid email address";
        email.style.borderColor = "red";
        return false;
    } else {
        emailError.innerHTML = "";
        email.style.borderColor = "green";
        return true;
    }
}

const phoneValidate = () => {
    const phoneval = phone.value.trim();
    if(phoneval.length == 0){
        phoneError.innerHTML = "Mobile number not be empty";
        phone.style.borderColor = "red";
        return false;
    } else if(phoneval.length < 10 || phone.length > 10){
        phoneError.innerHTML = "Mobile number must be 10 digits";
        phone.style.borderColor = "red";
        return false;
    } else{
        phoneError.innerHTML = "";
        phone.style.borderColor = "green";
        return true;
    }
}

const passValidate = () => {
    const passval = pass.value.trim();
    if(passval.length == 0){
        passError.innerHTML = "Password not be empty";
        pass.style.borderColor = "red";
        return false;
    } else if(passval.length < 6){
        passError.innerHTML = "Password have at least 6 char";
        pass.style.borderColor = "red";
        return false;
    } else{
        passError.innerHTML = "";
        pass.style.borderColor = "green";
        return true;
    }
}

const confirmValidate = () => {
    const passval = pass.value.trim();
    const confirmval = Confirm.value.trim();
    if(confirmval.length == 0){
        confirmError.innerHTML = "confirm Password not be empty";
        pass.style.borderColor = "red";
        return false;
    } else if(passval != confirmval){
        confirmError.innerHTML = "Confirm password are not same";
        Confirm.style.borderColor = "red";
        return false;
    } else{
        confirmError.innerHTML = "";
        Confirm.style.borderColor = "green";
        return true;
    }
}

const agreement = () => {
    if(!agree.checked){
        agreeError.innerHTML = "Please accept the user agreement";
        return false;
    } else{
        agreeError.innerHTML = "";
        return true;
    }
}