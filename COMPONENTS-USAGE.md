# Uso de Componentes OpenGraph para SEO

## 🎯 **Componentes Creados**

### 1. **OpenGraph.astro** - Componente Base

Componente principal para meta tags sociales genéricos.

#### Uso Básico:

```astro
---
import OpenGraph from '@/components/astro/OpenGraph.astro';
---

<OpenGraph
	title='Título de la página'
	description='Descripción de la página'
	image='/imagen.jpg'
	url='https://tu-sitio.com/pagina'
	type='website'
	locale='es_CO'
/>
```

#### Propiedades Disponibles:

- `title`: Título de la página
- `description`: Descripción de la página
- `image`: Ruta de la imagen (opcional, default: `/og.jpg`)
- `url`: URL canónica (opcional, default: URL actual)
- `type`: Tipo de contenido (`website`, `article`, `tour`)
- `locale`: Idioma (`es_CO`, `en_US`)

### 2. **TourOpenGraph.astro** - Componente para Tours

Componente especializado para páginas de tours con información adicional.

#### Uso en Tours:

```astro
---
import TourOpenGraph from '@/components/astro/TourOpenGraph.astro';

const tour = Astro.props.tour;
const tourPrice = tour.data.pricing.basePrices[0]?.price || 0;
---

<TourOpenGraph
	title={`${tour.data.title} | Aeroturex Especiales`}
	description={tour.data.description}
	image={tour.data.tourImages?.[0]?.src || '/og.jpg'}
	url={`https://aeroturextransportes.com/tours/${tour.data.slugUrl}`}
	locale='es_CO'
	tourType={tour.data.tourType}
	duration={tour.data.duration}
	price={`${tourPrice} COP`}
	location='Medellín, Antioquia'
/>
```

#### Propiedades Adicionales:

- `tourType`: Tipo de tour (ej: "Tour Privado", "Tour Grupal")
- `duration`: Duración en horas
- `price`: Precio del tour
- `location`: Ubicación del tour

## 🚀 **Integración en el Layout**

### Layout Principal (Layout.astro)

```astro
---
import OpenGraph from '@/components/astro/OpenGraph.astro';
---

<OpenGraph
	title={title}
	description={description}
	image='/og.jpg'
	url={canonicalUrlFinal}
	type='website'
	locale={currentLocale === 'es' ? 'es_CO' : 'en_US'}
/>
```

### Páginas de Tours

```astro
---
import TourOpenGraph from '@/components/astro/TourOpenGraph.astro';
---

<Layout>
	<TourOpenGraph
		title={tourTitle}
		description={tourDescription}
		image={tourImage}
		url={tourUrl}
		locale='es_CO'
		tourType='Tour Privado'
		duration={8}
		price='150,000 COP'
		location='Medellín, Antioquia'
	/>

	<!-- Contenido de la página -->
</Layout>
```

## 📱 **Meta Tags Generados**

### Open Graph (Facebook, LinkedIn)

- `og:type`
- `og:url`
- `og:title`
- `og:description`
- `og:image`
- `og:image:width`
- `og:image:height`
- `og:locale`
- `og:site_name`

### Twitter Cards

- `twitter:card`
- `twitter:site`
- `twitter:creator`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- `twitter:label1-4` (para tours)
- `twitter:data1-4` (para tours)

### Otros

- `pinterest-rich-pin`
- Meta tags específicos para WhatsApp
- Meta tags para Instagram

## 🔧 **Personalización**

### Cambiar Imagen por Defecto

```astro
<OpenGraph title='Mi Página' description='Descripción' image='/mi-imagen-personalizada.jpg' <!-- ← Cambiar aquí -->
	/></OpenGraph
>
```

### Cambiar Tipo de Contenido

```astro
<OpenGraph title='Mi Tour' description='Descripción del tour' type='tour' <!-- ← Cambiar aquí --> /></OpenGraph>
```

### Cambiar Idioma

```astro
<OpenGraph title='My Page' description='Description' locale='en_US' <!-- ← Cambiar aquí --> /></OpenGraph>
```

## 📊 **Beneficios de SEO**

### 1. **Mejor Compartido en Redes Sociales**

- Imágenes optimizadas para cada plataforma
- Títulos y descripciones atractivos
- Información estructurada

### 2. **Mejor Indexación**

- Meta tags consistentes
- URLs canónicas
- Datos estructurados

### 3. **Mejor Experiencia de Usuario**

- Previsualizaciones ricas en redes sociales
- Información clara sobre el contenido
- Navegación mejorada

## 🛠️ **Mantenimiento**

### Actualizar Redes Sociales

Para cambiar las URLs de redes sociales, edita el componente `OpenGraph.astro`:

```astro
<!-- Cambiar estas líneas -->
<meta name='twitter:site' content='@tu-nuevo-usuario' />
<meta property='fb:app_id' content='tu-nuevo-app-id' />
```

### Agregar Nuevas Plataformas

Para agregar soporte para nuevas redes sociales, agrega meta tags en `OpenGraph.astro`:

```astro
<!-- Ejemplo para TikTok -->
<meta property='og:image:width' content='1080' />
<meta property='og:image:height' content='1920' />
```

## 📝 **Notas Importantes**

1. **Imágenes**: Usa imágenes de alta calidad (mínimo 1200x630px)
2. **Títulos**: Máximo 60 caracteres para mejor visualización
3. **Descripciones**: Máximo 160 caracteres
4. **URLs**: Siempre usa URLs absolutas para las imágenes
5. **Idiomas**: Configura correctamente el locale para cada página

## 🔗 **Herramientas de Prueba**

- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Open Graph Debugger](https://developers.facebook.com/tools/debug/og/object/)
