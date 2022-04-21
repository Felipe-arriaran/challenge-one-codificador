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

    document.getElementById("resultado").value =newstr;
}

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
    document.getElementById("resultado").value =newstr;
}