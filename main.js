// general
let box = document.querySelector(".box");
let win = document.querySelector(".website");
let liIcone = document.querySelectorAll(".nav-left .icon li");

// active left
liIcone.forEach((x) => {
    x.addEventListener("click", () => {
    // refrese
    liIcone.forEach((x2) => x2.classList.remove("active-li"));
    // event project

    x.classList.toggle("active-li");

    // section event
    if (
      x.classList.contains("work") &&
      getComputedStyle(box).display == "none"
    ) {
      // refrech page
      if (getComputedStyle(iframe).display != "block") {
        refsec();
      }
      box.style.display = "block";
      win.setAttribute(
        "style",
        "left: calc(70px + 260px);width: calc(100% - 70px - 260px);"
      );
    } else {
      box.style.display = "none";
      win.setAttribute("style", "left: 70px;width: calc(100% - 70px);");
    }

    //skills event
    let skills = document.querySelector(".skills");
    if (x.classList.contains("skills-li")) {
      refsec();
      animtion();
      skills.setAttribute("style", "display:block;");
    }
  });
});

//bootm active
let aboutsec = document.querySelector('.about')
document.querySelectorAll('.icon-b li').forEach(function(li){
    li.addEventListener('click', function(){
        if (this.classList.contains('about-li')){
            refsec();
            animtion();
            aboutsec.setAttribute('style','display:block;');
        };
    });
});

// function refrse sec

function refsec() {
  Array.from(win.children).forEach((x) =>
    x.setAttribute("style", "display:none;")
  );
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
