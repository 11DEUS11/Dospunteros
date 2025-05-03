const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const nombreInicio = arr[inicio];
        const nombreSiguiente = arr[siguiente]; 
    
        if (nombreInicio.charAt(0) === nombreSiguiente.charAt(0)) {
          return [nombreInicio, nombreSiguiente];
        }
    
        inicio++;
        siguiente++;
      }
    
      return null;
    }

    

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]

// se aplica el algoritmo de 2 punteros para encontrar una pareja con la misma inicial en un lista de invitados