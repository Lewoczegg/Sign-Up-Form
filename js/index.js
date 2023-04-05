const form = document.getElementById('myForm');
const inputRows = document.querySelectorAll('.input-row');
const btn = document.querySelector('.btn');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password-confirm');
const indicator = document.querySelector('.indicator');
const weak = document.querySelector('.weak');
const moderate = document.querySelector('.moderate');
const strong = document.querySelector('.strong');
const passwordStrengthText = document.querySelector('.passwordStrengthText');
const btnPassword = document.querySelector('.btnPassword');
const btnPasswordConirm = document.querySelector('.btnPasswordConirm');

btn.addEventListener('click', event => {
    event.preventDefault();

    let isValid = true;
    passwordInput.nextElementSibling.textContent = 'Please enter a password.'
    confirmPasswordInput.nextElementSibling.textContent = 'Please enter a password confirmation.'

    inputRows.forEach(inputRow=> {
        const input = inputRow.querySelector('input');
        const errorMessage = inputRow.querySelector('.error-message');
        

        if(!input.checkValidity()) {
            inputRow.classList.add('invalid');
            errorMessage.style.display = 'block';
            isValid = false;
        } else {
            inputRow.classList.remove('invalid');
            errorMessage.style.display = 'none';
        }

        input.addEventListener("input", () => {
            if (input.checkValidity()) {
              inputRow.classList.remove("invalid");
              errorMessage.style.display = "none";
            }
        });
    });

    if(passwordInput.value !== confirmPasswordInput.value) {
        isValid = false;
        passwordInput.parentNode.classList.add('invalid');
        passwordInput.nextElementSibling.style.display = 'block';
        passwordInput.nextElementSibling.textContent = 'Passwords do not match.'
        confirmPasswordInput.parentNode.classList.add('invalid');
        confirmPasswordInput.nextElementSibling.style.display = 'block';
        confirmPasswordInput.nextElementSibling.textContent = 'Passwords do not match.'
    }
    
    if(isValid) {
        form.submit();
    }
});

inputRows.forEach(inputRow => {
    const input = inputRow.querySelector('input');

    input.addEventListener('focus', () => {
        inputRow.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            inputRow.classList.remove('focused');
        }
    });
});


function checkPasswordStrength() {
    if (passwordInput.value != '') {
        indicator.style.display = 'block';
        indicator.style.display = 'flex';
    
        if(calculatePasswordStrength(passwordInput.value) === 'Weak') {
            weak.classList.add('active');
            passwordStrengthText.style.display = 'block';
            passwordStrengthText.textContent = 'Your password is too week';
            passwordStrengthText.classList.add('weak');
        }   else {
            weak.classList.remove('active');
            passwordStrengthText.classList.remove('weak');
        }

        if(calculatePasswordStrength(passwordInput.value) === 'Moderate') {
            weak.classList.add('active');
            moderate.classList.add('active');
            passwordStrengthText.textContent = 'Your password is moderate';
            passwordStrengthText.classList.add('moderate');
        } else {
            moderate.classList.remove('active');
            passwordStrengthText.classList.remove('moderate');
        }

        if(calculatePasswordStrength(passwordInput.value) === 'Strong') {
            weak.classList.add('active');
            moderate.classList.add('active');
            strong.classList.add('active');
            passwordStrengthText.textContent = 'Your password is strong';
            passwordStrengthText.classList.add('strong');
        } else {
            strong.classList.remove('active');
            passwordStrengthText.classList.remove('strong');
        }
        
    } else {
      indicator.style.display = 'none';
      passwordStrengthText.style.display = 'none';
    }
}

function calculatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) {
        strength++;
    }

    if (password.match(/[a-z]+/)) {
        strength++;
    }

    if(password.match(/[A-Z]+/)) {
        strength++;
    }

    if(password.match(/[0-9]+/)) {
        strength++;
    }

    if(password.match(/[!@#$%^&*]+/)) {
        strength++;
    }

    if(password.length > 12) {
        strength++;
    }

    if(strength <= 2) {
        return 'Weak';
    } else if(strength <= 4) {
        return 'Moderate';
    } else {
        return 'Strong';
    }
}

passwordInput.addEventListener('keydown', checkPasswordStrength);

btnPassword.onclick = function(){
    if(passwordInput.type == 'password') {
        passwordInput.type = 'text';
        btnPassword.textContent = 'HIDE';
        btnPassword.style.color = '#23ad5c';
    } else {
        passwordInput.type = 'password';
        btnPassword.textContent = 'SHOW';
        btnPassword.style.color = '#000';
    }
}

btnPasswordConirm.onclick = function(){
    if(confirmPasswordInput.type == 'password') {
        confirmPasswordInput.type = 'text';
        btnPasswordConirm.textContent = 'HIDE';
        btnPasswordConirm.style.color = '#23ad5c';
    } else {
        confirmPasswordInput.type = 'password';
        btnPasswordConirm.textContent = 'SHOW';
        btnPasswordConirm.style.color = '#000';
    }
}
