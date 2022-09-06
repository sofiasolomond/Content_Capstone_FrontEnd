var uflag, eflag, pflag, cpflag = 'N';

const form = document.querySelector("form");
uField = form.querySelector(".uname"),
  uInput = uField.querySelector("input"),
  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input")
 cpField = form.querySelector(".confpassword"),
 cpInput = cpField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault();
  (uInput.value == "") ? uField.classList.add("shake", "error") : checkUserName();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (cpInput.value == "") ? cpField.classList.add("shake", "error") : checkConfPass();

  setTimeout(() => {
    uField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    cpField.classList.remove("shake");
  }, 500);

  uInput.onkeyup = () => { checkUserName(); }
  eInput.onkeyup = () => { checkEmail(); }
  pInput.onkeyup = () => { checkPass(); }
  cpInput.onkeyup = () => { checkConfPass(); }

  function checkUserName() {
    if (uInput.value == "") {
      uField.classList.add("error");
      uField.classList.remove("valid");
    } else {
      uField.classList.remove("error");
      uField.classList.add("valid");
    }
  }

  function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!eInput.value.match(pattern)) {
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    } else {
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass() {
    let errorTxt = pField.querySelector(".error-txt");
    if (pInput.value == "") {
      pField.classList.add("error");
      pField.classList.remove("valid");
      errorTxt.innerText = "Password can't be blank";
    } else if (pInput.value.length < 8 && pInput.value != "") {
      pField.classList.add("error");
      pField.classList.remove("valid");
      (pInput.value != "") ? errorTxt.innerText = "Password length must be atleast 8 characters" : errorTxt.innerText = "Password can't be blank";
    } else if (pInput.value.length > 15 && pInput.value != "") {
      pField.classList.add("error");
      pField.classList.remove("valid");
      (pInput.value != "") ? errorTxt.innerText = "Password length must not exceed 15 characters" : errorTxt.innerText = "Password can't be blank";
    }
    else {
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  function checkConfPass() {
    let errorTxt = cpField.querySelector(".error-txt");
    if (cpInput.value == "") {
      cpField.classList.add("error");
      cpField.classList.remove("valid");     
      errorTxt.classList.remove("matched-txt");
      errorTxt.innerText = "Confirm Password can't be blank";
    } else if (cpInput.value != "" && cpInput.value != pInput.value) {
      cpField.classList.add("error");
      cpField.classList.remove("valid");
      cpField.classList.remove("matched-txt");
      (cpInput.value != "" && cpInput.value != pInput.value) ? errorTxt.innerText = "Password Mismatch" : errorTxt.innerText = "Confirm Password can't be blank";
    } else { 
      cpField.classList.remove("error");
      cpField.classList.add("valid");
    }
  }

  if (!uField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error") && !cpField.classList.contains("error")) {
    window.location.href = "login.html";
  }
}
function AvoidSpace(event) {
  var k = event ? event.which : window.event.keyCode;
  if (k == 32) {
    uField.classList.add("error");
    uField.classList.remove("valid");
    (uInput.value != "") ? errorTxt.innerText = "UserName can't have space" : errorTxt.innerText = "UserName can't be blank";
    return false;
  } else {
    uField.classList.remove("error");
    uField.classList.add("valid");
    return true;
  }
}
function checkSpcialChar(event){
  if(!((event.keyCode >= 65) && (event.keyCode <= 90) || (event.keyCode >= 97) && (event.keyCode <= 122) || (event.keyCode >= 48) && (event.keyCode <= 57))){
     event.returnValue = false;
     alert("Spaces & Special Characters are not allowed in UserName!!!");
     return;
  }
  event.returnValue = true;
}

/*
let username = document.getElementById("username");
let email = document.getElementById("emailid");
let pwd = document.getElementById("pswd");
let cnfpwd = document.getElementById("cnfpswd");
*/

const HandleSignUp = async (e) => {
  e.preventDefault();

  window.location = "login.html";

}