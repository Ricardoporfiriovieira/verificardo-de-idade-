function clicou(){
    var nascimento = window.document.getElementById('nascimento')
    var ano = new Date().getFullYear()
    var idade = ano - Number(nascimento.value)
    var resultado = window.document.querySelector('div#resultado')

    var sexo = window.document.getElementsByName('sexo')
    var genero = ''
    var img = document.createElement('img')

    console.log(idade)
    
    if (sexo[0].checked) {
        genero = 'Masculino'
        if (idade <= 0){
            resultado.innerHTML = 'Data de nascimento inválida.'
        }else if(idade <= 13){
            resultado.innerHTML = 'Você ainda é uma criança.'
            img.setAttribute('src', 'crianca-masculino-400.jpg')
        }else if(idade <= 17){
           resultado.innerHTML = 'Você é um adolescente.'
           img.setAttribute('src', 'adolescente-masculino-400.jpg')
        }else if(idade <= 50){
           resultado.innerHTML = 'Você é um Adulto.' 
           img.setAttribute('src', 'adulto-400.jpg')
        }else {
           resultado.innerHTML = 'Você é um Idoso.'
           img.setAttribute('src', 'idoso-400.jpg')
        }
    }else{
        genero = 'Feminino'
        if (idade <= 0){
            resultado.innerHTML = `Data de nascimento inválida.`
        }else if(idade <= 13){
            resultado.innerHTML = 'Você ainda é uma criança.'
            img.setAttribute('src', 'crianca-feminino-400.jpg')
        }else if(idade <= 17){
           resultado.innerHTML = 'Você é um adolescente.'
           img.setAttribute('src', 'adolescente-feminino-400.jpg')
        }else if(idade <= 50){
           resultado.innerHTML = 'Você é um Adulto.'
           img.setAttribute('src', 'adulta-400.jpg')
        }else {
           resultado.innerHTML = 'Você é um Idoso.'
           img.setAttribute('src', 'idosa-400.jpg')
        }
    }

    resultado.innerHTML += ` Detectamos uma pessoa do gênero ${genero} e com ${idade} anos de idade`
    resultado.appendChild(img)
   
}