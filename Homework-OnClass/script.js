/* // Exercise Tổng hợp

// Array + Object

// Viết một ứng dụng quản lý danh sách điện thoại (danh bạ)
// phoneList

const phoneList = [
    {
        name: "Tony Stark",
        phone: "0912323232",
    }, 
    {
        name: "Captain America",
        phone: "0971231233"
    }
]

// Cho phép người dùng nhập vào 4 chữ cái C/R/U/D
// C -- Cho người dùng nhập vào tên của đối tượng contact
// muốn thêm mới vào danh bạ
//   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
// danh bạ hay chưa
//   -- Nếu chưa thì tiếp tục cho người dùng nhập vào số điện thoại
// của đối tượng contact đang muốn thêm mới
//   -- Tiến hành thêm mới đối tượng contact đó {name, phone} vào
// trong mảng phoneList
//   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
// đã được thêm mới 1 phần tử contact theo dạng
// 1. Tony - 09809485435
// 2. Captain America - 093402394
// ...

// R -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
// theo dạng
// 1. Tony - 09809485435
// 2. Captain America - 093402394

// U -- Cho người dùng nhập vào tên của contact đang muốn chỉnh sửa số điện
// thoại.
//   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
// phoneList hay chưa
//   -- Nếu tìm thấy thì tiến hành cho người dùng nhập vào giá trị
// phone mới muốn cập nhật cho phần tử contact vừa tìm thấy
//   -- Tiến hành cập nhật
//   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
// đã được cập nhât phần tử contact vừa tìm thấy theo dạng
// 1. Tony - 09809485435
// 2. Captain America - 093402394

// D -- Cho người dùng nhập vào tên của contact đang muốn xoá đi
//   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
// phoneList hay chưa
//   -- Nếu tìm thấy thì tiến hành xoá phần tử contact vừa tìm thấy đi khỏi
// mảng phoneList
//   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
// đã được xoá phần tử contact vừa tìm thấy theo dạng
// 1. Tony - 09809485435
// 2. Captain America - 093402394

// E -- Thoát khỏi chương trình
// NOTE: Chương trình phải là một vòng lặp vĩnh cửu và sẽ được
// dừng lại cho đến khi người dùng nhập vào chữ cái E */

const phoneList = [
  {
    name: "Tony Stark",
    phone: "0912323232",
  },
  {
    name: "Captain America",
    phone: "0971231233",
  },
];
while (true) {
  let input = prompt("Enter C/R/U/D/E: ");
  if (input === "C") {
    let name = prompt("Enter name: ");
    let phone = prompt("Enter phone: ");
    let isExist = phoneList.find(function (contact) {
      return contact.name === name;
    });
    if (isExist) {
      console.log("Contact already exists");
    } else {
      let newContact = {
        name: name,
        phone: phone,
      };
      phoneList.push(newContact);
      for (let i = 0; i < phoneList.length; i++) {
        console.log(`${i + 1}. ${phoneList[i].name} - ${phoneList[i].phone}`);
      }
    }
  } else if (input === "R") {
    for (let i = 0; i < phoneList.length; i++) {
      console.log(`${i + 1}. ${phoneList[i].name} - ${phoneList[i].phone}`);
    }
  } else if (input === "U") {
    let name = prompt("Enter name: ");
    let isExist = phoneList.find(function (contact) {
      return contact.name === name;
    });
    if (isExist) {
      let phone = prompt("Enter new phone: ");
      isExist.phone = phone;
      for (let i = 0; i < phoneList.length; i++) {
        console.log(`${i + 1}. ${phoneList[i].name} - ${phoneList[i].phone}`);
      }
    } else {
      console.log("Contact does not exist");
    }
  } else if (input === "D") {
    let name = prompt("Enter name: ");
    let index = phoneList.findIndex(function (contact) {
      return contact.name === name;
    });
    if (index !== -1) {
      phoneList.splice(index, 1);
      for (let i = 0; i < phoneList.length; i++) {
        console.log(`${i + 1}. ${phoneList[i].name} - ${phoneList[i].phone}`);
      }
    } else {
      console.log("Contact does not exist");
    }
  } else if (input === "E") {
    break;
  }
}
