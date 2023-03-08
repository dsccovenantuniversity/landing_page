console.log("Start project!");
/* hamburger menu js */
const hamburger = document.getElementById('js--menu');
const dropdown = document.getElementById('js--dropdown');
const dropdownContainer = document.querySelector('.dropdown>.container');
const mainNavMenu = document.querySelector('.main--nav--menu');
hamburger.addEventListener('click',()=>{
    if(hamburger.className.includes('close'))
    {
        hamburger.classList.remove('close');
        mainNavMenu.style.display = 'none';
        return;
    }
    hamburger.className += ' close ';
    mainNavMenu.style.display = 'flex';
});
dropdown.addEventListener('click',()=>{
    if(dropdownContainer.className.includes('d-flex'))
    {
        dropdownContainer.classList.remove('d-flex');
        dropdownContainer.classList.add('d-none');
        return;
    }
    dropdownContainer.classList.add('d-flex');
});
