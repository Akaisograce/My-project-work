const dropdownButtons = document.querySelectorAll(".dropdown-btn");

dropdownButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();

        document.querySelectorAll(".dropdown-content").forEach(menu => {
            if (menu !== this.nextElementSibling) {
                menu.classList.remove("show");
            }
        });

        this.nextElementSibling.classList.toggle("show");
    });
});

document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.classList.remove("show");
    });
});