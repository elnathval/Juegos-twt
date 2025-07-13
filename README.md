# Los Juegos de Twitter: Simulador

Este es el simulador de Los Juegos de Twitter. Es un simulador de los juegos del hambre pero donde se pueden poner imágenes para cada jugador y automáticamente hace capturas de cada fase.

## Requisitos
Necesita Node.js versión 20 o mayor

Hace falta instalar los paquetes necesarios (en la terminal, en la carpeta raíz del proyecto):
```sh
npm install
```

## Ejecutar
Para ejecutar hace falta correr `npm run start` mediante la terminal o Powershell en la carpeta raíz del proyecto.

## Cómo poner imágenes
En `./webpage/img/`, hace falta poner las imágenes (en formato .jpg) en el orden en que estarán los participantes.

## Modo capturas de pantalla
Por defecto, la aplicación tiene activado el modo con capturas de pantalla. Para desactivarlo, solamente hace falta cambiar el valor de `screenshot-mode` en el archivo `mode.txt`.

Para las capturas, se necesita poner una ubicación de donde recoger las capturas de pantalla enteras en el valor de `screenshot-location` en el archivo `mode.txt`.

En esta carpeta, tienen que haber subcarpetas de cada fase (todos los participantes, baño de sangre, dia XX)