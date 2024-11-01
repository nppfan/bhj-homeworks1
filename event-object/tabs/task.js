document.addEventListener('DOMContentLoaded', () => {
    const tabContainers = document.querySelectorAll('.tab__navigation');

    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.nextElementSibling.querySelectorAll('.tab__content'); 

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tabcontent_active'));
                tab.classList.add('tab_active');
                contents[index].classList.add('tabcontent_active');
            });
        });
    });
});
