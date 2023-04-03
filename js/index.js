const inputRows = document.querySelectorAll('.input-row');

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