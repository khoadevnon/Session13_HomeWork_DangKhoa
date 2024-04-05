/* [Bài tập] Sử dụng mảng đối tượng
1. Mục tiêu
Luyện tập sử dụng đối tượng.
2. Mô tả
Viết chương trình yêu cầu người dùng nhập vào số lượng sinh viên và thông tin của mỗi sinh viên. Đối tượng sinh viên chỉ có 2 thuộc tính id và name. Tất cả sinh viên sẽ được lưu vào một mảng, in mảng các sinh viên ra màn hình.
 */
let studentList = [];
let n = Number(prompt("Enter the number of students: "));
for (let i = 0; i < n; i++) {
  let student = {
    id: "",
    name: "",
  };
  let id = prompt("Enter your ID: ");
  let name = prompt("Enter your name: ");
  student.id = id;
  student.name = name;
  studentList.push(student);
}
console.log(studentList);
