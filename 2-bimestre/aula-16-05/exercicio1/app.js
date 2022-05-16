const applicationOutput = document.querySelector('[data-js="output"]');
const expectedNumbersChoice = Number(prompt('Quantos números deseja armazenar?'));

const userInsertedNumbers = [];

if(!isNaN(expectedNumbersChoice)){

    for(let i = 0; i < expectedNumbersChoice; i++){
        let insertedNumber = prompt(`Digite o ${i + 1}º número.`);
        userInsertedNumbers.push(insertedNumber);
    }
    
    const sortedInsertedNumbers = userInsertedNumbers.sort((a, b) => a - b);
    
    for(let index = 0; index < sortedInsertedNumbers.length; index++){
        const value = sortedInsertedNumbers[index];
        applicationOutput.textContent += index === 0 ? value : ` - ${value}`; 
    }

} else {
    applicationOutput.textContent = 'Insira um valor válido.'
}
