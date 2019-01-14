
# Pokédex Go

## Índice
  - [Introducción](#introducción)
  - [Inicio del Proyecto](#inicio-del-proyecto)
  - [Historias de Usuario](#historias-de-usuario)
  - [Herramientas](#herramientas)
  - [Diseño de la Interfaz de Usuario](#diseño-de-la-interfaz-de-usuario)
  - [Implementación de la Interfaz de Usuario](##implementación-de-la-interfaz-de-usuario-(html/css/js))
  - [Mejoras del Proyecto](#errores-&-mejoras) 
  - [Créditos](#image-001-readme)

## Introducción ##
![Image 001 README](https://66.media.tumblr.com/facd6b9fbc2cd6152d88e6304888c309/tumblr_pl0aaj5Ifj1qefzxxo1_1280.png)
## Inicio del Proyecto  ##
![Image 002 README](https://66.media.tumblr.com/624097b8c182a2d3ec06e02b8853fc18/tumblr_pl0aaj5Ifj1qefzxxo2_r1_1280.png)

## Historias de Usuario ##
![Image 003 README](https://66.media.tumblr.com/ae996564066c582f32062f389818de05/tumblr_pl0aaj5Ifj1qefzxxo3_r1_1280.png)
![Image 004 README](https://66.media.tumblr.com/eede62a2559a6be02f4472041da7f413/tumblr_pl0aaj5Ifj1qefzxxo4_r1_1280.png)

Gracias a dicha Encuesta Online conseguimos definir claramente cuáles eran nuestras Historias de Usuario, que finalmente resultaron ser cuatro:

* Yo como usuario principiante de **Pokémon Go** quiero poder visualizar las debilidades de los pokémones para mejorar los resultados de mis combates.
* Yo como usuario de **Pokémon Go** quisiera visualizar los tipos de los pokémones para poder elegir acertadamente al momento de batallar.
* Yo como usuario principiante de **Pokémon Go** quiero poder conocer qué pokémones podrían salir de los distintos tipos de huevos que hay en el juego.
* Yo como usurio de **Pokémon Go** quisiera poder apreciar la lista completa de los pokémones ordenada de la A a la Z y de la Z a la A.

## Herramientas ##
Teniendo esas cuatro Historias, armamos el Tablero de tareas Scrum. Debíamos saber qué necesitabamos, cuáles eran nuestras prioridades y Por dónde empezar.

Entonces acordamos que nuestra Definición de Terminado implica:
* Prototipo de Baja Fidelidad.
* Testeo real con usuarios.
* Prototipo de Alta Fidelidad #1.
* Realización de Main.js, Data.js, Html y CSS.
* Testeo real con usuarios y prototipado de Alta Fidelidad #2.
* Documentación del README.md para cada paso realizado.
* Hacer TEST unitarios para las funciones.


## Diseño de la Interfaz de Usuario:

## Prototipo de baja fidelidad

Es un bosquejo que compila a grandes rasgos todas las sugerencias brindadas por nuestros usuarios en base a sus espectivas sobre nuestra Website, considerando los botones de filtrado, dónde las ubicaríamos hasta qué mostrarían al darle CLICK.   
![giphy a y c](https://user-images.githubusercontent.com/45071312/51076722-22574580-166a-11e9-95c1-b2129b538edc.gif)

![giphy prototipo baja fidelidad](https://user-images.githubusercontent.com/45071312/51099982-e7582d80-17a1-11e9-84d4-9bf4bf84b28b.gif)

## Prototipo de Alta Fidelidad
Usando [Adobe] y [Zeplin] (https://zpl.io/adr9Bm7) el primer prototipo obtuvo color y vida.  
Teníamos ya el primer vistazo real de nuestra futura creación en un video de corto listo para empezar a ser testeado al público.
![giphy pro alta fidelidad1](https://user-images.githubusercontent.com/45071312/51101774-17a3ca00-17aa-11e9-8128-672fdd9dc6e6.gif)

## Testeos de usabilidad

El testeo de usabilidad lo realizamos con jugadores de distintas edades.

Listado de problemas u observaciones que detectamos a través de tests de usabilidad:

* La lista de pokémon tenía aplicado 'hover' y eso daba la impresión de que se podía dar Click en ellos para ser llevados a más información.
* Las teclas no eran tan claras (debían ser más notorias y específicas).
* El fondo con estampado de pequeños pokémon dificultaba o apartaba la atención de los textos, sugirieron un fondo más plano.
* Mostrar noticias relacionadas al juego como valor agregado.

## Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Lo primordial fue entender la lógica para poder crear la estructura.  
Analizamos y desglosamos la Data hasta su raíz para poder manipularla.  

Luego de haber realizado pruebas unitarias desde los ejemplos más sencillos. Logramos nuestro primer filtrado y de ahí en adelante el resto de funcionalidad, los test y manejo de teclas en main.js.

## Errores & mejoras

## Creditos