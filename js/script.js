// querySelectors=============
let text=document.querySelector('h1');
let button=document.querySelector('button');
let a=document.querySelector('buttonChange');
button.addEventListener("click",function(){
    text.style.color="white";
    text.style.background="olivedrab";
   
    text.style.fontSize="50px";
    text.style.paddingBottom="10px";
    text.style.marginBottom="10px";
})
buttonChange.addEventListener("click",function(){
    text.style.color="";
    text.style.background="";
    text.style.fontSize="";
})

// ==================function=========
$("#addColor").click(function(){
    $('.box').addClass('box_two');
})
$("#removeColor").click(function(){
    $('.box').removeClass('box_two');
})
$("#addremoveColor").click(function(){
    $('.box').toggleClass('box_two');
})
$("#hide").click(function(){
    $('.box').hide();
})
$("#show").click(function(){
    $('.box').show();
})
$("#hideShow").click(function(){
    $('.box').toggle(200);
})
$("#slideUp").click(function(){
    $('.box').slideUp(2000);
})
$("#slideDown").click(function(){
    $('.box').slideDown(2000);
})