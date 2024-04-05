/* [Bài tập] Làm quen với đối tượng
1. Mục tiêu
Luyện tập sử dụng đối tượng.
2. Mô tả
Viết chương trình khai báo đối tượng information có các thuộc tính id, name, phone, address. Yêu cầu người dùng nhập vào thông tin cá nhân, lưu thông tin nhận được vào đối tượng và in ra màn hình.
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
console.log(information);
