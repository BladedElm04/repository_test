const redirectToHome = () => {
    const button = document.querySelector("#Home");

    button.addEventListener("click", () => {
        location.replace("../../")
    })
}
redirectToHome()