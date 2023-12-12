/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
//Nombres de las variables.
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let ext = ['.es', '.com'];
//Variable donde se ejecutará nuestro loop.
  let todosDominios = [];
//Codigo para el loop.
  for (let i = 0; i < pronoun.length; i++){
    for (let i2 = 0; i2 < adj.length; i2++){
      for(let i3 = 0; i3 < noun.length; i3++){
        for(let i4 = 0; i4 < ext.length; i4++){ 
         todosDominios.push (pronoun[i] + adj[i2] + noun[i3] + ext[i4]);     
        }
      }
    }
  }
const tag = document.querySelector('#domain') //También se puede hacer uso del 'getElementById'.
tag.innerHTML += '<div class="container-fluid"><h2> Domain list: </h2>' 
//Uso del .map para que se vea en nuestro HTML.
todosDominios.map ((dominio) => {
tag.innerHTML += '<ul class="text-primary"><li><b>' + dominio + '</b></li>'
})
tag.innerHTML += '</ul></div>' //Cierre del div y el ul FUERA .map para que no se repita en bucle.
}  



    



