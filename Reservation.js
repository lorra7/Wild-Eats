const reserv = document.getElementsByClassName("card-button");
const popupRes = document.getElementById("popup");
for (let i = 0; i < reserv.length; i++) {
    reserv[i].addEventListener(('click'), () => {
        popupRes.classList.remove("hidden")
        popupRes.classList.add("customForm")
    })
}

const X =document.getElementById("close");
X.addEventListener(('click'),()=> {
    popupRes.classList.add("hidden");
    popupRes.classList.remove("customForm");
})
