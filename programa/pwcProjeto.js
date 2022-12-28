const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Open')
});

app.listen(3500, () => {
    function transformaArray(endereco) {
        // Transforma a string em array
        let array = endereco.split(" ");
        const enderecoInicial = endereco;
        //Caso o endereço tenha apenas 2 campos
        if (array.length == 2) {
            // Caso o número esteja na frente do endereço, realizará a troca
            if (!isNaN(array[0][0])) {
                let aux = array[0];
                array[0] = array[1];
                array[1] = aux;
            }
            console.log(endereco, "->", array);
        }
        //Caso o endereço tenha mais de 2 campos
        else {
            let endereco = "";
            let numero = [];
            let tamanho = array.length;
            // Percorre o array para identificar onde existe número
            for (let i = 0; i < tamanho; i++) {
                let valor = array[i];
                let valor2 = array[tamanho - 2];
                // Se encontrar um número irá adiciona-lo em um array de números, e caso o valor numérico esteja acompanhado de algum caractere, adicionará também
                if (!isNaN(valor[0])) {
                    numero.push(valor);
                    // Aqui é para caso o número tenha algum caractere e ele esteja separado por espaço do valor numérico
                    if (!isNaN(valor2)) {
                        numero = [];
                        completo = valor2 + " " + array[tamanho - 1];
                        array[tamanho - 1] = "";
                        numero.push(completo);
                    }
                }
                // Caso o valor percorrido pelo for seja diferente de um número, irá apenas concatenar
                else {
                    endereco += valor + " ";
                }
            }
            // Para os casos em que só ocorre 1 número nos campos do endereço
            if (numero.length == 1) {
                array.length = 2;
                // Adiciona o endereco e o número para dentro do array
                array[0] = endereco;
                array[1] = numero[0];
            }
            // Para os casos em que ocorre mais de 1 número nos campos do endereço e restrito a apenas 4 campos, String + Número + String + Número
            else {
                array.length = 2;
                // Transformar o endereço em Array para poder concatena-lo com o número
                enderecoSeparado = endereco.split(" ");
                // Remover o último elemento do array, pois por conta da concatenação anterior sobra um elemento vazio
                enderecoSeparado.pop();
                // Concatena o endereço com o número
                endereco = enderecoSeparado[0] + " " + numero[0];
                numero = enderecoSeparado[1] + " " + numero[1];
                // Adiciona o endereco e o número para dentro do array
                array[0] = endereco;
                array[1] = numero;
            }
    
            console.log(enderecoInicial, "->", array);
    
        }
    }
    
    transformaArray("Miritiba 339");
    transformaArray("Babaçu 500");
    transformaArray("Cambuí 804B");
    transformaArray("Rio Branco 23");
    transformaArray("Quirino dos Santos 23 b");
    transformaArray("4, Rue de la République");
    transformaArray("100 Broadway Av");
    transformaArray("Calle Sagasta, 26");
    transformaArray("Calle 44 No 1991");
})