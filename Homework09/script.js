/* [Bài tập] Quản lý danh bạ
1. Mục tiêu
Luyện tập sử dụng đối tượng.
Luyện tập mảng và function và biết cách kết hợp giữa chúng
2. Mô tả
Tạo một đối tượng Contact đại diện cho một liên lạc, với các thuộc tính như name (tên), phone (số điện thoại), và email (địa chỉ email).
Tạo một mảng contacts chứa nhiều đối tượng Contact để đại diện cho một danh bạ.
Viết một hàm addContact(name, phone, email) để thêm một liên lạc mới vào danh bạ. Hàm này sẽ tạo một đối tượng Contact từ thông tin được truyền vào và thêm vào mảng contacts. (dữ liệu lấy từ bàn phím)
Viết một hàm findContactByName(name) để tìm kiếm và trả về một liên lạc dựa trên tên. Nếu không tìm thấy, trả về thông báo “Không tìm thấy liên hệ”.
Viết một hàm displayContacts() để in ra thông tin của tất cả các liên lạc trong danh bạ.
Viết một hàm deleteContactByName(name) để xóa một liên lạc dựa trên tên khỏi danh bạ.
Viết một hàm updateContactByName(name, updatedInfo) để cập nhật thông tin của một liên lạc dựa trên tên.
 */
let contact = {
  name: "",
  phone: "",
  email: "",
};
let contacts = [
  {
    name: "Tony Stark",
    phone: "0912323232",
    email: "ironman@gmai.com",
  },
  {
    name: "Captain America",
    phone: "0971231233",
    email: "captain@gmai.com",
  },
];
// chức năng addContact cho người dùng nhập thông tin liên hệ mới bằng promt
function addContact(name, phone, email) {
  let newContact = {
    name: name,
    phone: phone,
    email: email,
  };
  contacts.push(newContact);
}
// chức năng findContactByName cho người dùng nhập tên liên hệ cần tìm
function findContactByName(name) {
  let foundContact = contacts.find(function (contact) {
    return contact.name === name;
  });
  if (foundContact) {
    console.log(foundContact);
  } else {
    console.log("Không tìm thấy liên hệ");
  }
}
// chức năng displayContacts in ra toàn bộ danh sách liên hệ
function displayContacts() {
  for (let i = 0; i < contacts.length; i++) {
    console.log(contacts[i]);
  }
}
// chức năng deleteContactByName cho người dùng nhập tên liên hệ cần xóa
function deleteContactByName(name) {
  let index = contacts.findIndex(function (contact) {
    return contact.name === name;
  });
  if (index !== -1) {
    contacts.splice(index, 1);
  } else {
    console.log("Không tìm thấy liên hệ");
  }
}
// chức năng updateContactByName cho người dùng nhập tên liên hệ cần cập nhật và thông tin mới
function updateContactByName(name, updatedInfo) {
  let index = contacts.findIndex(function (contact) {
    return contact.name === name;
  });
  if (index !== -1) {
    contacts[index] = updatedInfo;
  } else {
    console.log("Không tìm thấy liên hệ");
  }
}
// chức năng cho người dùng nhập vào lựa chọn C/R/U/D

while (true) {
  let choice = prompt("Enter your choice: C/R/U/D");
  if (choice === "C") {
    let name = prompt("Enter your name: ");
    let phone = prompt("Enter your phone: ");
    let email = prompt("Enter your email: ");
    addContact(name, phone, email);
    displayContacts();
  } else if (choice === "R") {
    let name = prompt("Enter your name: ");
    findContactByName(name);
  } else if (choice === "D") {
    displayContacts();
  } else if (choice === "U") {
    let name = prompt("Enter your name: ");
    let phone = prompt("Enter your phone: ");
    let email = prompt("Enter your email: ");
    let updatedInfo = {
      name: name,
      phone: phone,
      email: email,
    };
    updateContactByName(name, updatedInfo);
    displayContacts();
  } else {
    break;
  }
}
