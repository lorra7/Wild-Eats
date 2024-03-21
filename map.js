const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
    sidenav.classList.add("active");

}

function closeNav() {
    sidenav.classList.remove("active");
}

if (window.matchMedia("(min-width: 600px)").matches) {
    let diva = document.getElementById("diva")
    let ul = document.createElement("ul");
    diva.appendChild(ul);
    ul.setAttribute("class", "navul");
    ul.setAttribute("id", "navdesk");
     function list(array) {
        for (i in array) {
            let li = document.createElement("li");
            let lien = document.createElement("a");
            lien.innerText = index[i];
            lien.setAttribute('href', liens[i]);
            li.appendChild(lien);
            ul.appendChild(li);

        }
    
     }

    let liens = ["ACCUEIL/accueil.html", "Restaurants.html", "A propos.html"]
    
    let index = ["Accueil", "Restaurants", "A propos"]
    list(index)

} /*else {

  let ulli = document.getElementById("navdesk");
  console.log(ulli)
  ulli.classList.remove("navul");
  ulli.classList.add("hidden");
  console.log("toto")
}*/

let size = 0;
let newSize = 0;
if (window.matchMedia("(min-width: 600px)").matches) {

    size = 1;

} else {
    size = 2;
}

function compare() {
    if (window.matchMedia("(min-width: 600px)").matches) {

        newSize = 1;
    
    } else {
        newSize = 2;
    }

    if (size !== newSize) {

        return location.reload();
    }
}

setInterval("compare()", 100);