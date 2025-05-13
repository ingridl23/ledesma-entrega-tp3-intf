# Formulario de Contacto - Entregable 3

**Trabajo Práctico - Interfaces de Usuario e Interacción**  
**Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (TUDAI)**  
**Tres Arroyos, 2025**

### Profesores:
- Ing. Hernández Gauna, Jorge G.  
- A.P. Nelson Garrido  
- Ayudante Alumno: Arana, Facundo  
- Alumna: Ledesma, Ingrid Milagros

---

## Descripción

Este proyecto consiste en la simulacion de desarrollo de un formulario de contacto para la empresa de Arcor Argentina.Permitiendo a potenciales clientes realizar consultas comerciales de manera efectiva. El formulario incluye campos esenciales y validaciones para garantizar una comunicación eficiente.

---

## Funcionalidades

### Campos del formulario:

- Nombre  
- Apellido  
- País  
- Código Postal  
- Código de Área  
- Prefijo  
- Teléfono  
- Email  
- Asunto  
- Mensaje  

### Validaciones:

- El usuario debe completar al menos los campos: **teléfono** o **email**.  
- El campo **mensaje** es obligatorio. Esto se controla desde js analizando las entradas cuando  el usuario intente enviar el formulario sin haber completado los campos requeridos.

- Se implementa a nivel codigo un input oculto como forma de prevencion ante posibles bots (técnica conocida como honeypot). Para esto se valida que este campo esté vacío al momento de enviar el formulario.

---

## Estructura del Proyecto
├── index.html
|__ codigoAyuda.html
├── css/
│ └── styles.css
├── js/
│ └── logica.js
├── images/
│ └── [imágenes relacionadas]
└── README.md


---

## Justificación de Diseño y Desarrollo

Las decisiones tomadas durante el desarrollo del formulario responden a principios de **usabilidad**, **accesibilidad** y **coherencia visual**, orientados a mejorar la experiencia del usuario y facilitar el contacto con la empresa.

---

## Diseño UI/UX

### Disposición clara y simple

Se colocaron los campos en una única columna vertical para facilitar su lectura y uso, especialmente en dispositivos móviles.

### Animación en etiquetas

Las etiquetas de los campos se posicionan sobre los inputs y se animan hacia arriba al enfocar o escribir. Esto mantiene el diseño limpio sin perder información contextual.

El botón de envío del formulario realiza una animación clara y comprensible para el usuario, brindando así una experiencia de calidad durante la navegación por el sitio. (animaciones de tilde si el envio fue exitoso o cruz si falto completar campos requeridos).

Tambien presentan animaciones la seccion de navegacion y logo de las redes sociales en el footer  del sitio.



### Feedback visual

Se utilizaron colores y bordes sutiles para indicar foco o errores, mejorando la interacción sin distraer al usuario.

### Colores y tipografía

- **Paleta de colores:** combinación de colores  que reflejan profesionalismo e identidad de la empresa, con detalles destacados para llamados a la acción.  
- **Tipografía:** fuente sans-serif moderna y legible, adecuada para todo tipo de pantallas.

---

## Validaciones

Se implementó una validación en JavaScript para asegurar que el usuario complete al menos uno de los campos: **teléfono** o **email**, y además el campo **mensaje**.

Esto permite adaptarse a diferentes preferencias de contacto sin forzar un único medio, priorizando la flexibilidad.

---

## Responsividad

Se aplicaron media queries para asegurar que el formulario se adapte correctamente a dispositivos móviles y escritorios, manteniendo la funcionalidad y el diseño en ambos casos.

---

## Accesibilidad

- Las etiquetas están correctamente asociadas a los inputs (`<label for="...">`)  
- Se respeta el orden lógico de navegación por teclado.  

---

## Demostración Funcional

🔗 Puedes ver una demostración funcional del formulario ejecutando el proyecto localmente.

---

## Clonar el Repositorio

```bash
git clone https://github.com/ingridl23/ledesma-entrega-tp3-intf.git
Luego, abrir el archivo index.html en un navegador moderno.

