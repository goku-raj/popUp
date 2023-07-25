let popup = document.getElementById('popup');

let submitBtn = document.getElementById('submitBtn');
let closeBtn = document.getElementById('closeBtn');

submitBtn.addEventListener('click', ()=>{
    popup.classList.add('open-up');
});

closeBtn.addEventListener('click', ()=>{
    popup.classList.remove('open-up');
});