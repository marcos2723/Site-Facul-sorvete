var recipenteAtivo = document.querySelector(".active");
console.log(recipenteAtivo);

function passaSlide() {
  var proximo = document.getElementById(Number(recipenteAtivo.id) + 1);
  proximo.classList = 'active';
  recipenteAtivo.classList = '';
  recipenteAtivo = proximo;
}


function voltaSlide() {
  var anterior = document.getElementById(Number(recipenteAtivo.id) - 1);
  anterior.classList = 'active';
  recipenteAtivo.classList = '';
  recipenteAtivo = anterior;
}




const recipientes = document.querySelectorAll(".amostragem-r li");
recipientes.forEach(recipiente => {
  recipiente.addEventListener('click', clicaSlide)
})

function clicaSlide(event){
  var target = event.target;
  var parent = target.parentElement;
  var alvo = document.getElementById(parent.id)
  alvo.classList = 'active';
  recipenteAtivo.classList = '';
  recipenteAtivo = alvo;
}