function armazenar() {
    let nome = document.getElementById("name").value;
    localStorage.setItem("armazem", nome)
}