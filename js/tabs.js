document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion__painter-link').forEach(function(tabsBtn) {

        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })


    const steps = document.querySelectorAll('.accordion__painter-link');

    for (item of steps) {
        item.addEventListener('click', function() {
            if (this.classList.contains('accordion__painter-link-active')) {
                this.classList.remove('accordion__painter-link-active');
            } else {
                for (el of steps) {
                    el.classList.remove('accordion__painter-link-active');
                }
                this.classList.add('accordion__painter-link-active');
            }
        })
    }

})