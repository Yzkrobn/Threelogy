document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const dropdownnav = document.getElementById('dropDown');

    if (menuButton && dropdownnav) {
        menuButton.addEventListener('click', () => {
            dropDown.classList.toggle('hidden');

            if (window.innerWidth >= 768 && !dropDown.classList.contains('hidden')) {
                dropDown.classList.remove('absolute', 'top-full', 'translate-y-2', 'pl-2');
            } else {
                dropDown.classList.add('absolute', 'top-full', 'translate-y-2', 'pl-2');
            }
        });
    }
});
