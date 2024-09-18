document.getElementById('calcular').addEventListener('click', function() {
    let numerosInput = document.getElementById('numeros').value;

    if (numerosInput) {
        let numeros = numerosInput.split(',').map(Number);
        
        let media = calcularMedia(numeros);
        let moda = calcularModa(numeros);
        let mediana = calcularMediana(numeros);
        
        document.getElementById('media').textContent = media;
        document.getElementById('moda').textContent = moda;
        document.getElementById('mediana').textContent = mediana;
        
        document.getElementById('resultados').style.display = 'block';
    }
});

function calcularMedia(numeros) {
    let soma = numeros.reduce((a, b) => a + b, 0);
    return (soma / numeros.length).toFixed(2);
}

function calcularModa(numeros) {
    let frequencia = {};
    numeros.forEach(num => frequencia[num] = (frequencia[num] || 0) + 1);
    let moda = Object.keys(frequencia).reduce((a, b) => frequencia[a] > frequencia[b] ? a : b);
    return moda;
}

function calcularMediana(numeros) {
    numeros.sort((a, b) => a - b);
    let meio = Math.floor(numeros.length / 2);
    return numeros.length % 2 === 0 ? ((numeros[meio - 1] + numeros[meio]) / 2).toFixed(2) : numeros[meio];
}
