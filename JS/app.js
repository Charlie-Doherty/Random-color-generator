const generate = document.querySelector('#generate').addEventListener('click', generateColor);     
const hex = document.querySelector('#hex');
const fadeText = document.querySelector('.overlay');

function generateColor() {
    const symbols = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0;i < 6;i++){
        color += symbols[Math.floor(Math.random() * symbols.length)];
    }
    document.body.style.background = color;
    hex.value = color;
    fadeText.style.background = color;
}

const copy = document.querySelector('#copy').addEventListener('click', copyColor);
function copyColor(){
    hex.select();
    hex.setSelectionRange(0,9999);
    document.execCommand('copy');

    fadeText.classList.toggle('animate');
    
    setTimeout(() => {
        fadeText.classList.toggle('animate');
    },3000);
}