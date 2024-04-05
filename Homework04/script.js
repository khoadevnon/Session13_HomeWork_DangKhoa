/* [Bài tập] Thuộc tính trong đối tượng
1. Mục tiêu
Luyện tập sử dụng đối tượng.
2. Mô tả
Viết chương trình khai báo đối tượng product bao gồm các thuộc tính id, name, price, quantity. Tiến hành in tất cả các thuộc tính của product và giá trị của thuộc tính đó ra màn hình.
 */
let product = {
  id: "",
  name: "",
  price: "",
  quantity: "",
};
let id = prompt("Enter your ID: ");
let name = prompt("Enter your name: ");
let price = prompt("Enter your price: ");
let quantity = prompt("Enter your quantity: ");
product.id = id;
product.name = name;
product.price = price;
product.quantity = quantity;
console.log(product);
