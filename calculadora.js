
const teclado = ["7","8","9","*","4","5","6","/","1","2","3","+","C","0","=","-"];
var visor = ''
var divResultado = document.createElement("div")
divResultado.setAttribute("id","dados")
container.appendChild(divResultado)
divResultado.innerHTML=''   

function Visor(valor){
    visor+=valor
    divResultado.innerHTML= visor
}

function Visor(numero){
    lastclick=numero
    if(resultado==divResultado.innerHTML){
        divResultado.innerHTML=numero
    }else{
    divResultado.innerHTML+= numero
    }
}
function operacao(op){
    if(lastclick!=op){
        lastclick=op
        if(valor1!=null && divResultado.innerHTML!=''){
            valor2=divResultado.innerHTML
            if(operador=="+"){
                resultado=parseFloat(valor1)+parseFloat(valor2)
            }else
            if(operador=="-"){
                resultado=parseFloat(valor1)-parseFloat(valor2)
            }else
            if(operador=="*"){
                resultado=parseFloat(valor1)*parseFloat(valor2)
            }else
            if(operador=="/"){
                if(valor2=="0"){
                    resultado="Impossível fazer essa divisao"
                }else{
                    resultado=parseFloat(valor1)/parseFloat(valor2)               
                }
            }
            divResultado.innerHTML=resultado
            if(op=="=" ){
                valor1=null
                operador=null
            }else{
                valor1=resultado
                operador=op
            }
        }
    }
}

for (let i = 0; i < teclado.length; i++){
    var input = document.createElement("input")
    input.setAttribute("id",`${teclado[i]}`)
    input.setAttribute("type","submit")
    input.setAttribute("name","botao")
    input.setAttribute("value",`${teclado[i]}`)
    input.setAttribute("onclick",`Visor('${teclado[i]}')`)
    if (i%4==0){
        var qtd = qtd+1
    }
    if(teclado[i] == "+" || 
       teclado[i] == "*" ||
       teclado[i] == "-"||
       teclado[i] == "/"||
       teclado[i] == "="){
        input.setAttribute("onclick",`operacao('${teclado[i]}')`)
    }else 
    if(teclado[i] == "C"){
        input.setAttribute("onclick",`reset('${teclado[i]}')`)}
    else{
        input.setAttribute("onclick",`Visor('${teclado[i]}')`)}
    if (i%4==0){
        var linha = document.createElement("div")
        linha.setAttribute("id",`${i/4}`)}
    linha.appendChild(input)
    container.appendChild(linha)
}









