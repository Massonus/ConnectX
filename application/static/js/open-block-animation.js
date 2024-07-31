document.addEventListener("DOMContentLoaded", function() {
      const steps = document.querySelectorAll(".process-step");
  
      steps.forEach(step => {
          step.addEventListener("click", () => {
              step.classList.toggle("active");
              const content = step.querySelector('.process-step-content');
              if (step.classList.contains("active")) {
                  content.style.maxHeight = content.scrollHeight + "px";
                  step.style.maxHeight = content.scrollHeight + 100 + "px";
              } else {
                  content.style.maxHeight = 0;
                  step.style.maxHeight = "100px";
              }
          });
      });
  });
  