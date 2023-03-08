const steps = document.querySelectorAll(".step");

steps.forEach(step => {
    step.addEventListener("click", () => {
        steps.forEach(step => {
            step.classList.remove("active");
        });
        step.classList.add("active");
    })
})