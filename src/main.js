//PRUEBA 000 | PROBANDO FOREACH 
/* const espaciorespuesta = document.getElementById('respuestaid');
const  datos = POKEMON.pokemon;
datos.forEach(function(entry) {
    document.write(entry);
}); */



// PRUEBA 001 | PROBANDO HTML EN CADENAS DE JS
/*const respuestaid = document.getElementById('respuestaid');
const datos = POKEMON.pokemon[0];
const pruebatemplate =  `
<div class="POKEMON">
   <h2>
       ${datos.id}
   </h2>
   <p class="location">${datos.name}</p>
   <img src=${datos.img}>
</div>
`;
document.body.innerHTML = pruebatemplate;*/


//PRUEBA 002 | PRONANDO PILDORA POTTER
const datos = POKEMON.pokemon;
let lista = ' ';

datos.forEach((datos) => {
    const li = `
        <li> ${datos} </li>
    `;
    lista += li;
})

const ulcontainer = document.getElementById('container-list');
console.log (lista);




