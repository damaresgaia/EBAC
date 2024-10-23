function validarFormulario(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos A e B
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        alert("Formulário válido! O número B é maior que o número A.");
    } else {
        alert("Formulário inválido. O número B deve ser maior que o número A.");
    }
}