/* [Bài tập] Sắp xếp sản phẩm theo giá
1. Mục tiêu
Luyện tập sử dụng đối tượng.
Nắm được thuật toán sắp xếp trong mảng
2. Mô tả
Cho một mảng products chứa các đối tượng product gồm các thông tin sau: id, product_name, price. Xây dựng hàm để sắp xếp danh sách products tăng dần và in ra mảng đã được sắp xếp ra ngoài màn hình
 */

let products = [
  {
    id: 1,
    product_name: "Sony Xperia",
    price: 100,
  },
  {
    id: 2,
    product_name: "Samsung Galaxy",
    price: 200,
  },
  {
    id: 3,
    product_name: "Nokia 6",
    price: 150,
  },
  {
    id: 4,
    product_name: "Xiaomi Redmi Note 4",
    price: 180,
  },
  {
    id: 5,
    product_name: "Apple iPhone 6S",
    price: 300,
  },
  {
    id: 6,
    product_name: "Sony Xperia XZ",
    price: 250,
  },
];
function sortProducts(products) {
  let sortedProducts = products.sort((a, b) => a.price - b.price);
  console.log(sortedProducts);
}
sortProducts(products);
