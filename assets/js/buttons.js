//==========================================
//      SUMMIT BUTTON EFFECTS
//==========================================

console.log("Buttons found:", document.querySelectorAll(".interactive-btn").length);

document.querySelectorAll(".interactive-btn").forEach(button => {

    for(let i = 0; i < 8; i++){

        const ray = document.createElement("span"); 

        ray.classList.add("energy-ray");

        ray.style.left = Math.random()*100 + "%";
        ray.style.top = Math.random()*100 + "%";
        ray.style.animationDelay = Math.random()*3 + "s";

        button.appendChild(ray);

    }

});

document.querySelectorAll("[download]").forEach(button=>{

    button.addEventListener("click",()=>{

        button.classList.add("downloading");

        setTimeout(()=>{

            button.classList.remove("downloading");

        },1800);

    });

});