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
    ul.setAttribute("id", "navul");
     function list(array) {
        for (i in array) {
            let li = document.createElement("li");
            let lien = document.createElement("a");
            lien.innerText = index[i]
            lien.setAttribute('href', liens[i])
            li.appendChild(lien) 
            ul.appendChild(li);

            

        }
    
     }
     let liens = ["Accueil/accueil.html", "Restaurants.html", "A propos.html"]

     let index = ["Accueil", "Restaurants", "A propos"]
     list(index)

}
