//se crearon las referencias para el formulario,contenedor de inputs,boton agregarInput,boton eliminarInput y boton enviar formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const cajaPrincipal = document.getElementById('caja_principal');
    const agregarInput = document.getElementById('agregarInput');
    const eliminarInput = document.getElementById('eliminarInput');
    const botonEnviar = document.getElementById('botonEnviar');

    let inputCount = 0;

    // Función para crear un nuevo input
    const createInput = () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'input';
        input.placeholder = 'INGRESE UN DATO';

        cajaPrincipal.appendChild(input);

        inputCount++;
    };

    // Evento para agregar un nuevo input
    agregarInput.addEventListener('click', () => {
        createInput();
    });

      // Evento para eliminar el último input
      eliminarInput.addEventListener('click', () => {
        if (inputCount > 0) {
            cajaPrincipal.removeChild(cajaPrincipal.lastChild);
            inputCount--;
        }
    });

        // evento para enviar y validar el formulario
        form.addEventListener('submit', (event) => {
            event.preventDefault();
    
            if (inputCount === 0) {
                alert('Agregue al menos un input antes de enviar el formulario.');
                return;
            }
    
            let isValid = true;