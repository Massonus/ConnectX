document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector('.content');
    content.classList.add('visible');

    const accordionTitles = document.querySelectorAll(".accordion-title");
    const accordionClosed = "0 10px";
    const accordionOpen = "10px";

    accordionTitles.forEach(title => {
        title.addEventListener("click", () => {
            const activeTitle = document.querySelector(".accordion-title.active");

            if (activeTitle && activeTitle !== title) {
                activeTitle.classList.remove("active");
                const activeContent = activeTitle.nextElementSibling;
                activeContent.style.maxHeight = null;
                activeContent.style.padding = accordionClosed;
            }

            const content = title.nextElementSibling;
            const isOpen = content.style.maxHeight;

            if (isOpen) {
                content.style.maxHeight = null;
                content.style.padding = accordionClosed;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = accordionOpen;
            }

            title.classList.toggle("active", !isOpen);
        });
    });
});
