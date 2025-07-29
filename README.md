# Pruebas Automatizadas con WebdriverIO

Este proyecto contiene pruebas automatizadas utilizando WebdriverIO con Cucumber para realizar pruebas funcionales en aplicaciones web.

## Características

- Framework de pruebas: WebdriverIO
- Lenguaje de especificación: Cucumber (Gherkin)
- Reportes: Allure y JUnit
- Soporte para múltiples navegadores: Chrome, Firefox, Safari
- Ejecución en paralelo
- Reintentos automáticos
- Capturas de pantalla en fallos

## Estructura del Proyecto

```
├── features/
│   ├── login.feature         # Escenarios de prueba para login
│   ├── latam_cotizacion.feature  # Escenarios para cotización en LATAM
│   ├── pageobjects/          # Objetos de página
│   └── step-definitions/     # Definiciones de pasos
├── allure-results/          # Resultados de pruebas Allure
├── junit-results/           # Resultados de pruebas JUnit
└── wdio.conf.js             # Configuración de WebdriverIO
```

## Scripts Disponibles

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas específicas
npm run test:latam     # Solo pruebas de LATAM
npm run test:login     # Solo pruebas de login

# Ejecutar pruebas en paralelo
npm run test:parallel

# Ejecutar pruebas con reintentos
npm run test:retry

# Ejecutar pruebas en modo headless
npm run wdio:headless

# Generar reportes
npm run report         # Generar y abrir reporte Allure
```

## Configuración de Entorno

Puedes configurar diferentes entornos usando variables de entorno:

```bash
# Ejecutar en diferentes navegadores
npm run test:chrome
npm run test:firefox
npm run test:safari

# Ejecutar en diferentes entornos
npm run test:dev
npm run test:stage
npm run test:prod

# Ajustar tiempos de espera
npm run test:slow     # Tiempos de espera más largos
npm run test:fast     # Tiempos de espera más cortos
```