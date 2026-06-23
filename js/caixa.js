const saldo = 500;
function depositar(a, b){
    let deposito = Number( document.getElementById( "inputValue" ).value );
    let saldo_novo = Number( document.getElementById( "inputValue" ).value );

    saldo_novo = deposito + saldo;

    console.log(saldo_novo);

    document.getElementById( "txtSaldo" ).innerHTML = "R$ " + saldo_novo;
}

function sacar(a, b){
   let saque = Number( document.getElementById( "inputValue" ).value );
    let saldo_novo = Number( document.getElementById( "inputValue" ).value );

    saldo_novo = saldo - saque;

    console.log(saldo_novo);

    document.getElementById( "txtSaldo" ).innerHTML = "R$ " + saldo_novo;

    if(saldo_novo < saque){
        alert("Saldo indisponivel para saque!");
    }else{
        alert("Saque efetuado com sucesso!");
    }
}


