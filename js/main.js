
// const usuario = {
//     id: "1234",
//     nombre: "Juan",
//     correo: "juan@example.com"
//   };
  
//   // Convertir el objeto usuario a una cadena JSON para almacenamiento
//   sessionStorage.setItem('usuario', JSON.stringify(usuario));
  
//   // Recuperar el objeto usuario de localStorage y convertirlo de nuevo a un objeto JavaScript
//   const usuarioAlmacenado = JSON.parse(sessionStorage.getItem('usuario'));
  
//   console.log(usuarioAlmacenado);

// let alumnos = []

// function ingresaralumno () {
//     const input = document.getElementById('name')
//     alumnos.push('name')

// }
// console.log(alumnos)
// let boton = document.getElementById('btn')
// boton.addEventListener("click",ingresaralumno)

let alumnos = [];

function ingresaralumno() {
    const input = document.getElementById('name');
    const nombre = input.value.trim();
    
    if (nombre === '') {
        alert('Por favor ingrese un nombre correcto');
        return;
    }
    alumnos.push(nombre);
    
    // limpiar input
    input.value = '';
    actualizarLista();
}
function ingresarcal() {
    const input = document.getElementById('cal');
    const calificacion = parseInt(input.value);
    
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        alert('Por favor ingrese una calificación válida (0-100)');
        return;
    }
}
function actualizarLista() {
    const lista = crearListaElement();
    lista.innerHTML = '';
    
    alumnos.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = alumno;
        lista.appendChild(li);
    });
}

function crearListaElement() {
    const lista = document.createElement('ul');
    lista.id = 'lista-alumnos';
    document.body.appendChild(lista);
    return lista;
}

let boton = document.getElementById('btn');
boton.addEventListener("click", ingresaralumno);

// Mostrar lista inicial
actualizarLista();