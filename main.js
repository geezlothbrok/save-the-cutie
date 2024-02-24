const showContacts = document.querySelector('.contacts');
const showContactsBtn = document.querySelector('#menu');
const hideContactsBtn = document.querySelector('#close-menu');

openBtn = () => {
    showContacts.style.display = 'flex';
    showContactsBtn.style.display = 'none'
    hideContactsBtn.style.display = 'inline-block'
    
}
showContactsBtn.addEventListener('click', openBtn);

closeBtn = () => {
    showContacts.style.display = 'none';
    showContactsBtn.style.display = 'inline-block'
    hideContactsBtn.style.display = 'none'
    
}
hideContactsBtn.addEventListener('click', closeBtn)



const nav = document.querySelector('.nav-links');
const openNavBtn = document.querySelector('#open');
const closeNavBtn = document.querySelector('#close');


openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}
openNavBtn.addEventListener('click', openNav)

closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}
closeNavBtn.addEventListener('click', closeNav)


