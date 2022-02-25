
let email= document.getElementById("email");
let pwd =document.getElementById("pwd");
let error =document.getElementById("error");
let error1=document.getElementById("error1");
let regex =/^w+([\.-]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
function validate(){
    if(email.value==""||email.value.trim()=="")
    {
        error.innerHTML="Email cannot be empty";
        error.style.color="red";
        return false;

    }
    
    else if(regex.test(email.value)==true){
        error.innerHTML="";
        error.style.color="green";


    }
    else if(regex.test(email.value)==false){

        error.innerHTML="invalid email";
        error.style.color="red";
        return false;

    }
    if(pwd.value==""||pwd.value.trim()==""){
        error1.innerHTML="password cannot be empty";
        error1.style.color="red";
        return false;
        
    }
}


































































// function checkForm(form)
// {
//   if(form.uname.value=="") {
//     error.innerHTML="Error: Username cannot blank";
//     form.uname.focus();
//     return false;
//   }
//   q = /^\w+$/;
//   if(!q.test(form.uname.value)) {
//     error.innerHTML="Error: Username must contain only letters, numbers and underscores!";
//     form.uname.focus();
//     return false;
//   }
//   if(form.password.value=="") {
//     error1.innerHTML="Error: Password cannot blank";
//     form.password.focus();
//     return false;
//   }
 
//     if(form.password.value.length < 8) {
//       error1.innerHTML="Error: Password must contain at least Eight characters!";
//       form.password.focus();
//       return false;
//     }
//     if(form.pwd1.value == form.username.value) {
//         error1.innerHTML="Error: Password must be different from Username!";
//       form.password.focus();
//       return false;
//     }
//     re = /[0-9]/;
//     if(!re.test(form.password.value)) {
//         error1.innerHTML="Error: password must contain at least one number (0-9)!";
//       form.password.focus();
//       return false;
//     }
//     re = /[a-z]/;
//     if(!re.test(form.password.value)) {
//         error1.innerHTML="Error: password must contain at least one lowercase letter (a-z)!";
//       form.password.focus();
//       return false;
//     }
//     re = /[A-Z]/;
//     if(!re.test(form.password.value)) {
//         error1.innerHTML="Error: password must contain at least one uppercase letter (A-Z)!";
//       form.password.focus();
//       return false;
//     }
  
// //   alert("You entered a valid password: " + form.pwd1.value);
//   return true;
// }