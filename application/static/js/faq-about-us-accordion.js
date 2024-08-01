document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            const openItem = item.parentElement.querySelector(".faq-item-open");

            if (openItem && openItem !== item) {
                openItem.classList.remove("faq-item-open");
                const openAnswer = openItem.querySelector(".faq-answer");
                openAnswer.classList.remove('accordion-content-open');
                openAnswer.classList.add('accordion-content-closed');
                openAnswer.style.maxHeight = null;
            }

            const answer = item.querySelector(".faq-answer");
            const isOpen = answer.style.maxHeight;

            if (isOpen) {
                answer.classList.remove('accordion-content-open');
                answer.classList.add('accordion-content-closed');
                answer.style.maxHeight = null;
            } else {
                answer.classList.add('accordion-content-open');
                answer.classList.remove('accordion-content-closed');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }

            item.classList.toggle("faq-item-open", !isOpen);
        });
    });
});
