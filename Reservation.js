
const reserv = document.getElementsByClassName('card-button');
const popup = document.getElementById('popup');
for (let i = 0; i < reserv.length; i++) {
    reserv[i].addEventListener(('click'), () => {
        popup.classList.remove("hidden")
        popup.classList.add("customForm")
    })
}

const X = document.getElementById('close');

X.addEventListener(('click'), () => {
    popup.classList.add("hidden")
    popup.classList.remove("customForm")
})







