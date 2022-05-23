const button = document.querySelector('button');
const img = document.querySelector('img');

let active = false;
button.onclick = () => {
    active = !active;
    img.src = active ? "./img/acesa.svg" : "./img/apagada.svg";
    button.textContent = active ? 'Apagar luz' : 'Acender luz';
}