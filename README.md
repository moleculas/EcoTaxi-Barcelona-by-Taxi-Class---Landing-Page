# EcoTaxi Barcelona by Taxi Class - Guía de Implementación de Imágenes

## Descripción del Proyecto
Landing page profesional para EcoTaxi Barcelona by Taxi Class, resultado de la fusión entre EcoTaxi Barcelona y Taxi Class. La página combina el diseño premium de Taxi Class con el posicionamiento ecológico de EcoTaxi Barcelona.

## Guía de Imágenes

### 1. Hero Section - Imagen de Fondo
- **Ubicación en código**: `.hero-background`
- **Dimensiones recomendadas**: 1920x1080px (mínimo)
- **Descripción**: Vista panorámica de Barcelona con un Tesla Model S o Mercedes EQC en primer plano. Preferiblemente al atardecer con la ciudad de fondo, transmitiendo modernidad y sostenibilidad.
- **Estilo**: Fotografía profesional con colores vibrantes, enfoque en el vehículo eco-friendly.

### 2. Sección Features - Imagen de Flota
- **Ubicación en código**: `.features-image .image-placeholder`
- **Dimensiones recomendadas**: 600x600px
- **Descripción**: Collage o composición mostrando varios vehículos de la flota (Mercedes híbridos y Tesla) estacionados en línea o en movimiento por Barcelona.
- **Estilo**: Imagen limpia y profesional que muestre la variedad y calidad de la flota.

### 3. Servicios - Iconos/Imágenes de Fondo (4 imágenes)

#### 3.1 Traslados Aeropuerto
- **Ubicación**: Fondo del primer `.service-card`
- **Dimensiones**: 400x300px
- **Descripción**: Tesla o Mercedes en el Aeropuerto de Barcelona El Prat
- **Estilo**: Imagen con overlay oscuro para mantener legibilidad del texto

#### 3.2 Servicios Corporativos
- **Ubicación**: Fondo del segundo `.service-card`
- **Dimensiones**: 400x300px
- **Descripción**: Ejecutivos entrando/saliendo de un Mercedes Clase S o Tesla Model S frente a un edificio de oficinas moderno
- **Estilo**: Profesional y elegante

#### 3.3 Tours Turísticos
- **Ubicación**: Fondo del tercer `.service-card`
- **Dimensiones**: 400x300px
- **Descripción**: Vehículo eléctrico frente a la Sagrada Familia o Park Güell
- **Estilo**: Colorido y atractivo, mostrando Barcelona

#### 3.4 Paquetería Sostenible
- **Ubicación**: Fondo del cuarto `.service-card`
- **Dimensiones**: 400x300px
- **Descripción**: Conductor entregando un paquete desde un vehículo eléctrico
- **Estilo**: Dinámico, mostrando el servicio en acción

### 4. Testimonios - Avatares de Clientes (3 imágenes)
- **Ubicación**: `.author-avatar` (reemplazar iconos)
- **Dimensiones**: 100x100px (se mostrará a 48x48px)
- **Descripción**: 
  - Avatar 1: Mujer profesional, 35-45 años
  - Avatar 2: Hombre ejecutivo, 40-50 años
  - Avatar 3: Mujer joven, 25-35 años
- **Estilo**: Fotografías tipo headshot profesional, fondos neutros

### 5. Favicon
- **Ubicación**: Agregar en el `<head>` del HTML
- **Dimensiones**: 32x32px, 16x16px, y 192x192px para diferentes dispositivos
- **Descripción**: Logo simplificado combinando una hoja verde con la silueta de un taxi
- **Estilo**: Diseño minimalista, colores verde y azul marino

### 6. Logo Principal (opcional)
- **Ubicación**: `.logo-section` (si se prefiere imagen en lugar de texto)
- **Dimensiones**: 200x60px
- **Descripción**: Logo que combine "EcoTaxi Barcelona" con "by Taxi Class"
- **Estilo**: Profesional, con tipografía elegante y elementos eco-friendly

## Optimización de Imágenes

### Formatos Recomendados:
- **Fotografías**: WebP con fallback a JPEG
- **Iconos/Logos**: SVG cuando sea posible
- **Imágenes con transparencia**: PNG

### Compresión:
- Utilizar herramientas como TinyPNG o Squoosh
- Mantener calidad al 85% para JPEGs
- Optimizar para web manteniendo calidad visual

### Lazy Loading:
Implementar lazy loading para todas las imágenes excepto las del hero section:
```html
<img src="imagen.jpg" loading="lazy" alt="Descripción">
```

## Implementación en el Código

Para agregar las imágenes, reemplazar los placeholders `.image-placeholder` con:
```html
<img src="ruta/imagen.jpg" alt="Descripción descriptiva" class="img-fluid">
```

Para imágenes de fondo en CSS:
```css
.hero-background {
    background-image: url('../images/hero-barcelona-tesla.jpg');
    background-size: cover;
    background-position: center;
}
```

## Estructura de Carpetas Recomendada
```
ECOTAXIBARCELONA-TAXICLASSRENT/
├── images/
│   ├── hero/
│   │   └── hero-barcelona-tesla.jpg
│   ├── services/
│   │   ├── aeropuerto.jpg
│   │   ├── corporativo.jpg
│   │   ├── tours.jpg
│   │   └── paqueteria.jpg
│   ├── fleet/
│   │   └── flota-ecotaxi.jpg
│   ├── testimonials/
│   │   ├── avatar-1.jpg
│   │   ├── avatar-2.jpg
│   │   └── avatar-3.jpg
│   └── logos/
│       ├── favicon.ico
│       └── logo-ecotaxi-taxiclass.svg
```

## Notas Adicionales
- Todas las imágenes deben tener atributos `alt` descriptivos para accesibilidad
- Considerar el uso de srcset para imágenes responsive
- Las imágenes de vehículos deben mostrar claramente las características eco-friendly
- Mantener consistencia en el estilo fotográfico: moderno, limpio y profesional