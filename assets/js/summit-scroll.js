const summitRevealElements = document.querySelectorAll(".reveal");

const summitObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

summitRevealElements.forEach(element => {

    summitObserver.observe(element);

});