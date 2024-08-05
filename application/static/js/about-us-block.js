document.addEventListener("DOMContentLoaded", function() {
      const aboutSections = document.querySelectorAll(".about-us-left, .about-us-right");
  
      function handleScroll() {
          aboutSections.forEach(section => {
              const rect = section.getBoundingClientRect();
              if (rect.top < window.innerHeight && rect.bottom >= 0) {
                  section.classList.add("animate");
              }
          });
      }
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
  });
  