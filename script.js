const container = document.querySelector(".form-wrapper")

document.querySelector(".order-button").addEventListener('click', ()=>{
    container.classList.add('change');
})
document.querySelector(".cancel-button").addEventListener('click', ()=>{
    container.classList.remove('change');
})
