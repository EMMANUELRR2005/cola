class Cola {
    constructor(capacidadMaxima) {
        this.items = []; // Array para almacenar elementos
        this.capacidadMaxima = capacidadMaxima; // Tamaño máximo de la cola
    }

    /**
     * Añade un elemento al final de la cola
     * @param {any} elemento - Elemento a insertar
     * @returns {boolean} true si se insertó correctamente, false si la cola está llena
     */
    insertar(elemento) {
        if (this.colaLlena()) {
            return false;
        }
        this.items.push(elemento);
        return true;
    }

    /**
     * Retira y devuelve el elemento del frente de la cola
     * @returns {any} Elemento del frente o null si la cola está vacía
     */
    quitar() {
        if (this.colaVacia()) {
            return null;
        }
        return this.items.shift();
    }

    /**
     * Verifica si la cola está vacía
     * @returns {boolean} true si la cola está vacía
     */
    colaVacia() {
        return this.items.length === 0;
    }

    /**
     * Verifica si la cola está llena
     * @returns {boolean} true si la cola está llena
     */
    colaLlena() {
        return this.items.length >= this.capacidadMaxima;
    }

    /**
     * Obtiene el elemento del frente sin quitarlo
     * @returns {any} Elemento del frente o null si la cola está vacía
     */
    frente() {
        if (this.colaVacia()) {
            return null;
        }
        return this.items[0];
    }

    /**
     * Obtiene el tamaño máximo de la cola
     * @returns {number} Capacidad máxima de la cola
     */
    tamañoMaximo() {
        return this.capacidadMaxima;
    }

    /**
     * Obtiene el número actual de elementos en la cola
     * @returns {number} Número de elementos actuales
     */
    tamañoActual() {
        return this.items.length;
    }
}

// Ejemplo de uso
const miCola = new Cola(5); // Crear cola con capacidad máxima de 5 elementos

console.log("Cola vacía:", miCola.colaVacia()); // true

// Insertar elementos
miCola.insertar("Cliente 1");
miCola.insertar("Cliente 2");
miCola.insertar("Cliente 3");

console.log("Frente de la cola:", miCola.frente()); // Cliente 1
console.log("Tamaño actual:", miCola.tamañoActual()); // 3
console.log("Tamaño máximo:", miCola.tamañoMaximo()); // 5
console.log("Cola llena:", miCola.colaLlena()); // false

// Quitar elemento
console.log("Cliente atendido:", miCola.quitar()); // Cliente 1
console.log("Nuevo frente:", miCola.frente()); // Cliente 2