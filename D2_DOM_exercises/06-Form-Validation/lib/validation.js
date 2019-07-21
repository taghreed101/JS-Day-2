// TODO: Validate this form

if (validationServer01.validity.valid && validationServer02.validity.valid &&validationServer03.validity.valid &&
validationServer04.validity.valid && validationServer05.validity.valid && validationServer06.validity.valid &&
validationServer07.validity.valid && validationServer08.validity.valid && Checkinput) {
  document.getElementById("submit").disabled = false;
}
else
{
   
  document.getElementById("submit").disabled = true;  
}
 
   
//=========================================================
validationServer01.addEventListener("keyup", function (event) {
  const  isValidFirstName = validationServer01.checkValidity();
  if ( isValidFirstName ) {
    validationServer01.classList.remove("is-invalid");
    validationServer01.classList.add("is-valid");
    
  }
  else
  {
    validationServer01.classList.remove("is-valid");
    validationServer01.classList.add("is-invalid");
   
  }
});
//=========================================================
validationServer02.addEventListener("keyup", function (event) {
  const  isValidLastName = validationServer02.checkValidity();
  if ( isValidLastName ) {
    validationServer02.classList.remove("is-invalid");
    validationServer02.classList.add("is-valid");
    
  }
  else
  {
    validationServer02.classList.remove("is-valid");
    validationServer02.classList.add("is-invalid");
   
  }
});
//====================================================
validationServer03.addEventListener("keyup", function (event) {
  const  isValidAddress = validationServer03.checkValidity();
  if ( isValidAddress ) {
    validationServer03.classList.remove("is-invalid");
    validationServer03.classList.add("is-valid");
     
  }
  else
  {
    validationServer03.classList.remove("is-valid");
    validationServer03.classList.add("is-invalid");
     
  }
});
//=========================================================
validationServer04.addEventListener("keyup", function (event) {
  const  isValidCountry = validationServer04.checkValidity();
  if ( isValidCountry ) {
    validationServer04.classList.remove("is-invalid");
    validationServer04.classList.add("is-valid");
   
  }
  else
  {
    validationServer04.classList.remove("is-valid");
    validationServer04.classList.add("is-invalid");
       
  }
});
//========================================================
validationServer05.addEventListener("keyup", function (event) {
  const  isValidZipcode = validationServer05.checkValidity();
  if ( isValidZipcode ) {
    validationServer05.classList.remove("is-invalid");
    validationServer05.classList.add("is-valid");
     
  }
  else
  {
    validationServer05.classList.remove("is-valid");
    validationServer05.classList.add("is-invalid");
         
  }
});
//========================================================
validationServer06.addEventListener("keyup", function (event) {
  const  isValidCity = validationServer06.checkValidity();
  if ( isValidCity ) {
    validationServer06.classList.remove("is-invalid");
    validationServer06.classList.add("is-valid");
       
  }
  else
  {
    validationServer06.classList.remove("is-valid");
    validationServer06.classList.add("is-invalid");
           
  }
});
//========================================================
validationServer07.addEventListener("keyup", function (event) {
  const  isValidEmail = validationServer07.checkValidity();
  if ( isValidEmail ) {
    validationServer07.classList.remove("is-invalid");
    validationServer07.classList.add("is-valid");
  }
  else
  {
    validationServer07.classList.remove("is-valid");
    validationServer07.classList.add("is-invalid");
  }
});

validationServer08.addEventListener("keyup", function (event) {
  const  isValidMobile = validationServer08.checkValidity();
  if ( isValidMobile ) {
    validationServer08.classList.remove("is-invalid");
    validationServer08.classList.add("is-valid");
           
  }
  else
  {
    validationServer08.classList.remove("is-valid");
    validationServer08.classList.add("is-invalid");
               
  }
});
//========================================================
Checkinput.addEventListener("change", function (event) {
  const  isValidCheck = Checkinput.checkValidity();
  if ( isValidCheck ) {
    Checkinput.classList.remove("is-invalid");
    Checkinput.classList.add("is-valid");
           
  }
  else
  {
    Checkinput.classList.remove("is-valid");
    Checkinput.classList.add("is-invalid");
               
  }
});
//========================================================
// if (vaild)
// {
//   document.getElementById("submit").disabled = false;
// }
// else
// {
//   document.getElementById("submit").disabled = true;  
// }




