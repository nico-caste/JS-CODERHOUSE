let titulo = document.createElement('h1');
titulo.innerHTML = '<h1>Titulo</h1>';
document.body.insertBefore(titulo, document.body.childNodes[0]);

let alumnos = [];

function ingresaralumno() {
    let inputn = document.getElementById('name');
    let nombre = inputn.value.trim ();
    
    if (nombre === '') {
        alert('Por favor ingrese un nombre correcto');
        return;
    }
    
    let inputc = document.getElementById('cal');
    let calificacion = parseInt(inputc.value);
    if (calificacion < 0 || calificacion > 10) {
        alert (`por favor, ingrese una calificacion correcta`);
        return;
    }
    alumnos.push (nombre + calificacion);
    inputc.value = ``;
    inputn.value = '';
    actualizarlista();

}

function actualizarlista() {
    let lista = nuevoalumnolista();
    lista.innerHTML = '';
    
    alumnos.forEach(alumno => {
        let li = document.createElement('li');
        li.textContent = alumno;
        lista.appendChild(li);
    });
}

function nuevoalumnolista() {
    let lista = document.createElement('ul');
    lista.id = 'lista-alumnos';
    document.body.appendChild(lista);
    return lista;
}

let boton = document.getElementById('btn');
boton.addEventListener("click", ingresaralumno);

actualizarlista();