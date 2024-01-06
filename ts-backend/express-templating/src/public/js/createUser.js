const errorContainer = document.querySelector('#createErrorMsg');
const inputs = document.querySelectorAll('#createForm input');

inputs.forEach(x => {
    x.addEventListener('focusout', (e) => {
        if (e.target.value == '') {
            errorContainer.textContent = 'ALL FIELDS ARE REQUIRED!!!';
            setTimeout(() => {
                errorContainer.textContent = '';
            }, 4000);
        }
    });
})