   const typed = new Typed('.multiple-text',
   {
    strings : ['Frontend developer','Content Creator','Microsoft learn Student ambassador'],
    typeSpeed : 50,
    backSpeed :50,
    backDelay : 1000,
    loop : true
   });
   const header = document.querySelector('header');
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


    const map = L.map('map').setView([27.6710, 84.4304], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([27.6710, 84.4304]).addTo(map)
        .bindPopup('Bharatpur, Chitwan, Nepal')
        .openPopup();
    

// Scroll into view
const Home = document.querySelector('.Home');
const Achievement = document.querySelector('.Achievement');
const Skills = document.querySelector('.skills');
const projects_experiences = document.querySelector('.projects_experiences');
const contact = document.querySelector('.contact');

const Experiences = document.querySelector('.Experiences_projects');
const Home_section =  document.querySelector('main');
const Achievements_section =  document.querySelector('.Achievements_section');
const skills_section =document.querySelector('.Skills')
const Contact_section= document.querySelector('.contact_me')
const raw = [Home, Achievement, Skills, projects_experiences, contact];
const goto = document.querySelector('.goto_top');
 const body = document.querySelector('body');
function scrollToTall(data) {
  data.scrollIntoView({ behavior: 'smooth' });
}
goto.addEventListener('click', function() {
scrollToTall(body);
});

Home.addEventListener('click', function() {
  scrollToTall(Home_section);
});

Achievement.addEventListener('click', function() {
  scrollToTall(Achievements_section);
});

Skills.addEventListener('click', function() {
  scrollToTall(skills_section);
});

projects_experiences.addEventListener('click', function() {
  scrollToTall(Experiences);
});

contact.addEventListener('click', function() {
  scrollToTall(Contact_section);
});

const AllSection = [Home_section,Achievements_section,skills_section,Experiences,Contact_section]

const revealSection=function(entries,observer){
  const [entry] = entries;
if(!entry.isIntersecting) return;

if (entry.target.classList.contains('hidden')) {
  entry.target.classList.remove('hidden');
}
else{
  entry.target.classList.remove('hiddenn');
}
}

const SectionObserver= new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.1,
})
AllSection.forEach(function(section){
  SectionObserver.observe(section);
});