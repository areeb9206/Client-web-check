// document.addEventListener("DOMContentLoaded", () => {
//   var hamburger = document.getElementById("hamburger");
//   var navLinks = document.getElementById("navLinks");
//   var backToTopButton = document.getElementById("backToTop");
//   hamburger.addEventListener("click", () => {
//       navLinks.classList.toggle("open");
//   });
//   window.addEventListener("scroll", () => {
//       if (navLinks.classList.contains("open")) {
//           navLinks.classList.remove("open");
//       }
//       // Show back to top button
//       if (window.scrollY > 300) {
//           backToTopButton.style.display = 'block';
//       } else {
//           backToTopButton.style.display = 'none';
//       }
//   });










// document.addEventListener("DOMContentLoaded", () => {
//   var hamburger = document.getElementById("hamburger");
//   var navLinks = document.getElementById("navLinks");

//   hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
//   });

//   window.addEventListener("scroll", () => {
//     if (navLinks.classList.contains("open")) {
//       navLinks.classList.remove("open");
//     }
//   });

//   // Close nav on link click (mobile only)
//   navLinks.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", () => {
//       if (window.innerWidth <= 768) {
//         navLinks.classList.remove("open");
//       }
//     });
//   });
// });

function animateCountUp(el, target) {
  var count = 0;
  var step = Math.ceil(target / 100); // adjust for speed
  var interval = setInterval(function () {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.textContent = count + (el.dataset.target >= 100 ? "+" : "");
  }, 20);
}

function handleScrollCount() {
  var counters = document.querySelectorAll(".count");
  counters.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      if (!el.classList.contains("counted")) {
        el.classList.add("counted");
        animateCountUp(el, parseInt(el.dataset.target));
      }
    }
  });
}

window.addEventListener("scroll", handleScrollCount);
window.addEventListener("load", handleScrollCount);

// // function openLightbox(item) {
// //   var imgSrc = item.querySelector("img").src;
// //   var lightbox = document.getElementById("lightbox");
// //   var lightboxImg = document.getElementById("lightbox-img");
// //   lightboxImg.src = imgSrc;
// //   lightbox.style.display = "flex";
// // }

// // Replace current lightbox functions in app.js
// let currentImageIndex = 0;
// let images = [];

// function initLightbox() {
//   images = Array.from(document.querySelectorAll('.portfolio-item img')).map(img => img.src);
  
//   document.getElementById('lightbox').addEventListener('click', function(e) {
//     if (e.target === this) {
//       this.style.display = 'none';
//     }
//   });
  
//   // Add keyboard navigation
//   document.addEventListener('keydown', function(e) {
//     const lightbox = document.getElementById('lightbox');
//     if (lightbox.style.display === 'flex') {
//       if (e.key === 'Escape') {
//         lightbox.style.display = 'none';
//       } else if (e.key === 'ArrowRight') {
//         navigateLightbox(1);
//       } else if (e.key === 'ArrowLeft') {
//         navigateLightbox(-1);
//       }
//     }
//   });
// }

// function openLightbox(item) {
//   const imgSrc = item.querySelector('img').src;
//   const lightbox = document.getElementById('lightbox');
//   const lightboxImg = document.getElementById('lightbox-img');
  
//   currentImageIndex = images.indexOf(imgSrc);
//   lightboxImg.src = imgSrc;
//   lightbox.style.display = 'flex';
  
//   // Add navigation buttons if multiple images
//   if (images.length > 1) {
//     if (!document.querySelector('.lightbox-nav')) {
//       const navHTML = `
//         <button class="lightbox-nav prev" onclick="navigateLightbox(-1)">❮</button>
//         <button class="lightbox-nav next" onclick="navigateLightbox(1)">❯</button>
//       `;
//       lightbox.insertAdjacentHTML('beforeend', navHTML);
//     }
//   }
// }

// function navigateLightbox(direction) {
//   currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
//   document.getElementById('lightbox-img').src = images[currentImageIndex];
// }





// function toggleCollapse(header) {
//   var content = header.nextElementSibling;
//   content.style.display = content.style.display === "block" ? "none" : "block";
// }

// function simpleValidate() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;
//   var feedback = document.getElementById("feedback");

