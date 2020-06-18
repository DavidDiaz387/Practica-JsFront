window.addEventListener('load',function(){
    let botonAbra = document.querySelector("#abracadabra")
    botonAbra.addEventListener("click",function(e){
        let userName = prompt("Ingresa tu nombre")
        document.querySelector("#titular strong").innerHTML = userName
    })
    let botonGet = document.querySelector("#buttonChange")
    
    let numero = 0;
    botonGet.addEventListener("dblclick",function colorAlAzar(){
       
        let colores = ["red","blue","green","yellow","orange"]
        document.querySelector(".parrafo-color").style.color = colores[numero]
        numero++ 
    })
    
    let section = this.querySelector(".comentarios a")
    section.addEventListener("click",function (e){
        alert(this.querySelector(".box h3"))
    })

    

})


    