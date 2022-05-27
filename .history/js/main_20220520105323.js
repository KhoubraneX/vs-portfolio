// general
let box = document.querySelector(".box");
let win = document.querySelector(".website");
let liIcone = document.querySelectorAll(".nav-left .icon li");



// active left
liIcone.forEach((x) => {
    x.addEventListener("click", () => {
    // refrese
    refLi()
    // event project

    x.classList.toggle("active-li");

    // section event
    if (x.classList.contains("work") && getComputedStyle(box).display == "none") {
      // refrech page
      if (getComputedStyle(iframe).display != "block") {
        refsec();
      }
      box.style.display = "block";
      win.setAttribute("style","left: calc(70px + 260px) ; width: calc(100% - 70px - 260px);");
    } else {
      box.style.display = "none";
      win.setAttribute("style", "left: 70px ; width: calc(100% - 70px);");
    }

    //skills event
    let skills = document.querySelector(".skills");
    if (x.classList.contains("skills-li")) {                                                                          
      refsec();
      animtion();
      skills.setAttribute("style", "display:block;");
    }
    //contact event
    let contact = document.querySelector('.contact')
    if (x.classList.contains("contact-li")){
      refsec();
      animtion();
      contact.setAttribute("style", "display:flex;");
    }
  });
});

//bootm active about
let aboutsec = document.querySelector('.about')
let manage = document.querySelector('.manage-li')
document.querySelectorAll('.icon-b li').forEach(function(li){
    li.addEventListener('click', function(){
        if (this.classList.contains('about-li')){
            refLi()
            refsec();
            animtion();
            // display box
            aboutsec.setAttribute('style','display:block;');
          };
          if (this.classList.contains('manage')){
            if (getComputedStyle(manage).display == "none"){
              manage.style.display = "block"
            }else{
              manage.style.display = "none"
            }
          }
          box.style.display = "none";
          win.setAttribute("style", "left: 70px ; width: calc(100% - 70px);");
    });
});

// list manage color theme
let colorThemeList = document.querySelector('.bar-manage')
manage.firstElementChild.addEventListener('click', ()=> {
  if (getComputedStyle(colorThemeList).display == "none"){
    colorThemeList.style.display = "flex"  
    manage.style.display = 'none'
  }else {
    colorThemeList.style.display = "none"
  }
})
// list mange color theme keyboard
window.addEventListener('keydown' , function(e){
  if (getComputedStyle(colorThemeList).display != "none"){
    console.log(e.key);
      switch (e.key){
          case "ArrowUp":
            colorThemeList.querySelectorAll("ul li").forEach((e)=>{
              // e.classList.remove('active-li-manage')
              // e.setAttribute('name','')
            })
            colorThemeList.querySelector('ul li[name="active-theme"]').previousElementSibling.classList.toggle('active-li-manage')
            // colorThemeList.querySelector('ul li.active-li-manage').setAttribute('name','active-theme')
            break;
      }
  }
})

// function refrse sec
function refsec() {
  Array.from(win.children).forEach((x) =>
    x.setAttribute("style", "display:none;")
  );
}

// function refresh li
function refLi(){
  liIcone.forEach((x2) => x2.classList.remove("active-li"));
}

// function animtion loading

function animtion() {
  let animsec = document.querySelector(".anim-sk");
  animsec.setAttribute("style", "display:flex;");
  setTimeout(function () {
    animsec.setAttribute("style", "display:none;");
  }, 2000);
}

// hide/show list
let btnshow = document.querySelector(".filter-b");
let bar = document.querySelector(".filter-b .bar");
btnshow.addEventListener("click", () => {
  if (getComputedStyle(bar).display == "none") {
    btnshow.setAttribute(
      "style",
      "background-color: #3d3d3d;border-radius: 10px;"
    );
    bar.style.display = "block";
  } else {
    btnshow.setAttribute("style", "background-color: none;");
    bar.style.display = "none";
  }
});

// ifarm website
let iframe = document.querySelector(".website iframe.web");
let btnLi = document.querySelectorAll(".cart-work ul li");
btnLi.forEach((x) => {
  x.addEventListener("click", () => {
    animtion();
    document.querySelector(".title").textContent = x.textContent;
    iframe.style.display = "block";
    iframe.src = `https://maroine619.github.io/${x.className}/`;
    if (getComputedStyle(win).display == "none") {
      win.style.display = "block";
    }
  });
});

// filtter
let btnFilter = document.querySelectorAll(".bar li");
btnFilter.forEach((x) => {
  x.addEventListener("click", function () {
    if (getComputedStyle(x.firstChild.firstChild).visibility == "hidden") {
      x.firstChild.firstChild.setAttribute("style", "visibility:visible;");
      btnLi.forEach((li) => {
        if (x.getAttribute("data-filter") == li.getAttribute("data-filter")) {
          li.setAttribute("style", "display:block;");
        }
      });
    } else {
      x.firstChild.firstChild.setAttribute("style", "visibility: hidden;");
      btnLi.forEach((li) => {
        if (x.getAttribute("data-filter") == li.getAttribute("data-filter")) {
          li.setAttribute("style", "display:none;");
        }
      });
    }
  });
});

// check form

let NameV = document.querySelector('input[name="name"]')
let emailV = document.querySelector('input[name="email"]')
let regixN = /^[a-z ,.'-]+$/i
let regixE = /[a-zA-Z0-9]+@+[a-zA-Z-\.]+\.[a-zA-Z]+/

let btnsubmit = document.querySelector('form button')
btnsubmit.addEventListener('click',function(e){
  if (regixN.test(NameV.value) == true && regixE.test(emailV.value) == true){
    document.querySelector('form').submit()
  }else{
    if (regixN.test(NameV.value) == false && regixE.test(emailV.value) == false){
      NameV.setAttribute('style','outline:1px solid red;')
      emailV.setAttribute('style','outline:1px solid red;')
    }if(regixN.test(NameV.value) == false){
      NameV.setAttribute('style','outline:1px solid red;')
    }else{
      NameV.setAttribute('style','outline:none;')
    }if (regixE.test(emailV.value) == false){
      emailV.setAttribute('style','outline:1px solid red;')
    }else{
      emailV.setAttribute('style','outline:none;')
    }
    e.preventDefault()
  }
})
