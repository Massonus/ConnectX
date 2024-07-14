document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            const openItem = item.parentElement.querySelector(".faq-item-open");

            if (openItem && openItem !== item) {
                openItem.classList.remove("faq-item-open");
            }

            item.classList.toggle("faq-item-open");
        });
    });
});
