interface TestCase {
  expected: { name: string; price: number }[];
  input: { name: string; price: number }[];
  searchText: string;
}
export function filterProducts(
  products: { name: string; price: number }[],
  searchText: string
): { name: string; price: number }[] {
  return products.filter((product) => {
    const [key, value] = Object.keys(product);
    if (product[key].toLowerCase() === searchText.toLowerCase()) {
      return product;
    }
  });
}

// const products = [
//   { name: "Laptop", price: 60000 },
//   { name: "Mouse", price: 800 },
//   { name: "Monitor", price: 12000 },
//   { name: "Monitor", price: 4000 },
//   { name: "Keyboard", price: 2000 },
//   { name: "webcam", price: 1000 },
// ];
