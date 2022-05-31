(() => {
    const birthYear = document.querySelector('input#ano'),
          inputMasc = document.querySelector('input#masculino'),
          inputFem = document.querySelector('input#feminino'),
          outputImage = document.querySelector('figure img'),
          outputTitle = document.querySelector('.output h2'),
          outputText = document.querySelector('.output p'),
          form = document.querySelector('.form form');
    ;
    
    const checkAgeGroup = age => {
        if (!age) return; // falsy value
        if (age > 0 && age < 4) return 'bebê'; // bebê
        if (age >= 4 && age < 10) return 'criança'; // criança
        if (age >= 10 && age < 14) return 'pré-adolescente'; // pré-adolescência
        if (age >= 14 && age < 19) return 'adolescente'; // adolescência
        if (age >= 19) return 'adulto'; // adulto
    }
    
    const checkGender = (masc, fem) => {
        if (masc.checked == true) return masc.value;
        if (fem.checked == true) return fem.value;
        return undefined;
    }

    const selectImage = (ageGroup, gender) => {
        let src, ageList = ['bebê', 'criança', 'pré-adolescente', 'adolescente', 'adulto'];

        ageList.forEach((element, index) => {
            if (ageGroup === element) {
                src = `./img/${gender}/${index+1}.png`;
            }
        })
        
        return src;
    }
    
    form.onsubmit = e => {
        e.preventDefault();
    
        let inputBirthYear = Number(birthYear.value);
        let currentYear = new Date().getFullYear(); 
        
        // Gênero
        let gender = checkGender(inputMasc, inputFem);
        
        if (!inputBirthYear || !gender) return; // falsy value
    
        // Faixa etária
        inputBirthYear =  currentYear-inputBirthYear;
        if (inputBirthYear <= 0) {
            outputImage.src = "./img/oops.svg";
            outputTitle.textContent = "Oops!";
            outputText.textContent = "Informe os dados de uma pessoa que tenha pelo menos 1 ano.";
            return;
        };
        let ageGroup = checkAgeGroup(inputBirthYear);
        
        // Image source by age and gender
        let imageSource = selectImage(ageGroup, gender);
        outputImage.src = imageSource;
        
        // Texts
        outputTitle.textContent = "Obrigado!";
        gender = gender == 'masc' ? 'masculino' : 'feminino';
        outputText.textContent = `Os dados indicam um ${ageGroup} de ${inputBirthYear} ano(s) do sexo ${gender}.`;
        
    }
})();
