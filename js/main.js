
function anotarse () {
    const curso = ["html","css","javaScript","nodejs","reactjs"];
    let control = true;
    do {
        let nombre = prompt ("Ingrese su nombre");
        if (nombre ===null || nombre === "") {
            alert ("por favor ignreser correctamente su nombre");
            break;
        }
        if (nombre !== null || nombre !== "") {
            let seleccion = prompt (`${nombre} selecciona un curso: html, css, javascript, node js o react js`);
            for (let i = 0; i<5 ; i++) {
                if (seleccion == curso [i]) {
                    alert (`Felicitaciones ${nombre}!! Te anotaste en el curso de ${curso[i]}`);
                    control = false;
                }
                else {
                    alert ("lo siento ${nombre}, el curso que seleccionaste no esta disponible");
                    break;
                }
            }
        }
    } while (control);
}