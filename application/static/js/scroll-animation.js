document.addEventListener("DOMContentLoaded", function() {
      const leftElements = document.querySelectorAll('.fade-in-left');
      const rightElements = document.querySelectorAll('.fade-in-right');
  
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  if (entry.target.classList.contains('fade-in-left')) {
                      entry.target.classList.add('animate-left');
                  } else if (entry.target.classList.contains('fade-in-right')) {
                      entry.target.classList.add('animate-right');
                  }
              }
          });
      }, {
          threshold: 0.5
      });
  
      leftElements.forEach(element => {
          observer.observe(element);
      });
  
      rightElements.forEach(element => {
          observer.observe(element);
      });
  });
  