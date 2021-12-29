var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = document.querySelector(".info-imc");
tdImc.textContent = imc.toFixed(2); 

var validaPeso = true;
var validaAltura = true;

if (peso <= 0 || peso >= 300) {
      console.log("Peso Inválido")
      tdImc.textContent = "Peso Inválido";
      validaPeso = false;
}

if (altura <= 1 || altura >= 3) {
      console.log("Altura Inválido")
      tdImc.textContent = "Altura Inválida";
      validaAltura = false;
}