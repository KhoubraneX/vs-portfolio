// general
const box = document.querySelector(".box");
const win = document.querySelector(".website");
const liIcone = document.querySelectorAll(".nav-left .icon li");
const cartWork = document.querySelector(".cart-work ul");
let iframe = document.querySelector(".website iframe.web");



// // get repos from github api

let requestPromise = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest()
  request.onload = () => {
    if (request.readyState == 4 && request.status == 200) {
      resolve(JSON.parse(request.responseText))
    } else {
      reject(Error("repos Not found"))
    }
  }
  request.open("GET", "https://api.github.com/users/maroine619/repos")
  request.send()
})
  .then(resolve => getNameRepos(resolve))
  .then(buils => iframWEb())


function getNameRepos(data) {
  for (let repos of data) {
    let li = document.createElement("li")
    li.className = "wo"
    cartWork.appendChild(li)
    let svg = '<p><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/></svg>'
    if (repos["language"] == "JavaScript") {
      svg = '<p><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-filetype-js" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.186 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .255.384c.07.049.153.087.249.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.528-.422.224-.1.483-.149.776-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.218.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-3.104-.033A1.32 1.32 0 0 1 0 14.791h.765a.576.576 0 0 0 .073.27.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164.092-.11.138-.265.138-.466v-2.745h.79v2.725c0 .44-.119.774-.357 1.005-.236.23-.564.345-.984.345a1.59 1.59 0 0 1-.569-.094 1.145 1.145 0 0 1-.407-.266 1.14 1.14 0 0 1-.243-.39Z"/></svg>'
    } else if (repos["language"] == "PYTHON") {
      svg = '<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-py" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z"/></svg>'
    } else if (repos["language"] == "PHP") {
      svg = '<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-php" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.295.185.522Zm4.48 2.666V11.85h-.79v1.626H4.153V11.85h-.79v3.999h.79v-1.714h1.682v1.714h.79Zm.703-3.999h1.6c.288 0 .533.06.732.179.2.117.354.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.161.677-.106.199-.26.357-.463.474a1.452 1.452 0 0 1-.733.173H8.12v1.342h-.791V11.85Zm2.06 1.714a.795.795 0 0 0 .084-.381c0-.227-.061-.4-.184-.521-.123-.122-.294-.182-.513-.182h-.66v1.406h.66a.794.794 0 0 0 .375-.082.574.574 0 0 0 .237-.24Z"/></svg>'
    }
    if (repos["name"] != "vs-portfolio"){
        let name = `${repos["name"]}</p>`
        li.innerHTML += svg
        li.innerHTML += name
    }
  }
}

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
      win.setAttribute("style", "left: calc(var(--left-var) + 260px) ; width: calc(100% - var(--left-var) - 260px);");
    } else {
      box.style.display = "none";
      win.setAttribute("style", "left: var(--left-var) ; width: calc(100% - var(--left-var));");
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
    if (x.classList.contains("contact-li")) {
      refsec();
      animtion();
      contact.setAttribute("style", "display:flex;");
    }
    //sm event
    let sm = document.querySelector('.smedia')
    if (x.classList.contains("search-li")) {
      refsec();
      animtion();
      sm.setAttribute("style", "display:flex;");
    }
  });
});

//bootm active about
let aboutsec = document.querySelector('.about')
let manage = document.querySelector('.manage-li')
document.querySelectorAll('.icon-b li').forEach(function (li) {
  li.addEventListener('click', function () {
    if (this.classList.contains('about-li')) {
      refLi();
      refsec();
      animtion();
      // display box
      aboutsec.setAttribute('style', 'display:block;');
      win.setAttribute("style", "left: 70px ; width: calc(100% - 70px);");
    };
    if (this.classList.contains('manage')) {
      if (getComputedStyle(manage).display == "none") {
        manage.style.display = "block"
      } else {
        manage.style.display = "none"
      }
    }
  });
});

// input theme manage color theme
document.querySelector(".search input").addEventListener("keyup", (i) => {
  document.querySelectorAll(".theme-li li p").forEach((e) => {
    if (e.textContent.toString().toLowerCase().includes(i.target.value.toString().toLowerCase()) != true && i.target.value != "") {
      e.parentElement.style.display = "none"
    } else {
      e.parentElement.style.display = "flex"
    }
  })
})

// set color active li !!important

document.querySelector("li[data-theme='Dark']").className = "active-li-manage"
document.querySelector("li[data-theme='Dark']").setAttribute("name", "active-theme")

// list manage color theme
let colorThemeList = document.querySelector('.bar-manage')
manage.firstElementChild.addEventListener('click', () => {
  if (getComputedStyle(colorThemeList).display == "none") {
    colorThemeList.style.display = "flex"
    manage.style.display = 'none'
  } else {
    colorThemeList.style.display = "none"
  }
})

