let $cont = 0;

function verificar(tipo, Num) {
    var num = Num.value;
    if (tipo.value == 'decimal') {
        if (num[$cont] == 1 || num[$cont] == 2 || num[$cont] == 3 || num[$cont] == 4 || num[$cont] == 5 || num[$cont] == 6 || num[$cont] == 7 || num[$cont] == 8 || num[$cont] == 9) {
            if (num.length <= 8 && num < 256) {
                document.getElementById('result').innerText = null
                for (let i = 0; i < (8 - (Number(num)).toString(2).length); i++) {
                    document.getElementById('result').innerText += "0";
                }
                document.getElementById('result').innerText += (Number(num)).toString(2);
                $cont++
            } else {
                document.getElementById('result').innerText = "numero nâo pode ser maior que 255";
                $cont = 0;
            }
        } else {
            document.getElementById('result').innerText = "Dgite apenas numeros";
            $cont = 0;
        }
    } else {
        if (num[$cont] == 1 || num[$cont] == 0) {

            if (num.length == 8) {
                let decimal = 0;
                for (let i = 0; i < num.length; i++) {
                    decimal += Math.pow(2, i) * num[num.length - i - 1];
                }
                document.getElementById('result').innerText = decimal;
                $cont = 0;
            } else {
                document.getElementById('result').innerText = "Precisa ter 8 digitos";
                $cont++
            }
        } else {
            document.getElementById('result').innerText = "Numero invalido só é permitido 0 ou 1"
        }
    }
}



function limpar(tipo) {
    document.getElementById('num').value = null;
    document.getElementById('result').innerText = null;

    if (tipo.value == 'decimal') {
        document.getElementById('title').innerHTML = "Conversor de Decimal para Binario";
    } else {
        document.getElementById('title').innerHTML = "Conversor de Binario para Decimal";
    }
}
