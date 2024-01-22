let navButton=document.querySelector('.nav-toggle');
let img=document.querySelector('.hamburger__icon');
let fact=true
navButton.addEventListener('click',()=>{
    document.querySelector('.nav__ul__list').classList.toggle("open");
    if(fact)
    {
      img.src="images/icon-close.svg";
      fact=false
    }
    else
    {
        img.src="images/icon-hamburger.svg" ;
        fact=true
    }
})