// list manage color (theme mouse) 
document.querySelectorAll(".theme-li li").forEach((e) => {
  e.addEventListener('click', function () {
    refrechLimanage("class")
    refrechLimanage("name")
    e.className = "active-li-manage"
    e.setAttribute("name", "active-theme")
    themePicker()
    colorThemeList.style.display = "none"
  })
})

// list manage color theme (keyboard)
window.addEventListener('keydown', function (e) {
  if (getComputedStyle(colorThemeList).display != "none") {
    switch (e.key) {
      case "ArrowUp":
        if (colorThemeList.querySelector('ul li[name="active-theme"]').previousElementSibling != null) {
          refrechLimanage("class")
          colorThemeList.querySelector('ul li[name="active-theme"]').previousElementSibling.classList.toggle('active-li-manage')
          refrechLimanage("name")
          colorThemeList.querySelector('ul li.active-li-manage').setAttribute('name', 'active-theme')
        } else {
          refrechLimanage("class")
          colorThemeList.querySelector('ul li:last-child').classList.toggle('active-li-manage')
          refrechLimanage("name")
          colorThemeList.querySelector('ul li.active-li-manage').setAttribute('name', 'active-theme')
        }
        themePicker()
        break;

      case "ArrowDown":
        if (colorThemeList.querySelector('ul li[name="active-theme"]').nextElementSibling != null) {
          refrechLimanage("class")
          colorThemeList.querySelector('ul li[name="active-theme"]').nextElementSibling.classList.toggle('active-li-manage')
          refrechLimanage("name")
          colorThemeList.querySelector('ul li.active-li-manage').setAttribute('name', 'active-theme')
        } else {
          refrechLimanage("class")
          colorThemeList.querySelector('ul li:first-child').classList.toggle('active-li-manage')
          refrechLimanage("name")
          colorThemeList.querySelector('ul li.active-li-manage').setAttribute('name', 'active-theme')
        }
        themePicker()
        break;

      case "Enter":
        colorThemeList.style.display = "none"
        themePicker()
        break;
    }
  }
})

// pick color from keyboard event
function themePicker() {
  if (colorThemeList.querySelector('ul li[name="active-theme"]').dataset.theme == "Dark") {
    document.body.className = ""
    window.localStorage.theme = ""
  }
  else if (colorThemeList.querySelector('ul li[name="active-theme"]').dataset.theme == "Monokai") {
    document.body.className = "Monokai"
    window.localStorage.theme = "Monokai"
  }
  else if (colorThemeList.querySelector('ul li[name="active-theme"]').dataset.theme == "shades-of-purple") {
    document.body.className = "shades-of-purple"
    window.localStorage.theme = "shades-of-purple"
  }
}


// pick color from localstorage
function themeLocalStorage() {
  if (window.localStorage.theme) {
    document.body.className = `${window.localStorage.theme}`
    refrechLimanage("class")
    refrechLimanage("name")
    document.querySelector(`li[data-theme='${window.localStorage.theme}']`).className = "active-li-manage"
    document.querySelector(`li[data-theme='${window.localStorage.theme}']`).setAttribute("name", "active-theme")
  }
}
themeLocalStorage()

// function to remove active className and name attr
function refrechLimanage(attr) {
  colorThemeList.querySelectorAll("ul li").forEach((e) => {
    e.setAttribute(`${attr}`, "")
  })
}

// function refrse sec
function refsec() {
  Array.from(win.children).forEach((x) =>
    x.setAttribute("style", "display:none;")
  );
}

// function refresh li
function refLi() {
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
function iframWEb() {
  let btnLi = document.querySelectorAll(".cart-work ul li");
  btnLi.forEach((x) => {
    x.addEventListener("click", () => {
      animtion();
      document.querySelector(".title").textContent = x.textContent;
      iframe.style.display = "block";
      iframe.src = `https://maroine619.github.io/${x.textContent}/`;
      if (getComputedStyle(win).display == "none") {
        win.style.display = "block";
      }
    });
  });
}

let y = iframe.contentWindow;

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
btnsubmit.addEventListener('click', function (e) {
  if (regixN.test(NameV.value) == true && regixE.test(emailV.value) == true) {
    document.querySelector('form').submit()
  } else {
    if (regixN.test(NameV.value) == false && regixE.test(emailV.value) == false) {
      NameV.setAttribute('style', 'outline:1px solid red;')
      emailV.setAttribute('style', 'outline:1px solid red;')
    } if (regixN.test(NameV.value) == false) {
      NameV.setAttribute('style', 'outline:1px solid red;')
    } else {
      NameV.setAttribute('style', 'outline:none;')
    } if (regixE.test(emailV.value) == false) {
      emailV.setAttribute('style', 'outline:1px solid red;')
    } else {
      emailV.setAttribute('style', 'outline:none;')
    }
    e.preventDefault()
  }
})
