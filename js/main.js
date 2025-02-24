let titulo = document.createElement('h1');
titulo.innerHTML = '<h1>Titulo</h1>';
document.body.insertBefore(titulo, document.body.childNodes[0]);

let alumnos = [];

function ingresaralumno() {
    const input = document.getElementById('name');
    const nombre = input.value.trim();
    
    if (nombre === '') {
        alert('Por favor ingrese un nombre correcto');
        return;
    }
    alumnos.push(nombre);
    /*limpiar input*/
    input.value = '';
    actualizarLista();
}

function actualizarLista() {
    const lista = nuevoalumnolista();
    lista.innerHTML = '';
    
    alumnos.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = alumno;
        lista.appendChild(li);
    });
}

function nuevoalumnolista() {
    const lista = document.createElement('ul');
    lista.id = 'lista-alumnos';
    document.body.appendChild(lista);
    return lista;
}

let boton = document.getElementById('btn');
boton.addEventListener("click", ingresaralumno);

actualizarLista();