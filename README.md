# Sprint 2 Entrega 2.1 : Función Debounce

# Configuración
Instalar los siguientes módulos en la terminal:
- npm init -y
- npm install typescript -D
- npm i -D ts-node
- npm i -D jest typescript ts-jest @types/jest
- npm i chalk@4.1.2
- tsc -init
- npx tsc

# Test
Realizado con Jest, consiste en comprobar si la función debounce se ejecuta una única vez dentro del intervalo de desfase.
Para ejecutar el test, en la carpeta raíz escribir en la terminal:
- npm test

# CLI
Realizado con la interfaz de Readline, que viene integrado en node. Para ejecutarlo:
- npm run debounce

Este programa muestra como afecta la función debounce con un desfase de 1 segundo a la hora de devolver un output. En pantalla, tras introducir el texto y pulsar Enter, veremos al instante una réplica del texto introducido y al cabo de 1 segundo otra vez el mismo texto.

# Front End
Archivo html incluido en el directorio raíz. En este caso introducimos un texto y podemos ver el efecto del debounce de dos maneras:
1. Por pantalla podemos observar que el input ejecutado con la función debounce aparece una vez transcurrido 1 segundo desde que dejamos de escribir, mientras que el input sin debounce aparece simultáneamente.
2. En la consola podemos ver como el input "normal" envía tantas solicitudes al servidor como carácteres introducidos, mientras que el input con debounce se ejecuta sólo cuando dejamos de teclear. 
