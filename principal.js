//ENCRIPTAR
const captura= document.querySelector("#captura");
const inputResultado= document.querySelector(".resultado");
let resultado= document.querySelector(".card2");
let ningunMensaje=document.querySelector(".card");
resultado.style.display="none";

//BOTÓN ENCRIPTAR
function btnEncriptar() {
    const textoEncriptado=encriptar(captura.value);
    inputResultado.value= textoEncriptado;
    resultado.style.display="block";
    ningunMensaje.style.display="none";
    alert("Texto encriptado");
}

//FUNCIÓN ENCRIPTAR
function encriptar(paraEncriptar){
    let matrizCodigo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for( let i=0; i<matrizCodigo.length; i++){
        if (paraEncriptar.includes(matrizCodigo[i][0])){
            paraEncriptar = paraEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return paraEncriptar;
}

//DESENCRIPTAR

//BOTÓN DESENCRIPTAR
function btnDesencriptar() {
    const textoDesencriptado=desencriptar(captura.value);
    inputResultado.value= textoDesencriptado;
    resultado.style.display="grid";
    ningunMensaje.style.display="none";
    alert("Texto desencriptado");
}

//FUNCIÓN DESENCRIPTAR
function desencriptar(paraDesencriptar){
    let matrizCodigo= [["enter", "e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]];
    for( let i=0; i<matrizCodigo.length; i++){
        if (paraDesencriptar.includes(matrizCodigo[i][0])){
            paraDesencriptar = paraDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return paraDesencriptar;
}

//COPIAR

//BOTÓN COPIAR
function btnCopiar() {
    inputResultado.select();
    inputResultado.setSelectionRange(0,99999);
    navigator.clipboard.writeText(inputResultado.value);
        alert ("¡Mensaje copiado al portapapeles!");
}

//Validar Input

const inputBlocked= document.querySelector("#captura");

inputBlocked.addEventListener("keypress", function(e){

    if (!checkChar(e)){
        e.preventDefault();
        alert("solo minúsculas sin acentos ni saltos de línea")
    }
})

function checkChar(e){
    const char= String.fromCharCode(e.keyCode);

    if (char.match("[a-z ]")) {
        return(true);
    }
}
