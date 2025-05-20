const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

// Close navbar if user clicks outside of it
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !bar.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// Close navbar when a nav link is clicked (for mobile)
document.querySelectorAll('#navbar li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});



  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.buy-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent jumping to href="#"
        const product = link.getAttribute('data-product');
        const sizes = link.getAttribute('data-sizes');
        window.location.href = `order.html?product=${encodeURIComponent(product)}&sizes=${encodeURIComponent(sizes)}`;
      });
    });
  });


document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = this.elements['email'];
    const email = emailInput.value;

    fetch('https://formsubmit.co/ajax/murshhi@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success === 'true' || data.message === "Form submitted successfully.") {
        document.getElementById('successMessage').style.display = 'block';
        emailInput.value = '';
        setTimeout(() => {
          document.getElementById('successMessage').style.display = 'none';
        }, 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Error occurred while submitting.');
    });
  });


// Function to open the clicked image in full screen
    function openFullScreen(imgElement) {
        var fullscreenContainer = document.getElementById("fullscreen");
        var fullscreenImage = document.getElementById("fullscreen-image");
        
        fullscreenContainer.style.display = "flex";  // Display the fullscreen container
        fullscreenImage.src = imgElement.src;  // Set the clicked image as the source of the fullscreen image
    }

    // Function to close the full screen view when clicked
    function closeFullscreen() {
        var fullscreenContainer = document.getElementById("fullscreen");
        fullscreenContainer.style.display = "none";  // Hide the fullscreen container
    }



 document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("newsletter").style.backgroundImage = "url('images/newsletter.jpg')";
 });

 

 

// const modal = document.getElementById("swiperModal");
// const slideContainer = document.getElementById("swiperSlides");
// let swiperInstance;

// Open swiper on image click
// document.querySelectorAll("#product1 .pro img").forEach(btn => {
  // btn.addEventListener("click", e => {
    //    e.preventDefault();
      //  const images = JSON.parse(btn.closest('.pro').dataset.images);
        // slideContainer.innerHTML = ''; // Clear old slides

       // images.forEach(src => {
         //   const slide = document.createElement("div");
           // slide.className = "swiper-slide";
           // slide.innerHTML = `<img src="${src}" style="width:100%;height:100%;object-fit:contain;">`;
           // slideContainer.appendChild(slide);
       // });

        // Show the modal
        // modal.style.display = "flex";

        // Push to history so back button works
       // history.pushState({ swiperOpen: true }, '');

       // if (swiperInstance) swiperInstance.destroy(true, true);

       // swiperInstance = new Swiper(".mySwiper", {
         //   navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
           // pagination: { el: ".swiper-pagination", clickable: true },
           // loop: true
       // });
   // });
// });

// Handle modal close (click outside)
// modal.addEventListener("click", (e) => {
   // if (!e.target.closest(".mySwiper") && 
     //   !e.target.closest(".swiper-button-next") && 
       // !e.target.closest(".swiper-button-prev")) {
       // closeSwiperModal();
   // }
// });

// Close button manually
// document.getElementById("closeSwiper").addEventListener("click", () => {
   // closeSwiperModal();
// });

// Handle back button (popstate)
// window.addEventListener("popstate", (e) => {
   // if (modal.style.display === "flex") {
     //   closeSwiperModal(false); // Don't push new state again
   // }
// });

// Function to close swiper modal
// function closeSwiperModal(pushHistoryBack = true) {
   // modal.style.display = "none";
   // if (pushHistoryBack) history.back(); // Only go back if it's a manual close
// }