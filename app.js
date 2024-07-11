let numeroSecreto= 0; //Se genera el numero secreto
let intentos=0;
let listaNumerosSorteados= [];
let numeroMaximo= 10;
let maximoDeIntentos= 3;
console.log(numeroSecreto);

function verificarIntento (){
    intentos++;
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    if (intentos<maximoDeIntentos){
        if(numeroDeUsuario===numeroSecreto){
            asignarTextoElemento('p',`Encontraste el numero secreto, era: ${numeroSecreto} y lo encontraste en ${intentos} ${intentos==1? 'intento': 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else{
            limpiarCaja();
            if (numeroDeUsuario>numeroSecreto){
                asignarTextoElemento('p', 'El numero secreto es menor.');
            }
            else{
                asignarTextoElemento('p', 'El numero secreto es mayor.')
               
            }
        }
        
        return;
    }else{
        asignarTextoElemento ('p', `Agotaste el numero de intentos que era: ${maximoDeIntentos}`);
        document.getElementById('intentar').setAttribute('disabled', 'true');
    }
   
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Generar nuevo numero aleatorio
    //Indicar mensaje de intervalo de numeros
     //Iniciar nuevamente el numero de intentos
    condicionesIniciales();
    //Desactivar boton de reiniciar juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
function condicionesIniciales(){
    asignarTextoElemento( 'h1', 'Este es el juego del numero secreto');
    asignarTextoElemento( 'p', `Indica un numero del 1 al ${numeroMaximo}`);
    intentos=0;
    numeroSecreto=generarNumeroSecreto();
}
condicionesIniciales();

function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
    
}
function asignarTextoElemento(elemento, texto){
    let titulo= document.querySelector(elemento);
    titulo.innerHTML=texto;    
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);
    if (listaNumerosSorteados.length== numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }   
    }
}

