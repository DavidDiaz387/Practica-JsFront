fetch("https://api.giphy.com/v1/gifs/search?api_key=wRF74DTiQE0ESqAG21JO3265cPW8Cr6a&q=&limit=25&offset=0&rating=G&lang=en")
.then(function(datos){
    return datos.json()
})
.then(function(info){
    console.log(info.data.__proto__)
})
.catch(function(error){

})