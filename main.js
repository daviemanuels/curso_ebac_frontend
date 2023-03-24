const form = document.getElementById('form-validation');
let formEValido = false

function validaCampos(campoA, campoB) {
    return parseFloat(campoB) > parseFloat(campoA);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputOne = document.getElementById('numberOne');
    const inputTwo = document.getElementById('numberTwo');
    const successMessage = `O número <b>${inputTwo.value}</b> é maior do que <b>${inputOne.value}</b>`;
    const errorMessage = `O número <b>${inputTwo.value}</b> é menor do que <b>${inputOne.value}</b>.`;
    const containerMensagemSucesso = document.querySelector('.messageSuccess');
    const containerMensagemErro = document.querySelector('.errorMessage');

    formEValido = validaCampos(inputOne.value, inputTwo.value);
    if(formEValido) {       
        containerMensagemSucesso.innerHTML = successMessage;
        containerMensagemSucesso.style.display = 'block';

        inputOne.value = '';
        inputTwo.value = '';
        containerMensagemErro.style.display = 'none'
    } else {       
        containerMensagemErro.innerHTML = errorMessage;
        containerMensagemErro.style.display = 'block';

        inputOne.value = '';
        inputTwo.value = '';
        containerMensagemSucesso.style.display = 'none'
    }
})

