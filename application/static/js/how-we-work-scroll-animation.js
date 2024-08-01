document.addEventListener('scroll', function() {
      const steps = document.querySelectorAll('.step');
      const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };
  
      const callback = (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      steps.forEach(step => {
          observer.observe(step);
      });
  });
  