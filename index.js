// resize navbar on scroll
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

window.onload = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

// navbar toggler
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    })
}

// close menu on click item
navLink.forEach(item=> item.addEventListener('click', ()=> {
    navMenu.classList.remove('active');
}))