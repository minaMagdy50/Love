const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click' , ()=>{

    question.innerHTML = "Yayyyyy!! "
    gif.src = "img/giphy4.gif"
     gif.classList.add('pt-5')
     question.classList.add('text-center')
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