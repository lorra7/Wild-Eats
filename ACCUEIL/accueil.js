let img = [];
img[0] = document.getElementById("remCar");
img[1] = document.getElementById("cucinaCar");
img[2] = document.getElementById("inadaCar");
img[3] = document.getElementById("saveurCar");
img[4] = document.getElementById("hanoiCar");
img[5] = document.getElementById("terramiaCar");

let annim = ['mv0to5', 'mv1to0', 'mv2to1', 'mv3to2', 'mv4to3', 'mv5to4']

let annimSuiv = ['mv5to4', 'mv0to5', 'mv1to0', 'mv2to1', 'mv3to2', 'mv4to3']
// console.log(img)

function annimator () {
let i = 0;
for  (i = 0; i < img.length; i++){

img[i].classList.remove(annim[i]);
img[i].classList.add(annimSuiv[i]);}}

j = 0
function annimation (){
annimator();
annim[6] = annim[0]; annimSuiv[6] = annimSuiv[0]; 
annim[0] = annim[5]; annimSuiv[0] = annimSuiv[5];
annim[5] = annim[4]; annimSuiv[5] = annimSuiv[4];
annim[4] = annim[3]; annimSuiv[4] = annimSuiv[3];
annim[3] = annim[2]; annimSuiv[3] = annimSuiv[2];
annim[2] = annim[1]; annimSuiv[2] = annimSuiv[1];
annim[1] = annim[6]; annimSuiv[1] = annimSuiv[6];


return j++;}

setInterval("annimation()", 3000);
//setInterval("console.log(j)", 3000);


/*=============Selection de la Map Version Desktop =============
0=map 1 = assiatique 2 =burger 3=pizza*/
const maps = ["https://www.google.com/maps/d/u/1/embed?mid=12MJBzfHmJteB5G2QYbBM3Ssbzgce1BE&ehbc=2E312F&noprof=1",
"https://www.google.com/maps/d/embed?mid=19ddolDLJwYVArj1gDlYpI4ZFijXTlfk&ehbc=2E312F",
"https://www.google.com/maps/d/u/1/embed?mid=1lbWo-jkO-JdalW5V-Cp8cbiiiWtQ8ZE&ehbc=2E312F&noprof=1",
"https://www.google.com/maps/d/embed?mid=1mU5U-5F5IdSlQBURwYGBofxGolu0HtI&ehbc=2E312F"
];



let h1 = document.getElementsByTagName("h1");
h1 = h1[0].innerText
function map(){
if (h1.includes("Asiatique") === true){
return maps[1];
}
else if (h1.includes("Burgers") === true){
return maps[2];
}
else if(h1.includes("Pizzeria") === true){
return maps[3];
} else {return maps[0];}
}
//console.log(map())
//console.log(h1.includes("Burgers"))
/*=============MEDIA_QUERIES VERSION DESKTOP============*/

let header = document.getElementById("header");
let image = document.createElement('img');
let iframemob = document.getElementById('iframe');
let desktop = document.getElementById('desktop');
let iframe = document.createElement("iframe");
/*
let diva = document.getElementById("diva");
console.log(diva)
let liste = document.createElement("ul");
console.log(liste)
let la = document.createElement("li");
let le = document.createElement("li");
let lu = document.createElement("li");
diva.appendChild(liste)*/

if (window.matchMedia("(min-width:600px)").matches){
header.appendChild(image);
image.setAttribute('src', 'lyonv2.jpg');
image.setAttribute('class','banniere');
iframemob.classList.add('none');
desktop.appendChild(iframe);
iframe.setAttribute('class','desktop');   
iframe.setAttribute('src', map());
iframe.setAttribute('width', "450");
iframe.setAttribute('height','650');
}
