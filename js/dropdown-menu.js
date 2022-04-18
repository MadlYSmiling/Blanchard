document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".dropdown__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".simplebar-container");

            document.querySelectorAll(".dropdown__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("dropdown__btn-active");
                }
            });

            document.querySelectorAll(".simplebar-container").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-simplebar");
                }
            })
            dropdown.classList.toggle("active-simplebar");
            btn.classList.toggle("dropdown__btn-active")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".dropdown")) {
            document.querySelectorAll(".simplebar-container").forEach(el => {
                el.classList.remove("active-simplebar");
            })
            document.querySelectorAll(".dropdown__btn").forEach(el => {
                el.classList.remove("dropdown__btn-active");
            });
        }
    })
})