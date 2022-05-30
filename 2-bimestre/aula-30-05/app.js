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
        if (age > 0 && age < 5) return 'bebê'; // bebê
        if (age >= 5 && age < 10) return 'criança'; // criança
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
        let src;

        if (ageGroup === 'bebê') src = `./img/${gender}/1.png`;
        if (ageGroup === 'criança') src = `./img/${gender}/2.png`;
        if (ageGroup === 'pré-adolescente') src = `./img/${gender}/3.png`;
        if (ageGroup === 'adolescente') src = `./img/${gender}/4.png`;
        if (ageGroup === 'adulto') src = `./img/${gender}/5.png`;
        
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
        if (inputBirthYear <= 0) return;
        let ageGroup = checkAgeGroup(inputBirthYear);
        
        console.log({inputBirthYear, ageGroup, gender})

       
        // Image source by age and gender
        let imageSource = selectImage(ageGroup, gender);
        outputImage.src = imageSource;
        
        // Texts
        outputTitle.textContent = "Obrigado!";
        gender = gender == 'masc' ? 'rapaz' : 'moça';
        outputText.textContent = `Você é um(a) ${gender} e tem ${inputBirthYear} anos, logo é um(a) ${ageGroup}.`;
        
    }
})();
