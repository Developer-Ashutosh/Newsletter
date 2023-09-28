function changePage() {
    document.querySelector(".submit_btn").addEventListener("click", function () {
        document.querySelector("main").style.display = "none";
        document.querySelector(".success").style.display = "block";
    })

    document.querySelector(".success button").addEventListener("click", function () {
        document.querySelector("main").style.display = "flex";
        document.querySelector(".success").style.display = "none";
        document.getElementById("email").value = "";
        document.getElementById("invalid").innerText = "";
    })
}

function validateInput() {
    let inputValue = document.getElementById("email").value;
    if (inputValue === "") {
        document.getElementById("invalid").innerText = "Enter a Valid Email";
        return;
    }
    document.getElementById("invalid").innerText = "";
    changePage();
}
