document.addEventListener("DOMContentLoaded", () => {
    const accordionTitles = document.querySelectorAll(".accordion-title");

    accordionTitles.forEach(title => {
        title.addEventListener("click", () => {
            const activeTitle = document.querySelector(".accordion-title.active");

            if (activeTitle && activeTitle !== title) {
                activeTitle.classList.remove("active");
                const activeContent = activeTitle.nextElementSibling;
                activeContent.style.maxHeight = null;
                activeContent.style.padding = "0 10px";
            }

            const content = title.nextElementSibling;
            const isOpen = content.style.maxHeight;

            if (isOpen) {
                content.style.maxHeight = null;
                content.style.padding = "0 10px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
            }

            title.classList.toggle("active", !isOpen);
        });
    });
});
