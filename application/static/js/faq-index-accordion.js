document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector('.content');
    content.classList.add('visible');

    const accordionTitles = document.querySelectorAll(".accordion-title");

    accordionTitles.forEach(title => {
        title.addEventListener("click", () => {
            const activeTitle = document.querySelector(".accordion-title.active");

            if (activeTitle && activeTitle !== title) {
                activeTitle.classList.remove("active");
                const activeContent = activeTitle.nextElementSibling;
                activeContent.classList.remove('accordion-content-open')
                activeContent.classList.add('accordion-content-closed')
                activeContent.style.maxHeight = null;
            }

            const content = title.nextElementSibling;
            const isOpen = content.style.maxHeight;

            if (isOpen) {
                content.classList.remove('accordion-content-open')
                content.classList.add('accordion-content-closed')
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('accordion-content-open')
                content.classList.remove('accordion-content-closed')
            }

            title.classList.toggle("active", !isOpen);
        });
    });
});
