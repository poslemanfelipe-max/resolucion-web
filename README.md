# RESOLUCIÓN — Sitio web de Juana Andrada

Portfolio de fotografía y audiovisual. Es una sola página con estas secciones:
portada, quién soy, trabajos por categoría, video, formulario de cotización
(que abre WhatsApp) y contacto.

Esta guía está pensada para quien no programa. Lo único que vas a tocar son:

| Qué querés cambiar            | Dónde                                  |
| ----------------------------- | -------------------------------------- |
| Fotos de los trabajos         | carpetas dentro de `fotos/`            |
| Textos, links, WhatsApp, videos | el archivo `src/data/site.ts`        |
| Foto de portada / de Juana    | carpeta `fotos/sitio/`                 |

---

## 1. Agregar o sacar fotos

Las fotos están en la carpeta `fotos/`, con una subcarpeta por categoría:

```
fotos/
├── moda/
├── eventos/
├── corporativo/
├── recitales/
├── documental/
└── sitio/        ← fotos especiales (portada, retrato de Juana)
```

- **Para agregar una foto:** subila a la carpeta de la categoría. Nada más.
  El sitio la optimiza solo (la achica y la convierte a formatos livianos).
- **Para sacar una foto:** borrala de la carpeta.
- **Formatos:** JPG, PNG o WebP. Podés subir los originales. Si pesan más de
  ~20 MB conviene exportarlas a unos 3000 px del lado largo.

### El orden

Las fotos se muestran **en orden alfabético por nombre de archivo**. Para
elegir el orden, poneles números adelante:

```
01-campaña-otoño.jpg
02-retrato-estudio.jpg
03-detalle-anillos.jpg
```

### La carátula de cada categoría

Es la imagen grande, a pantalla completa, con el título encima.

- Si en la carpeta hay un archivo llamado **`portada`** (`portada.jpg`,
  `portada.webp`...), esa es la carátula y no se repite en la grilla. Sirve también
  para collages armados en Canva.
- Si no hay `portada`, la carátula es la primera foto (la `01-`).

Conviene una imagen horizontal, con espacio abajo a la izquierda para el título.
La carátula de **Video** es `fotos/sitio/portada-video.jpg`.

### Descripción de las fotos (texto alternativo)

Sirve para Google y para personas ciegas que usan lector de pantalla. Hay tres
formas, de la más simple a la más completa:

1. **No hacer nada:** se usa "Fotografía de moda por Juana Andrada".
2. **Nombrar bien el archivo:** `03-novia-entrando-al-salón.jpg` se describe como
   "Novia entrando al salón". Los nombres tipo `IMG_4521` se ignoran.
3. **Escribirla a mano** en `src/data/site.ts`, en la parte `descripcionesFotos`.

### Categoría sin fotos

Si una carpeta está vacía, la sección igual aparece con el texto "Nuevas fotos
muy pronto." (así los links directos como `/#moda` siguen funcionando).

---

## 2. Cambiar textos, links y datos de contacto

Todo está en **`src/data/site.ts`**. Abrilo, cambiá lo que está entre comillas
`'...'` y guardá. Reglas para no romper nada:

