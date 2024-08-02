const inputCheck = document.querySelector('#modo-noturno');

const body = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    body.setAttribute("data-bs-theme", modo)
})