import { getAllProducts, getProductById } from "./services/getProducts.js";
import { createProduct } from "./services/createProduct.js";
import { deleteProduct } from "./services/deleteProduct.js";

// Capturamos los argumentos de la terminal
// argv[0] = node, argv[1] = index.js, argv[2+] = nuestros args
const [, , method, endpoint, ...args] = process.argv;

async function main() {
  if (!method || !endpoint) {
    console.log("\nUso del programa:\n");
    console.log("  Obtener todos los productos:");
    console.log("    npm run start GET products\n");
    console.log("  Obtener un producto específico:");
    console.log("    npm run start GET products/<id>\n");
    console.log("  Crear un producto nuevo:");
    console.log("    npm run start POST products <title> <price> <category>\n");
    console.log("  Eliminar un producto:");
    console.log("    npm run start DELETE products/<id>\n");
    return;
  }

  const normalizedMethod = method.toUpperCase();
  const hasId = endpoint.includes("/");

  switch (normalizedMethod) {
    case "GET":
      if (hasId) {
        await getProductById(endpoint);
      } else {
        await getAllProducts();
      }
      break;

    case "POST": {
      const [title, price, category] = args;
      await createProduct(title, price, category);
      break;
    }

    case "DELETE":
      await deleteProduct(endpoint);
      break;

    default:
      console.error(`Método "${method}" no reconocido.`);
      console.log("Métodos válidos: GET, POST, DELETE");
      break;
  }
}

main();
