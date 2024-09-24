document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');

        valueElement.addEventListener('click', () => {
            listElement.classList.toggle('dropdown__list_active');
        });

        const items = Array.from(dropdown.querySelectorAll('.dropdown__item'));

        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                valueElement.textContent = item.textContent;
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
});
