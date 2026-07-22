let currentIndex = 0;

const steps = document.querySelectorAll(".progress-step");
const progress = document.querySelector(".progress-active");

function loadConference(index){

    currentIndex = index;

    const item = conferenceFocusData[index];

    document.getElementById("focusCategory").textContent =
        item.category;

    document.getElementById("focusTitle").textContent =
        item.title;

    document.getElementById("focusDescription").textContent =
        item.description;

    const image =
        document.getElementById("focusImage");

    image.src = item.image;

    image.alt = item.title;

    const tags =
        document.getElementById("focusTags");

    tags.innerHTML = "";

    item.tags.forEach(tag=>{

        const span = document.createElement("span");

        span.textContent = tag;

        tags.appendChild(span);

    });

    updateSteps();

}
function updateSteps(){

    steps.forEach(step=>{

        step.classList.remove("active");

    });

    steps[currentIndex].classList.add("active");

    const width =

        (currentIndex)

        *

        (100/(steps.length-1));

    progress.style.width = width + "%";

}
steps.forEach(step=>{

    step.addEventListener("click",()=>{

        const index =

            Number(step.dataset.index);

        loadConference(index);

        restartAutoSlide();

    });

});
let autoSlide;

function startAutoSlide(){

    autoSlide = setInterval(()=>{

        currentIndex++;

        if(currentIndex>=conferenceFocusData.length){

            currentIndex=0;

        }

        loadConference(currentIndex);

    },5000);

}
function restartAutoSlide(){

    clearInterval(autoSlide);

    startAutoSlide();

}