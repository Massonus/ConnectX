document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
    const FAQ_PADDING_CLOSED = "0";
    const FAQ_PADDING_OPEN = "1em 0";

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            const openItem = item.parentElement.querySelector(".faq-item-open");

            if (openItem && openItem !== item) {
                openItem.classList.remove("faq-item-open");
                const openAnswer = openItem.querySelector(".faq-answer");
                openAnswer.style.padding = FAQ_PADDING_CLOSED;
            }

            item.classList.toggle("faq-item-open");
            const answer = item.querySelector(".faq-answer");
            if (item.classList.contains("faq-item-open")) {
                answer.style.padding = FAQ_PADDING_OPEN;
            } else {
                answer.style.padding = FAQ_PADDING_CLOSED;
            }
        });
    });
});
