fetch("https://api.giphy.com/v1/gifs/trending?api_key=wRF74DTiQE0ESqAG21JO3265cPW8Cr6a&limit=25&rating=G")
.then(function(datos){
    return datos.json()
})
.then(function(info){
    console.log(info)
    let titulo = document.querySelector(".container")
    titulo.innerHTML += "<h1>" + info.data[0].title + "</h1>"
    let cantidad = prompt("Cuantos gift deseas ver ?")
    for(let i = 1;i < info.data.length;i++){
        if(i <= cantidad){
        titulo.innerHTML += "<img src=" + info.data[i].images.original.url + ">"
    }}
    
})
.catch(function (error) {
    
})