document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const dropDownNav = document.getElementById('dropDown');
    const container1 = document.getElementById('container-1');
    const container2 = document.getElementById('container-2');
    const divImage = document.getElementById('divImage');
    const location1 = document.getElementById('location-1');
    const location2 = document.getElementById('location-2');

    // Fungsi untuk memindahkan divImage berdasarkan ukuran layar
    const adjustDivImagePosition = () => {
        if (location1 && location2 && divImage) { 
            if (window.innerWidth >= 768) {
                if (location1.contains(divImage)) {
                    location1.removeChild(divImage);
                    location2.appendChild(divImage);
                }
            } else {
                if (location2.contains(divImage)) {
                    location2.removeChild(divImage);
                    location1.appendChild(divImage);
                }
            }
        }
    };

    // Panggil fungsi saat halaman pertama kali dimuat
    adjustDivImagePosition();

    // Panggil fungsi saat ukuran layar diubah
    window.addEventListener('resize', adjustDivImagePosition);

    // Dropdown menu toggle
    if (menuButton && dropDownNav) {
        menuButton.addEventListener('click', () => {
            dropDownNav.classList.toggle('hidden');

            if (window.innerWidth >= 768 && !dropDownNav.classList.contains('hidden')) {
                dropDownNav.classList.remove('absolute', 'top-full', 'translate-y-2', 'pl-2');
            } else {
                dropDownNav.classList.add('absolute', 'top-full', 'translate-y-2', 'pl-2');
            }
        });
    }

    // Fungsi untuk mengubah flex direction pada container berdasarkan ukuran layar
    const adjustFlexDirection = () => {
        const containers = [container1, container2];
        containers.forEach(flexContainer => {
            if (flexContainer) {
                if (window.innerWidth >= 768) {
                    flexContainer.classList.remove('flex-col');
                } else {
                    flexContainer.classList.add('flex-col');
                }
            }
        });
    };

    // Panggil fungsi saat halaman pertama kali dimuat
    adjustFlexDirection();

    // Panggil fungsi saat ukuran layar diubah
    window.addEventListener('resize', adjustFlexDirection);
});
