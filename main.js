// active left
let box = document.querySelector('.box')
let win = document.querySelector('.website')
let liIcone = document.querySelectorAll('.nav-left .icon li')
liIcone.forEach((x)=>{
    x.addEventListener('click' , ()=>{
        liIcone.forEach(x => x.classList.remove('active-li'))
        x.classList.toggle('active-li')
        if (x.classList.contains('work') && getComputedStyle(box).display == 'none'){
            box.style.display = 'block'
            win.setAttribute('style' , 'left: calc(70px + 260px);width: calc(100% - 70px - 260px);')
        }else{
            box.style.display = 'none'
            win.setAttribute('style' , 'left: calc(70px );width: calc(100% - 70px);')
        }
    })
})
// box 


// hide/show list
let btnshow = document.querySelector('.filter-b')
btnshow.addEventListener('click',()=>{
    let f = document.querySelector('.filter-b .bar')
    if (getComputedStyle(f).display == 'none'){
        btnshow.setAttribute('style' , 'background-color: #3d3d3d;border-radius: 10px;')
        f.style.display = 'block'
    }else{
        btnshow.setAttribute('style' , 'background-color: none;')
        f.style.display = 'none'
    }
})

// 
let iframe = document.querySelector('.website iframe')
let btnLi = document.querySelectorAll('.cart-work ul li')
btnLi.forEach((x)=>{
    x.addEventListener('click',()=>{
        win.style.display  = "block"
        iframe.src = `https://maroine619.github.io/${x.className}/`
    })
})