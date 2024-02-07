const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click' , ()=>{

    question.innerHTML = "I love you Mina❤︎ "
    gif.src = "img/giphy2.gif"
    let btnGroup = document.querySelector('.bt-group').remove()
})

noBtn.addEventListener('mouseover' , ()=>{
    let noBtnRec = noBtn.getBoundingClientRect();
    let maxX = window.innerWidth - noBtnRec.width;
    let maxY = window.innerHeight - noBtnRec.height;

    let randomX = Math.floor(Math.random() * maxX)
    let randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + 'px'
    noBtn.style.top = randomY + 'px'

})