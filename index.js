
        function transformaArray(endereco){
            let array = endereco.split(" "); 

            if(array.length == 2){
                if(!isNaN(array[0][0])){
                    let aux = array[0];
                    array[0] = array[1];
                    array[1] = aux;
                }
                console.log(endereco, "->", array);
            }
            else{

            

            let endereco = ""
            let numero = ""
            let tamanho = array.length;

            for( let i = 0; i< tamanho; i++){
                let valor = array[i];
                let valor2 = array[tamanho - 2]
                
                if (!isNaN(valor[0])){
                    numero = valor;

                    if (!isNaN(valor2)){
                    numero = valor2 + " " + array[tamanho - 1]
                    array[tamanho - 1] = ""
                }
            }

                else{
                    endereco += " " + valor;
                }
            }
        
            array.length = 2
            array[0] = endereco
            array[1] = numero
        
        console.log(endereco, "->", array)
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
    
