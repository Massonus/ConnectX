document.addEventListener("DOMContentLoaded", () => {
    const accordionTitles = document.querySelectorAll(".accordion-title");
    const ACCORDION_PADDING_CLOSED = "0 10px";
    const ACCORDION_PADDING_OPEN = "10px";

    accordionTitles.forEach(title => {
        title.addEventListener("click", () => {
            const activeTitle = document.querySelector(".accordion-title.active");

            if (activeTitle && activeTitle !== title) {
                activeTitle.classList.remove("active");
                const activeContent = activeTitle.nextElementSibling;
                activeContent.style.maxHeight = null;
                activeContent.style.padding = ACCORDION_PADDING_CLOSED;
            }

            const content = title.nextElementSibling;
            const isOpen = content.style.maxHeight;

            if (isOpen) {
                content.style.maxHeight = null;
                content.style.padding = ACCORDION_PADDING_CLOSED;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = ACCORDION_PADDING_OPEN;
            }

            title.classList.toggle("active", !isOpen);
        });
    });
});
