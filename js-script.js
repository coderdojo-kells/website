var nameField = document.getElementById('fullname');
var phoneField = document.getElementById('phone');
var emailField = document.getElementById('email');
var msgField = document.getElementById('message');
var captchaField = document.getElementById('captcha');
var submitBtn = document.getElementById('submit-query');

var capQu1 = document.getElementById('captcha-qu1');
var capQu2 = document.getElementById('captcha-qu2');

nameField.onblur = function(){
  validateName(nameField.value);
}

phoneField.onblur = function(){
  validatePhone(phoneField.value);
};

emailField.onblur = function(){
  validateEmail(emailField.value);
};

msgField.onblur = function(){
  validateMsg(msgField.value);
};

captchaField.onblur = function(){
  validateCaptcha(captchaField.value);
}

setInterval(function(){
  if(validateName(nameField.value) && validatePhone(phoneField.value)
        && validateEmail(emailField.value) && validateMsg(msgField.value)
          && validateCaptcha(captchaField.value)){

            submitBtn.removeAttribute('disabled');
  }
},1000);


function validateName(name){

  if(!name.match(/[a-zA-Z]/g) || name.match(/[@!?£$%^<>&()+]/g)){
    // alert('Name field cannot contain non-alpha characters.');
    nameField.style.border = '3px solid red';
    nameField.style.color = 'red';
  }else{
    nameField.style.border = '3px solid green';
    nameField.style.color = 'green';
    return true;
  }

}

function validatePhone(phone){
  if(!phone.match(/[0-9]/g) || phone.match(/[@!?£$%^<>&()+]/g)){
    // alert('Phone field must contain numeric characters.');
    phoneField.style.border = '3px solid red';
    phoneField.style.color = 'red';
  }else{
    phoneField.style.border = '3px solid green';
    phoneField.style.color = 'green';
    return true;
  }
}

function validateEmail(email){
  if(email.match('@')){ // check that email address contains @ symbol
    var atPos = email.search('@');
    var username = email.slice(0,atPos);
    var domaintld = email.slice(atPos);
    var domain = domaintld.slice(1);
    var dotPos = domain.search(/[.]/g);
    var tld = domain.slice(dotPos+1);
    if( (username.match(/\S/ig)) && (domain.match(/\S/ig)) ){ // check that username & domain both present
      if(domain.match(/[.]/ig)){ // check the TLD exists
          if(tld.match(/\S/ig)){
            emailField.style.border = '3px solid green';
            emailField.style.color = 'green';
            return true;
          }else {
            // alert('email address, ' + email + ' not valid. Please ensure you have included the full domain name.');
            emailField.style.border = '3px solid red';
            emailField.style.color = 'red';
          }

      }else {
        // alert('email address, ' + email + ' not valid. Please ensure you have included the domain name.');
        emailField.style.border = '3px solid red';
        emailField.style.color = 'red';
      }

    }else{
        // alert('email address, ' + email + ' not valid. Please check you have included the full email address.');
        emailField.style.border = '3px solid red';
        emailField.style.color = 'red';
    }

  }else{
    // alert('email address, ' + email + ' not valid. Please ensure you have included the \'@\' symbol.');
    emailField.style.border = '3px solid red';
    emailField.style.color = 'red';
  }
}

function validateMsg(msg){
  if(!msg.match(/[a-zA-Z0-9]/g) || name.match(/[@!?£$%^<>&()+]/g)){
    // alert('Msg field cannot contain non-alpha characters.');
    msgField.style.border = '3px solid red';
    msgField.style.color = 'red';
  }else{
    msgField.style.border = '3px solid green';
    msgField.style.color = 'green';
    return true;
  }
}

function validateCaptcha(captcha){
  if(!captcha.match(/[0-9]/g) || captcha.match(/[@!?£$%^<>&()+]/g)){
    // alert('Phone field must contain numeric characters.');
    captchaField.style.border = '3px solid red';
    captchaField.style.color = 'red';
  }else{
    captchaField.style.border = '3px solid green';
    captchaField.style.color = 'green';
    return true;
  }
}

function sendMail(){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('sendstatus').innerHTML = this.responseText;
    }
  };

  xhttp.open('POST', 'scripts/mail.php?fullname='+ nameField.value + '&phone=' + phoneField.value + '&email=' + emailField.value + '&message=' + msgField.value + '&captcha=' + captchaField.value + '&qu1=' + capQu1.value + '&qu2=' + capQu2.value, false);
  xhttp.send();

}

function generateCaptcha(){
  var captchaNum = Math.floor(Math.random() * 10) + 11;
  var captchaDigits = String(captchaNum).split('');
  var captchaSum = Number(captchaDigits[0]) + Number(captchaDigits[1]);

  document.getElementById('captcha-problem').innerHTML = captchaDigits[0] +' + '+ captchaDigits[1];
  document.getElementById('captcha-qu1').value = captchaDigits[0];
  document.getElementById('captcha-qu2').value = captchaDigits[1];
}

generateCaptcha();
