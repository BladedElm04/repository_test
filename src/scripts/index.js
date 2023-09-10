const redirectToSkils = () => {
    const button = document.querySelector("#Skills");

    button.addEventListener("click", () => {
        location.replace("./src/pages/skills.html")
    })
}



redirectToSkils()