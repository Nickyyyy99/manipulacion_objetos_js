
const personasJSON = `[
    {"nombre": "Max", "edad": 20},
    {"nombre": "Javascript", "edad": 28},
    {"nombre": "Emma", "edad": 15},
    {"nombre": "React", "edad": 9}
]`

//paso 1 parsear el JSON
const personasObjetos = JSON.parse(personasJSON);

//paso 2 almacenar los objetos en un array
const personasArray = personasObjetos.map (personas => ({
   nombre: personas.nombre,
   edad: personas.edad
}))

const filtrado = personasArray.filter(personas => personas.edad >= 18)

const personaLista = document.getElementById('personasLista')

filtrado.forEach(personas => {
    const personaElement  = document.createElement('div')
    personaElement.innerHTML = `<p>Nombre: ${personas.nombre}, Edad: ${personas.edad}</p>`
    personaLista.appendChild(personaElement);
    
});

//obtenemos el boton y el input del HTML

const filtrarBoton = document.getElementById('filtrarButton')
const edadInput = document.getElementById('edadInput')

function filtrarPersonas () {
    const edadFiltro = parseInt(edadInput.value);

    const personasMayores = personasArray.filter(personas => personas.edad >= edadFiltro)

    const personaLista = document.getElementById('personasLista')
    personaLista.innerHTML = '',

    personasMayores.forEach(persona => {
        const personaElement = document.createElement('div');
        personaElement.innerHTML = `<p>Nombre: ${persona.nombre}, Edad: ${persona.edad}</p>`;
        personaLista.appendChild(personaElement);
    });
}
filtrarBoton.addEventListener('click', filtrarPersonas)

filtrarPersonas()
