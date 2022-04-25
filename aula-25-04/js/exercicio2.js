const form = document.querySelector('form'),
      input = document.querySelector('input'),
      result = document.querySelector('.result')
;

form.onsubmit = e => {
    e.preventDefault();

    let nacionalidade = input.value.toUpperCase();

    if(nacionalidade !== ""){
        result.innerHTML = `Seu país de origem é: <b>${nacionalidade}</b>, `
        if(nacionalidade == 'BRA'){
            result.innerHTML += `então, você é brasileiro.`;
        }else{
            result.innerHTML += `então, você é estrangeiro.`;
        }
    }else{
        result.innerHTML = `Insira um valor válido.`
    }
    result.classList.add('visible')
}

