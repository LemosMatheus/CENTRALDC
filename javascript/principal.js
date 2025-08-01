let nome = localStorage.getItem("armazem")
document.getElementById("titulo").innerText = `Oi, ${nome}`

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

document.addEventListener('DOMContentLoaded', () => {
    const btncentralcity = document.getElementById("btncentralcity");

    btncentralcity.addEventListener('click', () => {
        document.getElementById("corpocentralcity").classList.toggle("oculto")
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const btncoastcity = document.getElementById("btncoastcity");

    btncoastcity.addEventListener('click', () => {
        document.getElementById("corpocoastcity").classList.toggle("oculto")
    })
})