(function(){
 
const slides = [
    '<div>Details</div>',
    '<div>Statistic</div>',
    '<div>OF</div>',
    '<div>Drones</div>'
];
  
   let currentSlide = 0;

   function renderSlides(slides) {
     const slidersContainer = document.querySelector('.about-carousel__slides');
     slidersContainer.innerHTML = slides[currentSlide];
   } 

   function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlides(slides);
   }

   setInterval(nextSlide, 2000);

   renderSlides(slides);

})();