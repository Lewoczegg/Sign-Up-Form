const form = document.getElementById('myForm');
const inputRows = document.querySelectorAll('.input-row');
const btn = document.querySelector('.btn');

btn.addEventListener('click', event => {
    console.log(event);
    event.preventDefault();

    let isValid = true;

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