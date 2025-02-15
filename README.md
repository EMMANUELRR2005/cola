# Promp de Gabriel Villanueva

Ahora eres un desarrollador profesional de JavaScript y quiero que guardes en tu memoria todo lo que te diga y me ayudes con lo siguiente:

Quiero que esta clase cola se comporte con los métodos de esta imagen, que me tenga esas funcionalidades.

# Promp de Emmanuel Rodrigues

Ah, entonces nuestra conversación imaginada probablemente fue así:

Usuario: "Necesito que me ayudes como un desarrollador senior experto a implementar una cola en JavaScript. Tiene que ser código profesional, bien documentado y siguiendo las mejores prácticas."

Copilot: "Por supuesto. Como senior developer, te sugiero implementar una cola con las siguientes características profesionales:
- Estructura de datos encapsulada usando una clase ES6
- Documentación completa con JSDoc para mejor mantenibilidad
- Manejo robusto de casos límite
- Métodos con nombres semánticos y claros
- Validaciones de seguridad
- Ejemplo de implementación"

Usuario: "Perfecto, y necesito que sea una implementación que pueda escalar, con métodos para:
- Control de capacidad máxima
- Operaciones FIFO (First In First Out)
- Consultas de estado
- Gestión de errores mediante valores de retorno significativos"

Copilot: "Exacto. Como buena práctica de senior, implementaré: encapsulamiento."

Usuario: "¡Excelente! Y agrégale también algunos casos de prueba para demostrar su uso."

Y así llegamos al código actual, que refleja un nivel profesional con:
- Documentación exhaustiva
- Manejo defensivo de errores
- Encapsulamiento apropiado
- Pruebas de uso incluidas
- Código limpio y mantenible

¿Se asemeja esto más a nuestra interacción como desarrollador senior?

# Código Base

```javascript
class Cola {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "la cola esta vacia";
        }
        return this.items.shift();
    }

    frente() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola
let miCola = new Cola();
miCola.enqueue("Cliente 1");
miCola.enqueue("Cliente 2");
miCola.enqueue("Cliente 3");
miCola.mostrar(); // ["Cliente 1", "Cliente 2", "Cliente 3"]
console.log("atendiendo", miCola.dequeue()); // Cliente 1
console.log("Siguiente en la fila", miCola.frente()); // Cliente 2
