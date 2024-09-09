class handleModal {

    constructor(selectorUniqueCurrentModal, selectorUniqueLunchModal) {
        this.currentModal = document.querySelector(selectorUniqueCurrentModal);
        this.launchModal = document.querySelector(selectorUniqueLunchModal);

        if (!this.currentModal || !this.launchModal) {
            console.error('Problemas al cargar modal');
            return;
        }

        this.init();
    }

    init() {

        document.addEventListener('DOMContentLoaded', (eve) => {
            let modals = document.querySelectorAll('._modal');
            let close = this.currentModal.querySelector('._close-modal');

            close.addEventListener('click', (eve) => {
                this.currentModal.classList.remove('_modal-enabled');
                document.body.style.overflow = 'visible';
            });

            this.launchModal.addEventListener('click', (eve) => {
                modals.forEach((modal) => {
                    modal.classList.remove('_modal-enabled');
                    modal.classList.add('_modal-disabled');
                });

                this.currentModal.classList.remove('_modal-disabled');
                this.currentModal.classList.add('_modal-enabled');
                document.body.style.overflow = 'hidden';
            });

        });
    }
}

new handleModal('._unique-modal', '._unique-launch-modal');