window.onload = function(){ //loading animation?
    document.body.classList.add('loaded');
}

function toggleMenu(){
    const menuLinks = document.querySelector('.nav-links');
    menuLinks.classList.toggle('show');
}