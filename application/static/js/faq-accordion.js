document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            const openItem = item.parentElement.querySelector(".faq-item-open");

            if (openItem && openItem !== item) {
                openItem.classList.remove("faq-item-open");
                const openAnswer = openItem.querySelector(".faq-answer");
                openAnswer.style.padding = "0";
            }

            item.classList.toggle("faq-item-open");
            const answer = item.querySelector(".faq-answer");
            if (item.classList.contains("faq-item-open")) {
                answer.style.padding = "1em 0";
            } else {
                answer.style.padding = "0";
            }
        });
    });
});
