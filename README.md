# Gandhi Restaurant Website

## Estructura del proyecto
gandhi-website/
├── index.html          → Página principal
├── css/
│   └── styles.css      → Todos los estilos (colores, layout, responsive)
├── js/
│   └── main.js         → Interacciones (idioma, menú, lightbox, animaciones)
├── images/
│   ├── hero.jpg              → Foto de fondo del hero (portada)
│   ├── logo-mark.png         → Ícono/emblema Gandhi (fondo transparente)
│   ├── logo-text.jpg         → Logo con texto "GANDHI"
│   ├── gallery-1.jpg         → Galería foto 1
│   ├── gallery-2.jpg         → Galería foto 2
│   ├── gallery-3.jpg         → Galería foto 3
│   ├── gallery-4.jpg         → Galería foto 4
│   ├── gallery-5.jpg         → Galería foto 5
│   ├── gallery-6.jpg         → Galería foto 6
│   ├── gallery-7.jpg         → Galería foto 7
│   ├── gallery-8.jpg         → Galería foto 8
│   └── gallery-9.jpg         → Galería foto 9
└── README.md

## Cómo editar en VS Code

### Colores (css/styles.css, líneas 1-10)
- --text: #f6eadf         → Color dorado principal
- --bg: #21000b          → Fondo oscuro principal  
- --wine: #430718        → Color vino secundario
- --text: #f6eadf        → Color texto principal
- --muted: #d0beb3       → Color texto secundario

### Cambiar imágenes
Reemplaza los archivos en /images/ con tus fotos.
Mantén los mismos nombres de archivo.

### Cambiar textos del menú
Busca en index.html la sección <section id="menu">
Cada plato tiene esta estructura:
  <div class="menu-item">
    <div class="dish-name">NOMBRE DEL PLATO</div>
    <div class="dish-desc" data-es="Descripción ES" data-en="Description EN">Descripción ES</div>
  </div>

### Cambiar datos de contacto
Busca en index.html:
- Teléfono: "+34 966 70 58 56"
- WhatsApp: "wa.me/34966705856"
- Dirección: "Calle Cala Dorada"
- Horario: "Lun–Dom: 12:00"

### Redes sociales
Busca en index.html la sección class="socials"
Reemplaza los href con tus URLs reales.

## Publicar gratis en Netlify
1. Ve a netlify.com y crea cuenta gratuita
2. Arrastra la carpeta "gandhi-website" completa
3. Netlify te da una URL gratis en segundos
