
// add box shadow l navbar fach tsctolli

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// button scroll up **********

let upbutton=document.querySelector(".upbutton")

window.onscroll=function(){
    if(window.scrollY >= 600){
        upbutton.style.display='block'
    }else{
        upbutton.style.display='none'
    }
}
upbutton.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

// CODE NAVBAR   **********

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== afficher navbar code =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== hide  navbar code =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*===== SKILLS DISPLAY CODE =====*/


const tabs=document.querySelectorAll('[data-target]'),
tabcontent =document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target=document.querySelector(tab.dataset.target)

        tabcontent.forEach(tabcontents=>{
            tabcontents.classList.remove('skills-active')
        })
        target.classList.add('skills-active')

        
        tabs.forEach(tab=>{
            tab.classList.remove('skills-active')
        })
        tab .classList.add('skills-active')
    })
})

/*===== FOOTER YEAR CODE =====*/

let span =document.querySelector(".year");

time=new Date();
let year = time.getFullYear();

span.textContent=year;


/*===== CONTACT FORM REJEX VALIDATION CODE =====*/

let nametrue=true,emailtrue=true;

let name=document.querySelector('.name')
let email=document.querySelector('.email')


let namenotvalid=document.querySelector('.namevalid');
let emailnotvalid=document.querySelector('.emailvalid');

/*===== NAME REJEX VALIDATION CODE =====*/


name.addEventListener('input',function(e){
    var namepatern=/^[a-zA-Z ]+$/;
    var cvalue=e.target.value;
    let namevalide=namepatern.test(cvalue)

    if(!namevalide){
        nametrue=false;
        namenotvalid.style.display='block'
    }else{
        nametrue=true;
        namenotvalid.style.display='none'
    }
    console.log(nametrue)
})


/*===== EMAIL REJEX VALIDATION CODE =====*/

email.addEventListener('input',function(e){
    var emailpatern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var cvalue=e.target.value;
    let emailvalide=emailpatern.test(cvalue)

    if(!emailvalide){
        emailtrue=false;
        emailnotvalid.style.display='block'
    }else{
        emailtrue=true;
        emailnotvalid.style.display='none'
    }
    console.log(emailtrue)
})


document.onsubmit=function(e){
    if(nametrue && emailtrue){

    }else{
        alert("enter valid information")
        e.preventDefault()
    }
}

/*===== SEND CONTACT FORM WITH JS CODE =====*/




/*===== SCROLLREAVEAL ANIMATION CODE =====*/

const sr =ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:100,
}) 

sr.reveal(`.info , .description , .landing `)
sr.reveal(`.buttons,.social`,{delay:400,interval:100,origin:'bottom'})
sr.reveal(`.skills-tabs ,.ms-service ,.left`,{origin:'left',delay:100,duration:2000})
sr.reveal(`.skills-content ,.portfolio ,.right`,{delay:100,distance:'50px',duration:2000})