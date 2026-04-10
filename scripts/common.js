const navBar = document.querySelector('.bnr_left');
const backBox = document.querySelector('.sub_bg');
const navLi = document.querySelector('li .lnb_depth');
console.log(navBar, backBox, navLi);

navBar.addEventListener('mouseover', function(){
        backBox.style.display='flex';
        navLi.style.display='flex';
    })
navBar.addEventListener('mouseout', function(){
        backBox.style.display='none';
        navLi.style.display='none';
    })