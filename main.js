const burger=document.querySelector('.burger');
const hiden_menu=document.querySelector('.nav_menu_mobile')

burger.addEventListener('click', function(){
  burger.classList.toggle('burger_active');
  hiden_menu.classList.toggle('unhidden');
})