function openMenu(){
    const sidebar = document.querySelector('.sidenav');
    sidebar.style.display = 'flex';

    sessionStorage.setItem('clicked', true);
    
}

function closeMenu(){
    const sidebar = document.querySelector('.sidenav');
    sidebar.style.display = 'none';

    sessionStorage.removeItem('clicked')
    
}

window.onload = function(){ //loading animation?
    var is_visible;
    document.body.classList.add('loaded');

    is_visible = sessionStorage.getItem('clicked');

    if (is_visible == 'true'){
        openMenu();
    }

    
}

