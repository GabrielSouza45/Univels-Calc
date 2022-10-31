let resultado = document.getElementById("inputext");

let calcular = (number) => {
    resultado.value += number;
}

let Resultado = () => {
    try {
        resultado.value = eval(resultado.value)
    } catch (err) {
        alert('Digite um valor válido')
    }
}


function limpar() {
    resultado.value = " ";
}

function deletar() {
    resultado.value = resultado.value.slice(0, -1);
}