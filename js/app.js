
document
  .querySelector("#generar-nombre")
  .addEventListener("submit", cargarHabitat);

function cargarHabitat(e) {
  e.preventDefault();

  const habitat = document.getElementById("habitat");
  const habitatSeleccionado = habitat.options[habitat.selectedIndex].value;
  const cantidad = document.getElementById("numero").value;

  let url = "";

  url += "https://pokeapi.co/api/v2/";
  // Si hay un habitat agregarlo a la url
  if (habitatSeleccionado !== "") {
    url += `pokemon-habitat/${habitatSeleccionado}/`;
  }
  // Si hay una cantidad agregarlo a la url
  //if (cantidad !== "") {
  //url += `?offset=${cantidad}&limit=${cantidad}`;}


  fetch(url).then((response) => response.json()).then((Habitats) => {
    console.log(Habitats)
    // Generar el html

    let htmlHabitats = "<h2> Generados</h2>";

    htmlHabitats += "<ul class='lista'>";

    // Imprimir
    Habitats.pokemon_species.forEach(function (habitat) {
      htmlHabitats += ` <li>${habitat.name}`;
    });
    htmlHabitats += "</ul>";
    document.getElementById("resultado").innerHTML = htmlHabitats;
  })
}


/*
const url = 'https://pokeapi.co/api/v2/pokemon-habitat/1/'
fetch(url)
  .then(response => response.json())
  .then(data => {
    let element = document.getElementById('resultado')
    element.innerHTML = `<p>${data.pokemon_species}</p>`
    console.log(data)
  })
  .catch(err => console.log(err))*/