//   if (name === "" || email === "" || message === "") {
//     feedback.style.display = "block";
//     feedback.style.color = "red";
//     feedback.innerText = "Please fill in all fields.";
//     return false;
//   }

//   feedback.style.display = "block";
//   feedback.style.color = "green";
//   feedback.innerText = "Thanks! Your message has been sent.";

//   // Optional: clear form after showing message
//   document.getElementById("contactForm").reset();

//   return false; // Prevent actual form submission
// }

// function validateContactForm() {
//   var first = document.getElementById("firstName").value.trim();
//   var last = document.getElementById("lastName").value.trim();
//   var email = document.getElementById("email").value.trim();
//   var message = document.getElementById("message").value.trim();
//   var feedback = document.getElementById("formFeedback");

//   if (!first || !last || !email || !message) {
//     feedback.textContent = "Please fill in all required fields.";
//     feedback.style.color = "red";
//     return false;
//   }

//   feedback.textContent = "Thank you! Your message has been sent.";
//   feedback.style.color = "var(--accent)";

//   // Optional: Reset form
//   document.getElementById("contactForm").reset();

//   return false; // Prevent real submission
// }

// function validateOrderForm() {
//   const first = document.getElementById("orderFirstName").value.trim();
//   const last = document.getElementById("orderLastName").value.trim();
//   const email = document.getElementById("orderEmail").value.trim();
//   const vision = document.getElementById("vision").value.trim();
//   const feedback = document.getElementById("orderFeedback");

//   // Get at least one selected service
//   const checkedServices = Array.from(
//     document.querySelectorAll('input[name="services"]:checked')
//   );

//   if (!first || !last || !email || !vision || checkedServices.length === 0) {
//     feedback.style.color = "red";
//     feedback.textContent =
//       "Please fill in all required fields and select at least one service.";
//     return false;
//   }

//   feedback.style.color = "var(--accent)";
//   feedback.textContent = "Thank you! Your order request has been submitted.";

//   document.getElementById("orderForm").reset();
//   return false; // Prevent actual submission for demo
// }






// Wait until DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const backToTopButton = document.getElementById("backToTop");

  // Toggle navigation menu on hamburger click (for mobile)
  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
  });

  // Close the navigation menu on scroll and handle back to top button visibility
  window.addEventListener("scroll", () => {
      if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
      }
      if (window.scrollY > 300) {
          backToTopButton.style.display = "block";
      } else {
          backToTopButton.style.display = "none";
      }
  });

  // Close nav menu when a link is clicked on mobile devices
  navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
          if (window.innerWidth<= 768) {
              navLinks.classList.remove("open");
          }
      });
  });

  // Smooth scroll behavior for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId.startsWith("#")) {
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
              }
          } else {
              // If external link, perform normal navigation
              window.location.href = targetId;
          }
      });
  });

  // Back to top button functionality
  backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Lightbox image gallery functionality
let currentImageIndex = 0;
let images = [];

// Initialize array of image sources from portfolio items
function initLightbox() {
  images = Array.from(document.querySelectorAll('.portfolio-item img')).map(img => img.src);
}

// Open the lightbox with the clicked image
function openLightbox(item) {
  const imgSrc = item.querySelector('img').src;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  currentImageIndex = images.indexOf(imgSrc);
  lightboxImg.src = imgSrc;
  lightbox.style.display = 'flex';
}

// Toggle collapse/expand on portfolio category headers
function toggleCollapse(header) {
  const content = header.nextElementSibling;
  if (content.style.display === "block") {
      content.style.display = "none";
  } else {
      content.style.display = "block";
  }
}

// Form validation to check required fields and valid email format
function validateContactForm() {
  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!first || !last || !email || !message) {
      feedback.textContent = "Please fill in all required fields.";
      feedback.style.color = "red";
      return false;
  }

  if (!validateEmail(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.style.color = "red";
      return false;
  }

  feedback.textContent = "Thank you! Your message has been sent.";
  feedback.style.color = "var(--accent)";
  document.getElementById("contactForm").reset();
  return false; // Prevent actual form submission for demo
}

// Simple regex email validation
function validateEmail(email) {
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Initialize lightbox image array when the window finishes loading
window.addEventListener('load', initLightbox);
