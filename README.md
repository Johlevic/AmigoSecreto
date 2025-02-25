
# **Amigo Secreto**

## Descripción

**"Amigo Secreto"** es una aplicación web interactiva que permite realizar sorteos de amigo secreto entre un grupo de personas. Los usuarios pueden añadir los nombres de sus amigos y luego hacer un sorteo aleatorio, que se celebra con un efecto visual de confeti. La aplicación es completamente responsiva, ofreciendo una experiencia amigable tanto en dispositivos móviles como en pantallas más grandes.

---

## Características

- **Ingreso de nombres**: Los usuarios pueden agregar los nombres de sus amigos a una lista para incluirlos en el sorteo.
- **Sorteo aleatorio**: Un botón de "Sortear" selecciona aleatoriamente un amigo de la lista.
- **Notificaciones interactivas**: Se utilizan alertas con SweetAlert para mostrar mensajes sobre el estado de la lista y el sorteo.
- **Efecto visual de confeti**: Al realizar el sorteo, se lanza un confeti para celebrar el evento.
- **Botones dinámicos**: Después de realizar el sorteo, el botón de "Sortear" se oculta y se muestra un botón para hacer un nuevo sorteo.

---

## Tecnologías

- **HTML5**: Para la estructura básica de la aplicación.
- **CSS3**: Estilos personalizados con media queries y flexbox para garantizar una experiencia responsiva.
- **JavaScript**: Para la lógica de la aplicación, como el sorteo aleatorio, la manipulación de la interfaz y las interacciones.
- **SweetAlert2**: Para mostrar alertas y mensajes interactivos con un diseño atractivo.
- **Confetti.js**: Para generar el efecto visual de confeti al realizar el sorteo.

---

## Requisitos

Para ejecutar esta aplicación, solo necesitas un navegador web moderno. No es necesario instalar ningún servidor o entorno de desarrollo específico. Sin embargo, si deseas desarrollar o modificar la aplicación, puedes usar cualquier editor de código y tener un entorno local de desarrollo para probar los cambios.

---

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/Johlevic/AmigoSecreto.git
    ```

2. Abre el archivo `index.html` en tu navegador.

   No se requieren instalaciones adicionales. Si deseas trabajar en el proyecto localmente, puedes usar cualquier editor de código.

---

## Uso

1. Ingresa los nombres de tus amigos en el campo de texto y presiona "Añadir".
2. Cuando hayas agregado al menos dos amigos, presiona el botón **"Sortear amigo"** para seleccionar aleatoriamente un amigo secreto.
3. Después de realizar el sorteo, el botón cambiará a **"Nuevo Sortear"**. Puedes presionarlo para realizar un nuevo sorteo.
4. Las alertas te avisarán si la lista está vacía o si hay menos de dos amigos para hacer el sorteo.

---

## Estructura de Archivos

amigo-secreto/
├── assets/
│   ├── amigo-secreto.png     # Imagen representativa
│   └── play_circle_outline.png  # Icono del botón
├── index.html                # Página principal de la aplicación
├── style.css                 # Estilos de la aplicación
├── app.js                    # Lógica de JavaScript
├── README.md                 # Documentación del proyecto


---

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar o agregar nuevas funcionalidades a la aplicación, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios y haz un commit de los mismos (`git commit -am 'Añadir nueva característica'`).
4. Envía un pull request con tus cambios.

---



## Autor

Desarrollado por [Jhony Lezama](https://github.com/johlevic).

