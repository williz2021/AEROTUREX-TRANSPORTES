# 🌐 Aeroturex Especiales

Sitio web básico para **Aeroturex Especiales**, una empresa enfocada en brindar soluciones de transporte especializadas. Esta web fue desarrollada utilizando [Astro](https://astro.build), un moderno framework para construir sitios rápidos y optimizados.

## 🚀 Tecnologías utilizadas

- [Astro](https://astro.build): Framework principal del proyecto.
- HTML / CSS / JavaScript / TailwindCSS / Typescript / React / Framer Motion / Lucide React / Lodash / HeroUI / AstroJS / AstroJS Sitemap / AstroJS Vercel
- Estructura modular basada en componentes.

## 📁 Estructura del proyecto

El proyecto sigue la estructura estándar de Astro:

```text
/
├── public/                 # Archivos públicos (imágenes, íconos, etc.)
│   └── favicon.svg
├── src/
│   ├── assets/             # Recursos como logos o imágenes
│   ├── components/         # Componentes reutilizables
│   ├── layouts/            # Plantillas generales
│   └── pages/              # Páginas del sitio (ruta basada en archivos)
├── package.json            # Dependencias y scripts
└── astro.config.mjs        # Configuración de Astro
```

## 🧑‍💻 Scripts disponibles

En la raíz del proyecto, puedes ejecutar los siguientes comandos:

| Comando           | Descripción                                               |
| ----------------- | --------------------------------------------------------- |
| `npm install`     | Instala las dependencias del proyecto                     |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:4321`      |
| `npm run build`   | Compila el sitio para producción en la carpeta `dist/`    |
| `npm run preview` | Previsualiza el sitio de producción localmente            |
| `npm run format`  | Formatea el código según las guías de estilo del proyecto |

## 📦 Instalación

```bash
git clone https://github.com/AreizaDev/web-aeroturex-especiales.git
cd web-aeroturex-especiales
npm install
npm run dev
```

## 🚀 Despliegue

Este proyecto puede ser desplegado fácilmente en:

- **[Vercel](https://vercel.com/)** ya configurado (recomendado)
- **[Netlify](https://netlify.com/)**

Solo conecta el repositorio, selecciona como comando de build: `npm run build` y como directorio de salida: `dist/`.

## 📌 Notas

- Si necesitas agregar rutas, simplemente crea nuevos archivos `.astro` en la carpeta `src/pages/`.
- Puedes personalizar los componentes y estilos en `src/components` y `src/layouts`.

## 🔗 Enlaces útiles

- [Documentación oficial de Astro](https://docs.astro.build)
