const msg = document.querySelector('#Msg');
const start = document.querySelector('#Start');

start.addEventListener('click' , (e)=>{
    msg.innerHTML = "Entering Arena ..."
    window.location.href = "Select_page.html"
})