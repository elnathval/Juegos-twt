# Los Juegos de Twitter: Simulador

Este es el simulador de Los Juegos de Twitter. Es un simulador de los juegos del hambre pero donde se pueden poner imágenes para cada jugador y automáticamente hace capturas de cada fase.

## Requisitos
Hace falta instalar los paquetes necesarios:
```sh
npm install
```

## Ejecutar
Para ejecutar hace falta correr `npm run start`

## Cómo poner imágenes
En `./webpage/img/`, hace falta poner las imágenes (en formato .jpg) en el orden en que estarán los participantes.

## Modo sin capturas de pantalla
Por defecto, la aplicación tiene activado el modo con capturas de pantalla. Para desactivarlo, solamente hace falta cambiar el valor de `screenshot-mode` en el archivo `mode.txt`.