//This script file will have A procedural thought process. Lets go

let i = 0;



function typingeffect(id){ //this will form the basis of a typing animation I'll do later
    var txt;
    setTimeout ( () => {
        i++;
        if (i < txt.length()){
            typingeffect(id);
        }
    }, 50)
}

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

function formExtract(){ //To extract text from this document
    var name, email, strText;
    const errorMSG = document.getElementById('error');

    //extractions

    name = document.getElementById('name').value;
    email = document.getElementById('emailAd').value;
    strText = document.getElementById('Write').value;



    //Testing if the Email is proper
    if (!email.includes('@')){
        errorMSG.style.display = 'flex';

        setTimeout( () => {
            errorMSG.style.display = 'none';
        }, 5000)
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

