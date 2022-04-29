const barra = document.querySelector('.lateral');
const btncopy = document.querySelector('.button');

//FUNCION PARA MOSTRAR BOTON DE COPIAR TEXTO ENCRIPTADO 
function mostrarBoton() {
  btncopy.classList.add('button2');
}
//FUNCION PARA OCULTAR BOTON DE COPIAR TEXTO ENCRIPTADO
function ocultarBoton() {
  btncopy.classList.remove('button2');
}


//LLAMADA DE FUNCION PARA VALIDAR SOLO MINUSCULAS SIN ACENTO
document.getElementById("mensaje").oninput = soloLetras

//FUNCION PARA MOSTRAR REMOVER IMAGEN Y DEJAR SOLO RESULTADO
function mostrarResultado() {
  barra.classList.add('con-resultado');
}
//FUNCION PARA REMOVER EL RESULTADO Y VOLVER A MOSTRAR LA IMAGEN
function ocultarResultado() {
  barra.classList.remove('con-resultado');
}

//FUNCION PARA VALIDAR SOLO LETRAS MINUSCULAS SIN ACENTO
const letra = /[^a-z ]/g
function soloLetras(ev) {
  const { inputType, target, data } = ev
  // caso más frecuente
  if (inputType === 'insertText') {
    letra.lastIndex = 0
    if (letra.test(data)) {
      let value = target.value
      target.value = value.substring(0, value.length - 1)
      alert('solo letras minúsculas y sin acentos')
    }
  } else if(inputType === 'insertFromPaste') {
    let value = data || target.value || ''
    value = value.toLowerCase()
    target.value = value.replace(letra, '')
    if (target.value !== value) {
      alert('se ha modificado el texto para coincidir con los carácteres permitidos')
    }
  }
}

//funcion para encriptar
function encriptar() {
    let str= document.getElementById("mensaje").value;
    let re0 = /e/gi;
    let re1 = /i/gi;
    let re2 = /a/gi;
    let re3 = /o/gi;
    let re4 = /u/gi;
    let newstr = str;
    newstr = str.replace(re0, "enter");
    str=newstr;
    newstr= str.replace(re1, "imes");
    str=newstr;
    newstr= str.replace(re2, "ai");
    str=newstr;
    newstr= str.replace(re3, "ober");
    str=newstr;
    newstr= str.replace(re4, "ufat");
    document.querySelector(".resultado").textContent =newstr;
    document.getElementsByTagName("textarea")[0].value = "";

    mostrarResultado();
    mostrarBoton();

   if(newstr==""){
     ocultarResultado();
     ocultarBoton();
   }
}

//funcion para desencriptar
function desencriptar() {

    let str= document.getElementById("mensaje").value;
    let de0 = /enter/gi;
    let de1 = /imes/gi;
    let de2 = /ai/gi;
    let de3 = /ober/gi;
    let de4 = /ufat/gi;
    newstr = str.replace(de0, "e");
    str=newstr;
    newstr= str.replace(de1, "i");
    str=newstr;
    newstr= str.replace(de2, "a");
    str=newstr;
    newstr= str.replace(de3, "o");
    str=newstr;
    newstr= str.replace(de4, "u");
    document.querySelector(".resultado").textContent =newstr;
    document.getElementsByTagName("textarea")[0].value = "";
    mostrarResultado();
    mostrarBoton();
   if(newstr==""){
     ocultarResultado();
     ocultarBoton();
   }
}

//llamada del boton para encriptar
document.getElementById('encriptar').addEventListener("click",encriptar)
//llamada del boton para desencriptar
document.getElementById('desencriptar').addEventListener("click",desencriptar)



//funcion para copiar al porta papeles
function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  alert('copiado')
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

//FUNCIONES PARA EL AUTO-RESIZE DEL TEXT AREA
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}