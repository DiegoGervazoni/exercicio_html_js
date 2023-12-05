const form = document.getElementById("form");
const valorUm = document.getElementById("valorUm");
const valorDois = document.getElementById("valorDois");

function validarFormulario(valorUm, valorDois) {
  return Number(valorDois) > Number(valorUm);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formValid;

  const mensagemSucesso = `Valor Aceito! O segundo valor: ${valorDois.value} é maior que o primeiro valor: ${valorUm.value}`;
  const mensagemIgual = `Não aceito. O segundo valor: ${valorDois.value} é igual ao primeiro valor: ${valorUm.value}`;
  const mensagemMaior = `Não aceito. O primeiro valor: ${valorUm.value} é maior que o segundo valor: ${valorDois.value}`;

  formValid = validarFormulario(valorUm.value, valorDois.value);
  if (formValid) {
    alert(mensagemSucesso);

    valorUm.value = "";
    valorDois.value = "";
  } else if (valorUm.value === valorDois.value) {
    alert(mensagemIgual);

    valorUm.value = "";
    valorDois.value = "";
  } else {
    alert(mensagemMaior);

    valorUm.value = "";
    valorDois.value = "";
  }
});

console.log(form);
