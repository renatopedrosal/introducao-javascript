var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdPeso = paciente.querySelector(".info-peso");
      var tdAltura = paciente.querySelector(".info-altura");

      var tdImc = paciente.querySelector(".info-imc");

      var peso = tdPeso.textContent;
      var altura = tdAltura.textContent;

      var validaPeso = true;
      var validaAltura = true;

      if (peso <= 0 || peso >= 300) {
            console.log("Peso Inválido")
            tdImc.textContent = "Peso Inválido";
            validaPeso = false;
            paciente.classList.add("paciente-invalido");
      }

      if (altura <= 1 || altura >= 3) {
            console.log("Altura Inválida")
            tdImc.textContent = "Altura Inválida";
            validaAltura = false;
            paciente.classList.add("paciente-invalido");
      }

      if (validaPeso && validaAltura){
            var imc = peso / (altura * altura);
            tdImc.textContent = imc.toFixed(2);
            console.log(imc); 
      }
}