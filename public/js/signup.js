let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");
    let error = document.getElementById("error");

    // let username= document.getElementById("username");
    // let error2 = document.getElementById("error2");
    // let lastname = document.getElementById("lastname").value;
    // let error3 = document.getElementById("error3");
    let phnumber= document.getElementById("phnumber");
    let error1 = document.getElementById("error1");
    let cmpwd = document.getElementById("cmpwd");
     let error4 = document.getElementById("error4");

     function validate(){
     
    // ##### phone number validation#######
       let phoneregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phoneregex.test(phnumber.value)==false){
          error1.innerHTML="valid Phone number format:xxx-xxx-xxxx,xxx.xxx.xxxx,xxx xxx xxxx";
          error1.style.color="red";
          return false;
        }
      else if(phoneregex.test(phnumber.value)==true){
        error1.innerHTML="";
        error1.style.color="green";
      }
    //   // ####### confirmation password ######
      if (pwd.value!==cmpwd.value){
        error4.innerHTML="Passwords do not match"
        error4.style.color="red";
        return false;
     }
     else{
       error4.innerHTML="";
     }
 //  ###### email validation #######

      let   regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    if(regexp.test(email.value)){
        error.innerHTML = "";
        error.style.color ="green";
        error.style.textAlign = "left";
        return true;


    }
  else {
        error.innerHTML =" please enter valid email id";
        error.style.color ="red";
        return false;
    }
    
    }
function check(){
  
  let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (passregex.test(pwd.value)){
        error.innerHTML = "";
        return true;
      }
      else{
        error.innerHTML= "";
        error.style.color= "red";
        return false;
    }
  
     
}
//########## password validation #######
// Code By Webdevtrick ( https://webdevtrick.com )
DOM = {
  passwForm: '.form-strength',
  passwErrorMsg: '.password-strength__error',
  passwInput: document.querySelector('.password'),
  //passwVisibilityBtn: '.password-strength__visibility',
 // passwVisibility_icon: '.password-strength__visibility-icon',
  strengthBar: document.querySelector('.password-strength__bar'),
  submitBtn: document.querySelector('.submit') };
 
//need to append classname with '.' symbol
const findParentNode = (elem, parentClass) => {
 
  parentClass = parentClass.slice(1, parentClass.length);
 
  while (true) {
 
    if (!elem.classList.contains(parentClass)) {
      elem = elem.parentNode;
    } else {
      return elem;
    }
 
  }
 
};
 
//*** MAIN CODE
 
const getPasswordVal = input => {
  return input.value;
};
 
const testPasswRegexp = (passw, regexp) => {
 
  return regexp.test(passw);
 
};
 
const testPassw = passw => {
 
  let strength = 'none';
 
  const moderate = /(?=.*[A-Z])(?=.*[a-z]).{5,}|(?=.*[\d])(?=.*[a-z]).{5,}|(?=.*[\d])(?=.*[A-Z])(?=.*[a-z]).{5,}/g;
  const strong = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d]).{7,}|(?=.*[a-z])(?=.*[\d]).{8,}/g;
  const extraStrong = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d]).{9,}/g;
 
  if (testPasswRegexp(passw, extraStrong)) {
    strength = 'extra';
  } else if (testPasswRegexp(passw, strong)) {
    strength = 'strong';
  } else if (testPasswRegexp(passw, moderate)) {
    strength = 'moderate';
  } else if (passw.length > 0) {
    strength = 'weak';
  }
 
  return strength;
 
};
 
const testPasswError = passw => {
 
  const errorSymbols = /\s/g;
 
  return testPasswRegexp(passw, errorSymbols);
 
};
 
const setStrengthBarValue = (bar, strength) => {
 
  let strengthValue;
 
  switch (strength) {
    case 'weak':
      strengthValue = 25;
      bar.setAttribute('aria-valuenow', strengthValue);
      break;
 
    case 'moderate':
      strengthValue = 50;
      bar.setAttribute('aria-valuenow', strengthValue);
      break;
 
    case 'strong':
      strengthValue = 75;
      bar.setAttribute('aria-valuenow', strengthValue);
      break;
 
    case 'extra':
      strengthValue = 100;
      bar.setAttribute('aria-valuenow', strengthValue);
      break;
 
    default:
      strengthValue = 0;
      bar.setAttribute('aria-valuenow', 0);}
 
 
  return strengthValue;
 
};
 
