const Hammenu = document.querySelector('.Ham-menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');
const Item1 = document.querySelector('#nav-item1');
const Item2 = document.querySelector('#nav-item2');
const Item3 = document.querySelector('#nav-item3');


        Hammenu.addEventListener('click', ()=> {
            nav.classList.add('open-nav')
        })

        Item1.addEventListener('click', ()=>{
            nav.classList.remove('open-nav')
        })

        Item2.addEventListener('click', ()=>{
            nav.classList.remove('open-nav')
        })

        Item3.addEventListener('click', ()=>{
            nav.classList.remove('open-nav')
        })

        close.addEventListener('click', ()=> {
            nav.classList.remove('open-nav')
        })
   

    