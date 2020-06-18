let container = document.querySelector(".container")

fetch('https://api.giphy.com/v1/gifs/random?api_key=wRF74DTiQE0ESqAG21JO3265cPW8Cr6a&tag=&rating=G')
.then(function(datos){
    return datos.json()
})
.then(function(datosJs){
    console.log(datosJs)
    let url = datosJs.data.url
    let nombre = datosJs.data.title
    let image = datosJs.data.images.downsized.url
    let container = document.querySelector(".container")
    container.innerHTML += "<h1>"+ nombre + "</h1>"
    container.innerHTML += "<img src="+ image + ">"
    let boton = document.querySelector(".boton")
    boton.addEventListener("click",function (e){
        container.innerHTML = "<img src=" + datosJs.data.images.downsized_medium.url + ">"
    })
})