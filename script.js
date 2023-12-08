   const typed = new Typed('.multiple-text',
   {
    strings : ['Frontend developer','Content Creator','Microsoft learn Student ambassador'],
    typeSpeed : 50,
    backSpeed :50,
    backDelay : 1000,
    loop : true
   });
   const header =document.querySelector('header');
   const bars=document.querySelector('.bars');
   const xmark=document.querySelector('.cross')
   const menuicon= document.querySelector('.menu');
   menuicon.addEventListener('click',function(){
bars.classList.toggle('activemenu');
xmark.classList.toggle('activemenu');
header.style.display=header.style.display=='flex'?'none':'flex';

   })