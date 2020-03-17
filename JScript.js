const btnSwitch = document.querySelector("#darkmode");
btnSwitch.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
});