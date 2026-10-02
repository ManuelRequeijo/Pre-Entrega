import { BASE_URL } from "../config.js";

// Elimina un producto por ID (ej: "products/7")
async function deleteProduct(productEndpoint) {
  try {
    const [, productId] = productEndpoint.split("/");

    if (!productId) {
      console.error("Tenés que indicar un ID de producto para eliminar.");
      console.log("Ejemplo: npm run start DELETE products/7");
      return;
    }

    const response = await fetch(`${BASE_URL}/${productEndpoint}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const { id, title, price, category } = await response.json();

    console.log("\nProducto eliminado:\n");
    console.log(`  ID:        ${id}`);
    console.log(`  Título:    ${title}`);
    console.log(`  Precio:    $${price}`);
    console.log(`  Categoría: ${category}`);
  } catch (error) {
    console.error(`Error al eliminar el producto: ${error.message}`);
  }
}

export { deleteProduct };
