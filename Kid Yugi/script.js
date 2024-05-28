let item = document.querySelector('.icon-hamburger'); //Animazione per il menu a panino
      item.addEventListener("click", function() {
          document.body.classList.toggle('menu-open');
      });
      
function cambiaImmagine(imgId, imgSrc1, imgSrc2) {
         var img = document.getElementById(imgId);
            if (img.src.endsWith(imgSrc1)) {
                  img.src = imgSrc2;
            } else {
                  img.src = imgSrc1;
            }
      }

document.addEventListener('DOMContentLoaded', (event) => {
      const containers = document.querySelectorAll('.container');

      containers.forEach(container => {
         const leftArrow = container.querySelector('.arrow-left');
         const rightArrow = container.querySelector('.arrow-right');
         const cardContainer = container.querySelector('.card-container');

         const scrollAmount = 200; //Quantità di scorrimento in pixel per ogni clic

         leftArrow.addEventListener('click', () => {
               cardContainer.scrollBy({
                  left: -scrollAmount,
                  behavior: 'smooth'
               });
         });

         rightArrow.addEventListener('click', () => {
               cardContainer.scrollBy({
                  left: scrollAmount,
                  behavior: 'smooth'
               });
         });
      });
   });