- No borres las comillas, las comas `,` ni las llaves `{ }`.
- Si un texto lleva apóstrofo ('), escribilo así: `\'`.

Qué hay ahí:

- **Marca, nombre, ubicación, frase y subtítulo.**
- **`url`:** la dirección del sitio. Actualizala cuando tengas el dominio propio
  (ver sección 4). Es importante para que se vea bien la vista previa al compartir.
- **`seo`:** el título y la descripción que aparecen en Google.
- **`imagenes`:** qué foto de `fotos/sitio/` va en la portada, en "Quién soy" y
  cuál se ve al compartir el link. También podés agregar una foto de fondo para la
  frase ("The world is shaped…") y para el título de Video (por ejemplo el mar,
  como en el portfolio de Canva): subila a `fotos/sitio/` y escribí su nombre, ej.
  `frase: 'sitio/mar.jpg'`.
- **`quienSoy`:** el texto de presentación. La frase de `cierre` va en itálica.
- **`categorias`:** título y bajada de cada sección. El orden de la lista es el
  orden en la página. `carpeta` es el nombre de la carpeta de fotos **y** el link
  directo (ej. `/#moda`).
- **`cotizacion`:** título del formulario y opciones de "Tipo de trabajo".
- **`contacto`:** mail, WhatsApp, Instagram y TikTok.
  - `whatsapp` va solo con números: `549` + código de área + número, sin 0 ni 15.
    Ejemplo: `5491138489276`.
- **`footer`:** el texto de abajo de todo.

---

## 3. Agregar videos

### Videos propios (subidos al sitio)

1. Subí el video `.mp4` a la carpeta **`public/videos`**. Numeralo para elegir el
   orden, ej. `04-videoclip.mp4`.
2. (Opcional) Subí una imagen `.jpg` **con el mismo nombre** (`04-videoclip.jpg`):
   es la portada que se ve antes de tocar play. Si no hay, se ve un fondo negro.
3. (Opcional) En `src/data/site.ts`, dentro de `video` → `archivos`, podés poner un
   título y una descripción. Si no, el título sale del nombre del archivo.

Conviene que cada video pese menos de 20 MB (los de WhatsApp ya vienen livianos).
Para videos largos o de alta calidad, mejor subirlos a YouTube o Vimeo (abajo).

### Videos de YouTube o Vimeo

En `src/data/site.ts`, buscá la parte `video` y completá la `lista`:

```ts
lista: [
  { url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', titulo: 'Videoclip — Artista', descripcion: 'Dirección y cámara.' },
  { url: 'https://vimeo.com/123456789', titulo: 'Campaña — Marca' },
] as { url: string; titulo: string; descripcion?: string; miniatura?: string }[],
```

- Sirven links de **YouTube** (normales, `youtu.be` o Shorts) y **Vimeo**.
- `descripcion` es opcional.
- El video recién se carga cuando alguien toca "play", así la página sigue
  cargando rápido.
- Si un video de Vimeo no muestra miniatura, agregá `miniatura: 'https://…jpg'`
  con el link a una imagen.

---

## 4. Publicar el sitio en Vercel (gratis) con dominio propio

### La primera vez

1. Creá una cuenta en [github.com](https://github.com) y otra en
   [vercel.com](https://vercel.com) (podés entrar a Vercel con la de GitHub).
2. Subí este proyecto a un repositorio de GitHub.
3. En Vercel: **Add New… → Project**, elegí el repositorio y tocá **Deploy**.
   Vercel detecta Astro solo, no hace falta configurar nada.
4. En un minuto te da una dirección tipo `resolucion-xxxx.vercel.app`.
   Copiala en `url` dentro de `src/data/site.ts`.

### Cómo se actualiza después

Cada vez que subís un cambio a GitHub (una foto nueva, un texto), **Vercel
publica el sitio actualizado solo**, en uno o dos minutos.

La forma más fácil, sin instalar nada: desde la web de GitHub.

- **Subir fotos:** entrá a la carpeta, por ejemplo `fotos/moda`, y usá
  **Add file → Upload files**. Arrastrá las fotos y tocá **Commit changes**.
- **Borrar una foto:** abrila en GitHub, menú **⋯ → Delete file**, y **Commit changes**.
- **Editar textos:** abrí `src/data/site.ts`, tocá el lápiz ✏️, cambiá y
  **Commit changes**.

Si algo sale mal (por ejemplo, se borró una coma), Vercel no publica el cambio y
el sitio sigue como estaba. En Vercel → **Deployments** ves el error, y en GitHub
podés deshacer el último cambio.

### Conectar un dominio propio (ej. resolucion.com.ar)

1. Comprá el dominio. Los `.com.ar` se registran en [nic.ar](https://nic.ar);
   los `.com` en cualquier registrador (Namecheap, GoDaddy, etc.). También se
   pueden comprar dentro de Vercel.
2. En Vercel: tu proyecto → **Settings → Domains → Add**, escribí el dominio.
3. Vercel te muestra qué registros DNS cargar (normalmente un registro **A** y un
   **CNAME** para `www`). Cargalos en el panel de donde compraste el dominio.
   - Con **nic.ar**: en la delegación del dominio podés poner los servidores de
     Vercel (`ns1.vercel-dns.com` y `ns2.vercel-dns.com`), que es lo más simple.
4. Esperá (de minutos a unas horas). Vercel activa el candadito HTTPS solo.
5. Actualizá `url` en `src/data/site.ts` con el dominio nuevo, ej.
   `'https://resolucion.com.ar'`.

### Link para la bio de Instagram

Cada sección tiene su link directo:

| Sección       | Link                     |
| ------------- | ------------------------ |
| Moda          | `tudominio.com/#moda`        |
| Eventos       | `tudominio.com/#eventos`     |
| Corporativo   | `tudominio.com/#corporativo` |
| Recitales     | `tudominio.com/#recitales`   |
| Documental    | `tudominio.com/#documental`  |
| Video         | `tudominio.com/#video`       |
| Cotizar       | `tudominio.com/#cotizar`     |
| Contacto      | `tudominio.com/#contacto`    |

### Alternativa: Netlify

También funciona en [netlify.com](https://netlify.com): **Add new site → Import
an existing project**, elegí el repositorio y dejá la configuración que propone:
comando `npm run build` y carpeta `dist`. Los dominios se conectan en
**Domain management**.

---

## 5. Para quien programe

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera el sitio en dist/
npm run preview   # sirve dist/ para probar el build
```

Requiere Node 22.12 o más nuevo.

- **Stack:** Astro (estático), CSS propio en `src/styles/global.css` (colores en
  `:root`), Montserrat auto-alojada vía `@fontsource-variable`.
- **Imágenes:** `src/lib/fotos.ts` lee `fotos/**` con `import.meta.glob`. Las
  galerías usan `<Picture>` (AVIF/WebP, `srcset` responsive, lazy loading), y el
  visor usa una versión WebP de hasta 2000 px.
- **Componentes:** `src/components/` (Nav, Hero, QuienSoy, Categoria, Videos,
  Cotizacion, Contacto, Lightbox).
- **SEO:** metadatos, Open Graph (imagen de 1200×630 generada desde
  `imagenes.compartir`), JSON-LD, `sitemap-index.xml` y `robots.txt` generados
  desde `site.url`.
- **Accesibilidad:** se respeta `prefers-reduced-motion`. El visor es un `<dialog>`
  que se maneja con teclado (← → Esc) y con swipe.
