window.alert("Bienvenido a mi sitio");
let confirmar = window.confirm("Queres continuar en el sitio.?");
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
if (confirmar) {
  h2.innerHTML = "<h2>Gracias por quedarte</h2>";
  let nameUser = prompt("Cual es tu nombre ?");
  h1.innerHTML = "Bienvenido" + " " + "<span>" + nameUser + "</span>";
  let edadUser = prompt("Cuantos años tenes?");
  if (edadUser < 18) {
    document.querySelector(".container-general").style.display = "none";
    document.querySelector(".contenido-bloqueado").style.display = "block";
  } else {
    let hobbies = prompt(
      "Cuales son tus Hobbies ? (Escribi todos tus hobbies continuados por una coma"
    ).split(",");
    
    
    
    console.log(hobbies)
    /*let userHobbie = hobbies.find((hobbie) => {
      return  hobbie == "Programar";
    });
    if (userHobbie) {
      window.alert("Que bueno que te guste la Programacion");
      document.querySelector(".background-img").style.backgroundImage =
        "url('./img/programmer.jpeg')";
    } else {
      alert("Que mal que no te guste la programacion");
      document.querySelector(".background-img").style.backgroundImage =
        "url('./img/gatito.jpeg')";
    }
    let colorPreferido = prompt("Cual es tu color preferido ?");
    
    document.querySelector("h1 span").style.color = colorPreferido;
    document.querySelector(".hobbies").innerHTML += "<ul></ul>"
    let urlName = prompt(
        "Podes ingresar las URL de tus hobbies ? *ingresalos segun el orden que pusiste tus hobbies *Separados por una coma "
      ).split(",")
    
    hobbies.forEach(hobbie => {
        urlName.forEach(url =>{
            document.querySelector(".hobbies ul").innerHTML += "<li><a href="+url+">"+hobbie+"</a></li>"})
    });*/
  let hobbiesTrue = hobbies.filter(hobbie=>{ return hobbie.length > 5 })  
  console.log(hobbiesTrue)  
    
    

    
  }
} else {
  h2.innHTML = "<h2>lamentamos que te tengas que ir</h2>";
}

function validation(hobbies) {
    hobbies.forEach(hobbie => {
        if(hobbie.length > 5 && hobbie.length < 10){ return hobbie}
            
        
    })
    console.log(hobbie)
}