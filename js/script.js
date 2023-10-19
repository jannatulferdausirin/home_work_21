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

// ==========problem 1 ========
// ===multi stage conditions===
// check-out mark-sheet number to gpa...
// a+Grade =80;
// aGrade =60;
// bGrade =50;
// cGrade =40;
// dGrade =39;
let result = 33;


if (result < 0 || result > 100) {
    console.log('type a valid numbers')
} else if (result >= 80 && result<=100){
    console.log('A+ Grade peyecho')
}
else if(result>= 60 && result<=79){
    console.log('A Grade peyecho')
}
else if(result>= 50 && result<=59){
    console.log('B Grade peyecho')
}
else if(result>= 39 && result <= 49) {
    console.log('C Grade peyecho')
} else {
    console.log('you are fail')
}

// ===problem 2 ======
// print largest number among three...
let aa = 113;
let b = 79;
let c = 45;

if (aa > b && aa > c) {
    console.log('largest number a');
} else if (b > aa && b > c) {
    console.log('largest number b');
}
// else if(c>aa && c>b){
//    console.log('largest number c');
// }
 else {
    console.log('c is largest');
}
// =========problem 3======
// triangle is isosceles or not..
let side1 = 9;
let side2 = 8;
let side3 = 10;


if (side1 == side2 && side1 == side3 && side3 == side1) {
    console.log("triangle is equilateral")
} else if ((side1 == side2) || (side2 == side3) || (side1 == side3)) {
    console.log("triangle is scalene")
} else {
    console.log("triangle is isosceles")
}
