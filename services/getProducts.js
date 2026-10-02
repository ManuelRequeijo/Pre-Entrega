import { BASE_URL } from "../config.js";

// Obtiene todos los productos
async function getAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const products = await response.json();

    console.log("\nLista completa de productos:\n");

    products.forEach(({ id, title, price, category }) => {
      console.log(`  [ID: ${id}] ${title}`);
      console.log(`     Precio: $${price} | Categoría: ${category}\n`);
    });

    console.log(`Total de productos: ${products.length}`);
  } catch (error) {
    console.error(`Error al obtener los productos: ${error.message}`);
  }
}

// Obtiene un producto por ID (ej: "products/15")
async function getProductById(productEndpoint) {
  try {
    const [, productId] = productEndpoint.split("/");

    if (!productId) {
      console.error("Tenés que indicar un ID de producto.");
      console.log("Ejemplo: npm run start GET products/15");
      return;
    }

    const response = await fetch(`${BASE_URL}/${productEndpoint}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const { id, title, price, description, category, image, rating } =
      await response.json();

    console.log("\nDetalle del producto:\n");
    console.log(`  ID:          ${id}`);
    console.log(`  Título:      ${title}`);
    console.log(`  Precio:      $${price}`);
    console.log(`  Categoría:   ${category}`);
    console.log(`  Descripción: ${description}`);
    console.log(`  Imagen:      ${image}`);
    console.log(`  Rating:      ${rating.rate}/5 (${rating.count} votos)`);
  } catch (error) {
    console.error(`Error al obtener el producto: ${error.message}`);
  }
}

export { getAllProducts, getProductById };
