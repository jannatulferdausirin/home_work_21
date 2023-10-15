// querySelectors=============
let text=document.querySelector('h1');
let button=document.querySelector('button');
button.addEventListener("click",function(){
    text.style.color="white";
    text.style.background="olivedrab";
   
    text.style.fontSize="50px";
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
    $('.box').hide(100);
})
$("#show").click(function(){
    $('.box').show(100);
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