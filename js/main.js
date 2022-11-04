var typedTextSpan = document.querySelector(".typed-text");



var textArray = ["Web Developer","Front-End","Freelancer"]

var textArrayIndex = 0;

var charIndex = 0;

function typing() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, 200);
    }
    else {
        setTimeout(erasing, 1000)
    }
}

function erasing() {
    if (charIndex > 0) {
        typedTextSpan.textContent = 
            textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasing, 100);

    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        

        }
        setTimeout(typing, 1500);
    }
}

window.onload = function () {
    setTimeout(typing, 000);
};

// menu we om el menu

let menu = document.querySelector('#icon-menu');
let navbar = document.querySelector('.sidebar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}







// loading 

var loader = document.getElementById("preloader");

window.addEventListener("load" ,() => {
    loader.style.display = "none";

} )


//show  sections by scroll

window.addEventListener('scroll', showsec);

function showsec() {
    var reveals = document.querySelectorAll('.showsec');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 110;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('show');

        }
       
    }
    
}
window.addEventListener('scroll', a7aa);

function a7aa() {
    var reveals = document.querySelectorAll('.showscal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('showsc');

        }
       
    }
    
}

// arrow up 

let arrow = document.querySelector('.icon-arrow-up');
let section =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header .sidebar .menu a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelectorAll('header .sidebar .menu a[href*='+id+']').classList.add('active');

            })
        }

    })


    
    if (this.scrollY >= 800) {
        
        arrow.classList.add("showarro");

    }
    else{
        arrow.classList.remove("showarro");

    }
}

var darkLight = document.getElementById("moon");

darkLight.onclick = function(){
    document.body.classList.toggle("dark")
}

var x = 1;
function addtwo(){
    x = x + 2;
}
addtwo();
x = x + 1;
console.log(x);

//elshadah yad es7a llkalam

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

let m = 8;
let y = 2;
m -= y;
y += 1;
console.log(m/y);


// swiper my pro ^_^
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });