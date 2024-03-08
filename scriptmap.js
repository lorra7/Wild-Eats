$(".linklist").hover(function (){
    $("#"+ $(this).data('txttodisplay')).css("display", "block");
 },
 function (){
    $("#"+ $(this).data('txttodisplay')).css("display", "none");
 });