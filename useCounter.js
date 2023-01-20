import { useState } from "react";

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue)

  // Podemos mandar argumentos
  // e.x: value = 1
  // en nuestro componente debemos ejecutar como
  // una funcion: () => increment(2) => Esto hara que ahora
  // incremente de 2 en 2
  const increment = (value = 1) => {
    setCounter(counter + value)
  }

  const decrement = () => {
    //if(counter === 1  ) return;
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}