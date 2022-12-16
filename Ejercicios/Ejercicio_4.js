const revealBtn=document.querySelector('.btn-Mostrar');
const hideBtn=document.querySelector('.btn-Terminar');

const hiddenContent = document.querySelector('.espacio_formulario');

function revealContent(){
    // if(hiddenContent.classList.contains('btn-Mostrar')){
    //     hiddenContent.classList.remove('btn-Mostrar')
    // } else {
    //     hiddenContent.classList.add('btn-Mostrar')
    // }
    hiddenContent.classList.add('btn-Mostrar')
}

function hideContent(){
    // if(hiddenContent.classList.contains('btn-Mostrar')){
    //     hiddenContent.classList.remove('btn-Mostrar')
    // } else {
    //     hiddenContent.classList.add('btn-Mostrar')
    // }
    hiddenContent.classList.remove('btn-Mostrar')
}

revealBtn.addEventListener('click',revealContent);
hideBtn.addEventListener('click',hideContent);