var salvo = document.calc.visor;
var n1 = 0;
var operacao;
function botao( num ){
   salvo.value  += num ;
}

function reset()
{
    salvo.value = "";
    n1 = 0;
}

function resultado()
{  
    switch(operacao){
        case"+":
            soma();
            break;

        case"*":
            multiplicacao();
            break;

        case"/":
            divisao();
            break;

        case"-":
            subtracao();
            break;
                    

    }
}

function operar(_operacao)
{
    n1=salvo.value;
    operacao=_operacao;
    salvo.value="";
}

function divisao()
{
    salvo.value=n1/salvo.value;
}

function multiplicacao()
{
    salvo.value=n1*salvo.value;
}

function subtracao()
{
    salvo.value=n1-salvo.value;
}

function soma()
{
    salvo.value=+n1 + +salvo.value;
}
