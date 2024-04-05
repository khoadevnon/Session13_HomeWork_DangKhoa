/* [Bài tập] Tính năng đăng ký và đăng nhập
1. Mục tiêu
Luyện tập sử dụng đối tượng.
2. Mô tả
Xây dựng một ứng dụng cho phép người dùng nhập các lựa chọn sau:
Nếu chọn 1: Thực hiện chức năng đăng ký tài khoản, đối tượng user thêm vào gồm các thông tin sau: id, user_name, email, password. Thực hiện validate dữ liệu: tên không được để trống, email phải đúng định dạng, mật khẩu phải dài tối thiểu 8 ký tự, email nhập vào không được phép trùng với email đã tồn tại trong mảng. Nếu các giá trị thêm vào thỏa mãn thì tiến hành thêm dữ liệu vào trong mảng
Nếu chọn 2: Thực hiện chức năng đăng nhập. Cho phép người dùng nhập vào email và password. Nếu email và password không khớp với thông tin của các user trong mảng thì thông báo “Đăng nhập thất bại” và yêu cầu người dùng nhập lại. Nếu email và password khớp với dữ liệu trong mảng thì thông báo “Đăng nhập thành công” và hiển thị thông tin của tài khoản vừa đăng nhập thành công ra ngoài màn hình
Nếu chọn 3: Thoát chương trình
 */
let users = [];
let user = {
  id: "",
  user_name: "",
  email: "",
  password: "",
};
let id = 0;
let user_name = "";
let email = "";
let password = "";
let choice = 0;
let check = false;
while (choice != 3) {
  choice = Number(prompt("1. Register\n2. Login\n3. Exit"));
  switch (choice) {
    case 1:
      id++;
      user.id = id;
      user.user_name = prompt("Enter your user name: ");
      user.email = prompt("Enter your email: ");
      user.password = prompt("Enter your password: ");
      while (
        user.user_name.length < 1 ||
        user.email.indexOf("@") == -1 ||
        user.password.length < 8
      ) {
        alert("Invalid input. Please enter again.");
        user.user_name = prompt("Enter your user name: ");
        user.email = prompt("Enter your email: ");
        user.password = prompt("Enter your password: ");
      }
      for (let i = 0; i < users.length; i++) {
        if (user.email == users[i].email) {
          alert("Email already exists. Please enter again.");
          check = true;
          break;
        }
      }
      if (check == false) {
        users.push(user);
      }
      break;
    case 2:
      email = prompt("Enter your email: ");
      password = prompt("Enter your password: ");
      for (let i = 0; i < users.length; i++) {
        if (email == users[i].email && password == users[i].password) {
          alert("Login successfully.");
          console.log(users[i]);
          check = true;
          break;
        }
      }
      if (check == false) {
        alert("Login failed. Please enter again.");
      }
      break;
    case 3:
      break;
    default:
      alert("Invalid choice. Please enter again.");
      break;
  }
}
