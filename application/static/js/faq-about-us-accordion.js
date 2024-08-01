document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
    const faqClosed = "0";
    const faqOpen = "1em 0";

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            const openItem = item.parentElement.querySelector(".faq-item-open");

            if (openItem && openItem !== item) {
                openItem.classList.remove("faq-item-open");
                const openAnswer = openItem.querySelector(".faq-answer");
                openAnswer.style.padding = faqClosed;
            }

            item.classList.toggle("faq-item-open");
            const answer = item.querySelector(".faq-answer");
            if (item.classList.contains("faq-item-open")) {
                answer.style.padding = faqOpen;
            } else {
                answer.style.padding = faqClosed;
            }
        });
    });
});
