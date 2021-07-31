const showMenu = (toggleID, navID) => 
{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID);

    if(toggle && nav)
    {
        toggle.addEventListener('click', ()=>
        {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== Active and Remove Menu =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
    //active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu on a mobile phone
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*===== Scroll reveal Animation =====*/
const sr = ScrollReveal({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    })
/*===== Scroll Home =====*/
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social-icon',{interval: 200})
/*===== Scroll About =====*/
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.text',{delay:400})
/*===== Scroll Skills =====*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{delay:200})
sr.reveal('.skills__img',{delay:450})
/*===== Scroll Portfolio =====*/
sr.reveal('.work__img',{interval:200})
/*===== Scroll Contact =====*/
sr.reveal('.contact__input',{interval:200})
