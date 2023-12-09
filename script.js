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
 
   const cards = [
      document.querySelector('.card1'),
      document.querySelector('.card2'),
      document.querySelector('.card3'),
      document.querySelector('.card4'),
      document.querySelector('.card5'),
      document.querySelector('.card6'),
    ];
    
    const ExperiencesSlider = document.querySelector('.ExperiencesSlider_card');
    let slideCounter = 1;
    
   const repeat =function(cards,sign){
      cards.forEach(card=>{
         card.style.transform =`translate(${sign}${slideCounter*100}%)` ;
            })
   }
    setInterval(function() {
      repeat(cards,sign='-');
 if(slideCounter==4){
   slideCounter=0;
   repeat(cards,sign='+');

 }
 else{
   slideCounter++;
 };
      
      
    },2500);
    