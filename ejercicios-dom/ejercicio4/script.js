// 1.1 Añade un botón a tu html con el id btnToClick y el evento click.
const buttonClick = document.createElement('button');
buttonClick.id = 'btnToClick';
buttonClick.textContent = 'Hacer Click';
document.body.appendChild(buttonClick);

buttonClick.addEventListener('click', (event) => {
    console.log('Información del evento click:', event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
    console.log('Valor actual en focus:', event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
    console.log('Valor actualizado:', event.target.value);
});