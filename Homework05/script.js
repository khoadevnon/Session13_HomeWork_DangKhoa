/* [Bài tập] Tìm kiếm đối tượng trong mảng
1. Mục tiêu
Luyện tập sử dụng đối tượng.
Nắm được thuật toán tìm kiếm trong mảng
2. Mô tả
Viết chương trình khai báo mảng gồm nhiều đối tượng Book có hai thuộc tính author và name. Yêu cầu người dùng nhập tên Auth từ bàn phím thông qua hàm prompt(). Sau đó tiến hành tìm kiếm thông tin sách theo tác giả. Nếu tìm thấy thì in ra ngoài màn hình đối tượng Book  tìm được, nếu không tìm thấy thì in ra “Không tìm thấy sách” 
 */

let bookList = [
  {
    author: "Nguyen Nhat Anh",
    name: "Cho toi xin mot ve ve tuoi tho",
  },
  {
    author: "Nguyen Nhat Anh",
    name: "Toi thay hoa vang tren co xanh",
  },
  {
    author: "Nguyen Nhat Anh",
    name: "Mat biec",
  },
];
while (true) {
  let author = prompt("Enter the author you want to search: ");
  let isFound = false;
  for (let i = 0; i < bookList.length; i++) {
    if (author === bookList[i].author) {
      console.log(bookList[i]);
      isFound = true;
    }
  }
  if (isFound === false) {
    console.log("No book found");
  } else {
    break;
  }
}
