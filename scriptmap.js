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
setInterval("console.log(j)", 3000);
