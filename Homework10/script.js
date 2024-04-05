/* [Bài tập] Xây dựng chức năng giỏ hàng
1. Mục tiêu
Luyện tập sử dụng đối tượng.
2. Mô tả
Tạo một đối tượng Product đại diện cho một sản phẩm, với các thuộc tính như name (tên sản phẩm), price (giá sản phẩm), và quantity (số lượng trong giỏ hàng).
Tạo một mảng shoppingCart chứa nhiều đối tượng Product để đại diện cho giỏ hàng mua sắm.
Viết một hàm addToCart(productName, price, quantity) để thêm một sản phẩm vào giỏ hàng. Nếu sản phẩm đã tồn tại trong giỏ hàng, chỉ cập nhật số lượng; nếu không, thêm sản phẩm mới vào giỏ hàng.
Viết một hàm removeFromCart(productName) để xóa một sản phẩm khỏi giỏ hàng.
Viết một hàm calculateTotal() để tính tổng giá trị của giỏ hàng dựa trên giá sản phẩm và số lượng.
Viết một hàm displayCart() để hiển thị thông tin chi tiết của giỏ hàng, bao gồm tên sản phẩm, giá, số lượng, và tổng giá trị cho từng sản phẩm.
Viết một hàm clearCart() để xóa tất cả sản phẩm khỏi giỏ hàng.
Gợi ý:
Khi thêm sản phẩm vào giỏ hàng, kiểm tra xem sản phẩm đã tồn tại chưa sử dụng find() hoặc findIndex().
Khi tính tổng giá trị giỏ hàng, lặp qua từng sản phẩm và tính tổng giá trị cho mỗi sản phẩm.
Sử dụng console.log() để hiển thị thông tin trong trình duyệt console
 */
// cho người dùng nhập vào thông tin sản phẩm
let product = {
  name: "",
  price: "",
  quantity: "",
};
let shoppingCart = [
  {
    name: "Iphone",
    price: 1000,
    quantity: 2,
  },
  {
    name: "Samsung",
    price: 500,
    quantity: 3,
  },
  {
    name: "Xiaomi",
    price: 700,
    quantity: 1,
  },
];
function addToCart(productName, price, quantity) {
  let foundProduct = shoppingCart.find(function (product) {
    return product.name === productName;
  });
  if (foundProduct) {
    foundProduct.quantity += quantity;
  } else {
    let newProduct = {
      name: productName,
      price: price,
      quantity: quantity,
    };
    shoppingCart.push(newProduct);
  }
}
function removeFromCart(productName) {
  let index = shoppingCart.findIndex(function (product) {
    return product.name === productName;
  });
  if (index !== -1) {
    shoppingCart.splice(index, 1);
  }
}
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  console.log(total);
}
function displayCart() {
  for (let i = 0; i < shoppingCart.length; i++) {
    console.log(
      `${i + 1}. ${shoppingCart[i].name} - ${shoppingCart[i].price} - ${
        shoppingCart[i].quantity
      } - ${shoppingCart[i].price * shoppingCart[i].quantity}`
    );
  }
}
function clearCart() {
  shoppingCart = [];
}
addToCart("Iphone", 1000, 1);
addToCart("Samsung", 500, 2);
addToCart("Xiaomi", 700, 3);
displayCart();
calculateTotal();
removeFromCart("Samsung");
displayCart();
calculateTotal();
clearCart();
displayCart();
calculateTotal();
