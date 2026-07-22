const revealElements =
document.querySelectorAll(
".reveal-up,.reveal-left,.reveal-right,.reveal-scale"
);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

revealElements.forEach(item=>{

    observer.observe(item);

});

const counters =
document.querySelectorAll(".counter");

let counted = false;

function startCounters(){

    if(counted) return;

    counted = true;

    counters.forEach(counter=>{

        const target =
        Number(counter.dataset.target);

        let current = 0;

        const increment =
        target/120;

        const timer = setInterval(()=>{

            current += increment;

            if(current>=target){

                current = target;

                clearInterval(timer);

            }

            counter.textContent =
            Math.floor(current)+"+";

        },16);

    });

}
const cta =
document.querySelector(".cta");

const counterObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounters();

        }

    });

},{
    threshold:.35
});

counterObserver.observe(cta);