// active left
let box = document.querySelector('.box');
let win = document.querySelector('.website');
let liIcone = document.querySelectorAll('.nav-left .icon li');
liIcone.forEach((x)=>{
    x.addEventListener('click' , ()=>{
        // refrese
        liIcone.forEach(x2 => x2.classList.remove('active-li'));
        // event
        x.classList.toggle('active-li');
        if (x.classList.contains('work') && getComputedStyle(box).display == 'none'){
            box.style.display = 'block';
            win.setAttribute('style' , 'left: calc(70px + 260px);width: calc(100% - 70px - 260px);');
        }else{
            box.style.display = 'none';
            win.setAttribute('style' , 'left: calc(70px );width: calc(100% - 70px);');
        };
    });
});
// box 


// hide/show list
let btnshow = document.querySelector('.filter-b');
let bar = document.querySelector('.filter-b .bar');
btnshow.addEventListener('click',()=>{
    if (getComputedStyle(bar).display == 'none'){
        btnshow.setAttribute('style' , 'background-color: #3d3d3d;border-radius: 10px;');
        bar.style.display = 'block'
    }else{
        btnshow.setAttribute('style' , 'background-color: none;');
        bar.style.display = 'none';
    }
});

// ifarm website
let iframe = document.querySelector('.website iframe.web');
let btnLi = document.querySelectorAll('.cart-work ul li');
btnLi.forEach((x)=>{
    x.addEventListener('click',()=>{
        document.querySelector('.title').textContent = x.textContent
        iframe.style.display = 'block'
        iframe.src = `https://maroine619.github.io/${x.className}/`;
        if (getComputedStyle(win).display == 'none'){
            win.style.display = 'block'
        }
    });
});

// filtter 
let btnFilter = document.querySelectorAll('.bar li')
btnFilter.forEach((x)=>{
    x.addEventListener('click' , function(){
        if (getComputedStyle(x.firstChild.firstChild).visibility == 'hidden') {
            x.firstChild.firstChild.setAttribute('style' , 'visibility:visible;')
            btnLi.forEach((li)=>{
                if (x.getAttribute('data-filter') == li.getAttribute('data-filter')){
                    li.setAttribute('style' , 'display:block;')
                }
            })
        }else{
            x.firstChild.firstChild.setAttribute('style' , 'visibility: hidden;')
            btnLi.forEach((li)=>{
                if (x.getAttribute('data-filter') == li.getAttribute('data-filter')){
                    li.setAttribute('style' , 'display:none;')
                }
            })
        }
    })
})