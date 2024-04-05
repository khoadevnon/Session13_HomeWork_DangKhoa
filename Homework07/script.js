/* [Bài tập] Validate dữ liệu đầu vào
1. Mục tiêu
Luyện tập sử dụng đối tượng.
Nắm được các nghiệp vụ validate dữ liệu
2. Mô tả
Tạo một mảng users là một mảng trống. 
Lấy thông tin từ người dùng để tạo đối tượng user gồm các thông tin sau: id, user_name, email, password
Tiến hành validate dữ liệu
Tên, email và mật khẩu không được để trống
Tên không được ngắn hơn 3 ký tự
Email đúng định dạng
Mật khẩu tối thiểu 8 ký tự
Nếu các dữ liệu nhập vào không thỏa mãn thì yêu cầu người dùng nhập lại dữ liệu
Nếu các dữ liệu nhập vào thỏa mãn điều kiện thì thêm đối tượng vào trong mảng
 */
let users = [];
let user = {
  id: "",
  user_name: "",
  email: "",
  password: "",
};
let id = prompt("Enter your ID: ");
let user_name = prompt("Enter your user name: ");
let email = prompt("Enter your email: ");
let password = prompt("Enter your password: ");
user.id = id;
user.user_name = user_name;
user.email = email;
user.password = password;
while (
  user.user_name.length < 3 ||
  user.email.indexOf("@") == -1 ||
  user.password.length < 8
) {
  alert("Invalid input. Please enter again.");
  user.user_name = prompt("Enter your user name: ");
  user.email = prompt("Enter your email: ");
  user.password = prompt("Enter your password: ");
}
users.push(user);
console.log(users);
