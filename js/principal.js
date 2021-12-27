var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = document.querySelector(".info-imc");
tdImc.textContent = imc

if (peso <= 0 || peso >= 300) {
      tdImc.textContent = "Peso Inválido";
}

if