function verificar(tipo, Num) {
    //variavel que escolhe o valor do numero digitado.
    var num = Num.value;
    //verifica se o usuario escolheu decimal.
    if (tipo.value == 'decimal') {
        //mostra no <p> a String binario.
        document.getElementById('result').innerText = (Number(num)).toString(2);
    } else {
        //variavel que recebe o binario transformado em decimal.
        let decimal = 0;
        if (num[0] == '-') {
            //remove o traço(-) e transforma em um array inteiro.
            let myFunc = num => String(num);
            var StringArr = Array.from(num, myFunc);
            StringArr.splice(0,1)
            let Int = parseInt(StringArr.join(''))
            let myFunc02 = Int => parseInt(Int);
            let IntArr = Array.from(String(Int), myFunc02);
            let binario = IntArr

            //laço que encontra o tamanho do numero digitados.
            for (let i = 0; i < binario.length; i++) {
                decimal += Math.pow(2, i) * binario[binario.length - i - 1];
            }
            //adiciona o traço(-) e depois o numero em decimal.
            document.getElementById('result').innerText = '-' + decimal.toString(); 
        } else {
            //laço que encontra o tamanho do numero digitados.
            for (let i = 0; i < num.length; i++) {
                decimal += Math.pow(2, i) * num[num.length - i - 1];
            }
            //adiciona o numero em decimal.
            document.getElementById('result').innerText = decimal;
        }
    }
}

function limpar(tipo) {
    document.getElementById('num').value = null;
    document.getElementById('result').innerText = null;

    if(tipo.value == 'decimal'){
        //h1 do titulo.
        document.getElementById('title').innerHTML = "Conversor de Decimal para Binario";
    } else {
        //h1 do titulo.
        document.getElementById('title').innerHTML = "Conversor de Binario para Decimal";
    }
}