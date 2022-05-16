const applicationOutput = document.querySelector('[data-js="output"]');
const selectedNumber = Number(prompt('Escolha um número.'));
const doubledSelectedNumber = selectedNumber * 2;

const sequenceNumbers = [];

for(let i = selectedNumber; i <= doubledSelectedNumber; i++){
    sequenceNumbers.push(i);
    applicationOutput.textContent += `  ${i}  `;
}

applicationOutput.innerHTML += ` <br> ${JSON.stringify(sequenceNumbers)}`;
