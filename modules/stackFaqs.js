class stackFaqs {

    constructor(selectorUniqueFaqsContainer) {
        this.faqs = document.querySelector(selectorUniqueFaqsContainer);

        if (!this.faqs) {
            console.error('Problemas al cargar faqs');
            return;
        }

        this.init();
    }

    init() {
        let faqs = this.faqs.querySelectorAll('._faq-item');

        faqs.forEach((faq) => {
            faq.addEventListener('click', (eve) => {
                faq.classList.toggle('_expanded');
            });
        });
    }
}

window.stackFaqs = stackFaqs;