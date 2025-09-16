document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.dropdown__button');
        dropdownBtn.addEventListener("click", () => {         
            dropdown.classList.toggle('dropdown_open');            
        });
    });

});