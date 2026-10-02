# Pre-Entrega - Cliente CLI para FakeStore API

Aplicación de línea de comandos desarrollada con Node.js que permite interactuar con la [FakeStore API](https://fakestoreapi.com) para consultar, crear y eliminar productos.

## Instalación

```bash
npm install
```

## Uso

### Obtener todos los productos

```bash
npm run start GET products
```

### Obtener un producto por ID

```bash
npm run start GET products/15
```

### Crear un producto nuevo

```bash
npm run start POST products <title> <price> <category>
```

Ejemplo:

```bash
npm run start POST products T-Shirt-Rex 300 remeras
```

### Eliminar un producto

```bash
npm run start DELETE products/7
```

## Estructura del proyecto

```
Pre-Entrega/
├── config.js              - Configuración (URL base de la API)
├── index.js               - Punto de entrada y router de comandos
├── package.json
└── services/
    ├── getProducts.js     - Consulta de productos (GET)
    ├── createProduct.js   - Creación de productos (POST)
    └── deleteProduct.js   - Eliminación de productos (DELETE)
```

## Tecnologías

- Node.js
- ESModules
- Fetch API
- FakeStore API
