
function TextResult() {
    const text=document.getElementById('inputText').value;
    if(text==''){
        alert('No se agrega ningun texto')
    }else{
        const content=document.getElementById("content_div");
    content.style.display='block';
    content.style.textAlign='center';
    content.style.boxShadow='0 0 0.5rem 0 black';
    content.innerHTML="";
    const textarea=document.createElement('textarea');
    textarea.style.width='90%';
    textarea.style.boxSizing='border-box';
    textarea.style.height='81%';
    textarea.style.resize='none';
    textarea.style.border='none';
    textarea.style.textAlign='justify';
    textarea.style.padding='1rem';
    textarea.style.fontSize='1.1rem';
    textarea.style.backgroundColor='white';
    textarea.id='textarea';
    textarea.readOnly=true;
    textarea.disabled=false;
    content.appendChild(textarea);

    const boton=document.createElement('button');
    boton.className='button';
    boton.textContent='COPIAR';
    boton.style.marginTop='1.5rem'
    boton.onclick=copy;
    content.appendChild(boton)
    }
    
}
function copy(){
    let textarea=document.getElementById('textarea');
        textarea.select(); 
        textarea.setSelectionRange(0, textarea.value.length);
}



const encryptionDict = {
    'a': 'b',
    'b': 'c',
    'c': 'd',
    'd': 'e',
    'e': 'f',
    'f': 'g',
    'g': 'h',
    'h': 'i',
    'i': 'j',
    'j': 'k',
    'k': 'l',
    'l': 'm',
    'm': 'n',
    'n': 'o',
    'o': 'p',
    'p': 'q',
    'q': 'r',
    'r': 's',
    's': 't',
    't': 'u',
    'u': 'v',
    'v': 'w',
    'w': 'x',
    'x': 'y',
    'y': 'z',
    'z': 'a',
    ' ': ' ' 
};

const decryptionDict = Object.fromEntries(
    Object.entries(encryptionDict).map(([key, value]) => [value, key])
);

function encryptText() {
    const input = document.getElementById('inputText').value.toLowerCase();
    const result = input.split('').map(char => encryptionDict[char] || char).join('');
    document.getElementById('textarea').innerText =result;
}

function decryptText() {
    const input = document.getElementById('textarea').value;
    const result = input.split('').map(char => decryptionDict[char] || char).join('');
    document.getElementById('textarea').innerText = result;
}