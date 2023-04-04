const form = document.getElementById('myForm');
const inputRows = document.querySelectorAll('.input-row');
const btn = document.querySelector('.btn');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password-confirm');

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
            inputRow.classList.remove("focused");
          }
    });
});