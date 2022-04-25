const form = document.querySelector('form'),
      input = document.querySelector('input'),
      result = document.querySelector('.result')
;

form.onsubmit = e => {
    e.preventDefault();

    let vel = Number(input.value);

    result.innerHTML = `Sua média de velocidade foi de <b>${vel} km/h</b>. `
    if(vel && vel > 60){
        result.innerHTML += `Como você ultrapassou o limite, será <b>multado</b>.`;
        result.classList.add('visible');
    }
}