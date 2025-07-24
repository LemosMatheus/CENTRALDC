let nome = localStorage.getItem("armazem")
document.getElementById("titulo").innerText = `Olá, ${nome}`

document.addEventListener('DOMContentLoaded', () => {
    const btngotham = document.getElementById("btngotham");

    btngotham.addEventListener('click', () => {
        document.getElementById("corpogotham").classList.toggle("oculto")
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const btngotham = document.getElementById("btnmetropolis");

    btngotham.addEventListener('click', () => {
        document.getElementById("corpometropolis").classList.toggle("oculto")
    })
})