const { default: axios } = require("axios");

const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();} 

  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action");
  }
}

let uname = document.getElementById("uname");
let pwd = document.getElementById("pwd");

const HandleLogin = async (e) => {
  e.preventDefault();

  let loginData = { username: uname.value, password: pwd.value }
  return await axios({
    method: 'POST',
    url: '/users',
    data: loginData,
    headers: {'Content-Type': 'application/json'}
  })
  .then(function(response){
    if(response.data.redirect === "/"){
      window.location = "/home.html";
    }
    else{
      window.location = "/login.html"
    }
  })
  .catch(function(error) {
    if(error.response){
      console.log("Invalid user");
    }
    else if(error.request){
      console.log(error.request);
    }
    else {
      console.log("Something went wrong");
    }
  })

}