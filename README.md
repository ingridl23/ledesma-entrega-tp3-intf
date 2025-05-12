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

Este proyecto consiste en el desarrollo de un formulario de contacto para una empresa, permitiendo a potenciales clientes realizar consultas comerciales de manera efectiva. El formulario incluye campos esenciales y validaciones para garantizar una comunicación eficiente.

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

- El usuario debe completar al menos uno de los campos: **teléfono** o **email**.  
- El campo **mensaje** es obligatorio.

---

## Estructura del Proyecto
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── script.js
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

### Feedback visual

Se utilizaron colores y bordes sutiles para indicar foco o errores, mejorando la interacción sin distraer al usuario.

### Colores y tipografía

- **Paleta de colores:** combinación de colores neutros y sobrios que reflejan profesionalismo, con detalles destacados para llamados a la acción.  
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

