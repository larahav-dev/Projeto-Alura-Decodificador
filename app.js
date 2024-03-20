const messageTextArea   = document.getElementById('message-textarea');
const resultTextArea    = document.getElementById('result-textarea');
const resultScreen      = document.getElementById('aside-result');
const homeScreen        = document.getElementById('aside-home');

let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function showHome() {
    resultScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

function showResult() {
    resultScreen.classList.remove('hidden');
    homeScreen.classList.add('hidden');
}

// ----- ----- Encriptar  ----- -----  //

function encriptar(str) { 
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (str.includes(matrizCodigo[i][0])) 
        str = str.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    } return str;
}

function btnEncriptar() {
    let str = messageTextArea.value;
    if(!str) { showHome(); return }

    resultTextArea.value =  encriptar(str);
    messageTextArea.value = '';
    showResult();
}

// ----- ----- Desencriptar  ----- -----  //

function desencriptar(str) { 
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (str.includes(matrizCodigo[i][0])) 
        str = str.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    } return str;
}

function btnDesencriptar() {
    let str = messageTextArea.value; 
    if(!str) { showHome(); return }

    resultTextArea.value = desencriptar(str);
    messageTextArea.value = '';
    showResult();
}

// ----- ----- Copiar ----- ----- //

const btnCopiar = () => navigator.clipboard.writeText(resultTextArea.value);