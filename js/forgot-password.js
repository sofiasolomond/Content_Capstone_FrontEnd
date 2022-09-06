const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),

form.onsubmit = (e)=>{
  e.preventDefault(); 
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();

  setTimeout(()=>{
    eField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} 

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

  if(!eField.classList.contains("error")){
    window.location.href = form.getAttribute("action");
  }
}