//also adds a text label based on styles
const setStrengthBarStyles = (bar, strengthValue) => {
 
  bar.style.width = `${strengthValue}%`;
 
  bar.classList.remove('bg-success', 'bg-info', 'bg-warning');
 
  switch (strengthValue) {
    case 25:
      bar.classList.add('bg-danger');
      bar.textContent = 'poor';
      break;
 
    case 50:
      bar.classList.remove('bg-danger');
      bar.classList.add('bg-warning');
      bar.textContent = 'Medium';
      break;
 
    case 75:
      bar.classList.remove('bg-danger');
      bar.classList.add('bg-success');
      bar.textContent = 'Strong';
      break;
 
    case 100:
      bar.classList.remove('bg-danger');
      bar.classList.add('bg-success');
      bar.textContent = 'Extra Strong';
      break;
 
    default:
      bar.classList.add('bg-danger');
      bar.textContent = '';
      bar.style.width = `0`;}
 
 
};
 
const setStrengthBar = (bar, strength) => {
 
  //setting value
  const strengthValue = setStrengthBarValue(bar, strength);
 
  //setting styles
  setStrengthBarStyles(bar, strengthValue);
};
 
const unblockSubmitBtn = (btn, strength) => {
 
  if (strength === 'none' || strength === 'weak') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
 
};
 
const findErrorMsg = input => {
  const passwForm = findParentNode(input, DOM.passwForm);
  return passwForm.querySelector(DOM.passwErrorMsg);
};
 
const showErrorMsg = input => {
  const errorMsg = findErrorMsg(input);
  errorMsg.classList.remove('js-hidden');
};
 
const hideErrorMsg = input => {
  const errorMsg = findErrorMsg(input);
  errorMsg.classList.add('js-hidden');
};
 
const passwordStrength = (input, strengthBar, btn) => {
 
  //getting password
  const passw = getPasswordVal(input);
 
  //check if there is an error
  const error = testPasswError(passw);
 
  if (error) {
 
    showErrorMsg(input);
 
  } else {
 
    //hide error messages
    hideErrorMsg(input);
 
    //finding strength
    const strength = testPassw(passw);
 
    //setting strength bar (value and styles)
    setStrengthBar(strengthBar, strength);
 
    //unblock submit btn only if password is moderate or stronger
    unblockSubmitBtn(btn, strength);
  }
 
};
 
const passwordVisible = passwField => {
 
  const passwType = passwField.getAttribute('type');
 
  let visibilityStatus;
 
  if (passwType === 'text') {
 
    passwField.setAttribute('type', 'password');
 
    visibilityStatus = 'hidden';
 
  } else {
 
    passwField.setAttribute('type', 'text');
 
    visibilityStatus = 'visible';
 
  }
 
  return visibilityStatus;
 
};
 
//   const changeVisibiltyBtnIcon = (btn, status) => {
 
//     const hiddenPasswIcon = btn.querySelector(`${DOM.passwVisibility_icon}[data-visible="hidden"]`);
 
//     const visibilePasswIcon = btn.querySelector(`${DOM.passwVisibility_icon}[data-visible="visible"]`);
 
//     if (status === 'visible') {
//       visibilePasswIcon.classList.remove('js-hidden');
//       hiddenPasswIcon.classList.add('js-hidden');
//     } else if (status === 'hidden') {
//       visibilePasswIcon.classList.add('js-hidden');
//       hiddenPasswIcon.classList.remove('js-hidden');
//     }
 
//   };
 
const passwVisibilitySwitcher = (passwField, visibilityToggler) => {
 
  const visibilityStatus = passwordVisible(passwField);
 
  changeVisibiltyBtnIcon(visibilityToggler, visibilityStatus);
};
 
 
//EVENT LISTENERS
DOM.passwInput.addEventListener('input', () => {
  passwordStrength(DOM.passwInput, DOM.strengthBar, DOM.submitBtn);
});
 
const passwVisibilityBtn = document.querySelector(DOM.passwVisibilityBtn);
 
passwVisibilityBtn.addEventListener('click', e => {
 
  let toggler = findParentNode(e.target, DOM.passwVisibilityBtn);
 
  passwVisibilitySwitcher(DOM.passwInput, toggler);
 
}); 