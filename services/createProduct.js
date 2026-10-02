import { BASE_URL } from "../config.js";

// Crea un producto nuevo con title, price y category
async function createProduct(title, price, category) {
  if (!title || !price || !category) {
    console.error("Faltan datos para crear el producto.");
    console.log("Uso: npm run start POST products <title> <price> <category>");
    console.log("Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras");
    return;
  }

  try {
    const newProduct = {
      title,
      price: Number(price),
      category,
    };

    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const createdProduct = await response.json();
    const result = { ...newProduct, ...createdProduct };

    console.log("\nProducto creado exitosamente:\n");
    console.log(`  ID asignado: ${result.id}`);
    console.log(`  Título:      ${result.title}`);
    console.log(`  Precio:      $${result.price}`);
    console.log(`  Categoría:   ${result.category}`);
  } catch (error) {
    console.error(`Error al crear el producto: ${error.message}`);
  }
}

export { createProduct };
