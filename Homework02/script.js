/* [Bài tập] Xóa thuộc tính và thêm thuộc tính
1. Mục tiêu
Luyện tập sử dụng đối tượng.
2. Mô tả
Viết chương trình khai báo đối tượng information có các thuộc tính id, name, phone, address. Tiến hành xóa thuộc tính address và thêm thuộc tính email cho đối tượng và in đối tượng ra màn hình.
 */
let information = {
  id: "",
  name: "",
  phone: "",
  address: "",
};
let id = prompt("Enter your ID: ");
let name = prompt("Enter your name: ");
let phone = prompt("Enter your phone: ");
let address = prompt("Enter your address: ");
information.id = id;
information.name = name;
information.phone = phone;
information.address = address;
delete information.address;
information.email = "";
let email = prompt("Enter your email: ");
information.email = email;
console.log(information);
