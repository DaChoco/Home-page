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

function formExtract(){
    var name, email, strText;

    name = document.getElementById('name').value;
    email = document.getElementById('emailAd').value;
    strText = document.getElementById('Write').value;

    if (!email.includes('@')){
        window.alert("Sorry, but that is not a proper email address. Ensure it contains the @ symbol and a domain such as gmail.");
        document.getElementById('emailAd').value = "";
    }
    else{
        console.log(name + "\n" + email + "\n" + strText);
    }


    
    

}

window.onload = function(){ //loading animation?
    var is_visible;
    document.body.classList.add('loaded');

    is_visible = sessionStorage.getItem('clicked');

    if (is_visible == 'true'){
        openMenu();
    }

    
}

