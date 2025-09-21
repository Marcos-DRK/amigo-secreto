Amigo Secreto Challenge

Este proyecto es una aplicación web sencilla para organizar un juego de Amigo Secreto. 
Permite a los usuarios añadir participantes, realizar un sorteo aleatorio para asignar un amigo secreto a cada persona (asegurándose de que nadie se regale a sí mismo), 
y luego mostrar los resultados. 
También incluye la opción de reiniciar el sorteo.

Tecnologías Utilizadas

HTML5: Para la estructura y contenido de la página web.
CSS3: Para dar estilo y hacer la interfaz de usuario atractiva y responsiva.
JavaScript: Para la lógica de la aplicación, incluyendo la gestión de participantes, el algoritmo de sorteo y la interacción con el DOM.

Características

Añadir Participantes: Introduce nombres y añádelos a la lista.
Eliminar Participantes: Quita participantes individualmente de la lista.
Sorteo Aleatorio:Algoritmo que asigna un amigo secreto a cada participante, asegurando que:
Nadie se regala a sí mismo.
Cada persona recibe un regalo y da un regalo.
Visualización de Resultados:** Muestra claramente quién regala a quién.
Reiniciar Sorteo:** Permite empezar de nuevo con una nueva lista de participantes.

Cómo Usar

1.Clona el repositorio:
git clone [URL_DE_TU_REPOSITORIO]
cd amigo-secreto
2.  Abre `index.html`:Simplemente abre el archivo `index.html` en tu navegador web preferido.

Notas del Desarrollador

-El algoritmo de sorteo está diseñado para manejar un número variable de participantes y reintenta el sorteo si no logra encontrar una combinación válida en la primera pasada (útil para prevenir bucles infinitos en casos extremos).
-La interfaz de usuario es simple y funcional, enfocada en la usabilidad.
