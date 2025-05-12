let ciao = 'ciao'
console.log(ciao)


const myButton = document.getElementById('button')
const myName = document.getElementById('testo')
const input = document.querySelector('input')



function saluto (){

  console.log(input.value)
  myName.innerHTML = input.value
}

myButton.addEventListener('click', ()=> {
  saluto();
})

let numero = document.getElementById('numero')
const contatore = document.getElementById('contatore')
const diminuire = document.getElementById('clicco')
const aumentare = document.getElementById('clicca')
let valore = 0



function counterpiu(){

 
  valore++;
  numero.innerHTML = valore
  contatore.innerHTML = valore

}

function countermeno(){
  valore--;
  numero.innerHTML = valore
  contatore.innerHTML = valore
  if (valore < 0){
    numero.innerHTML = 0
    contatore.innerHTML = 0
  }
  
  
}

diminuire.addEventListener ('click', ()=>{
  countermeno();
})
aumentare.addEventListener ('click', ()=>{
  counterpiu();
})