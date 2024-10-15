document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const dropDownNav = document.getElementById('dropDown');
    const container1 = document.getElementById('container-1');
    const container2 = document.getElementById('container-2');
    const divImage = document.getElementById('divImage');

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

    if (divImage) {
        if (window.innerWidth >= 768) {
            container2.removeChild(divImage);
            container2.appendChild(divImage);
        }else{
            container2.removeChild(divImage);
            container2.appendChild(divImage);
        }
        
    }

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

    window.addEventListener('resize', () => {
        containers.forEach(flexContainer => {
            if (flexContainer) {
                if (window.innerWidth >= 768) {
                    flexContainer.classList.remove('flex-col');
                } else {
                    flexContainer.classList.add('flex-col');
                }
            }
        });
    });
});
