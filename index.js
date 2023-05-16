// Bài 1 Quản lý tuyển sinh

function quanLiTuyenSinh() {
  // lấy dữ liệu đàu vào
  var diemChuan = document.getElementById("diemChuan").value * 1;
  console.log(diemChuan);
  var khuVuc = document.getElementById("chonKhuVuc").value;
  console.log(khuVuc);
  var doiTuong = document.getElementById("chonDoiTuong").value;
  console.log(doiTuong);
  var diemMon1 = document.getElementById("diemMon1").value * 1;
  console.log(diemMon1);
  var diemMon2 = document.getElementById("diemMon2").value * 1;
  console.log(diemMon2);
  var diemMon3 = document.getElementById("diemMon3").value * 1;
  console.log(diemMon3);
  // xử lý dữ liệu và xuất kết quả
  var diemKhuVuc = chonKhuVuc(khuVuc);
  var diemDoiTuong = chonDoiTuong(doiTuong);

  var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemDoiTuong + diemKhuVuc;
  console.log(tongDiem);
  var kq = "";
  if (tongDiem < diemChuan) {
    kq += "Bạn Đã RỚt. Tổng Điểm: " + tongDiem;
  } else kq += "Bạn Đã Đạu. Tổng Điểm: " + tongDiem;
  document.getElementById("hienKetQua").innerHTML = kq;
}

function chonKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "a":
      return 2;
    case "b":
      return 1;
    case "c":
      return 0.5;
    case "":
      return 0;
  }
}
function chonDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    case "":
      return 0;
  }
}

//Bài 2 Tính Tiền Điện

function tinhTienDien() {
  // lấy dữ liệu người đùng input
  var hoTen = document.getElementById("hoTen").value;
  var soKW = document.getElementById("soKw").value * 1;
  console.log(soKW);
  //xử lý
  var tongTien = 0;
  if (0 < soKW && soKW <= 50) {
    tongTien = soKW * 500;
  } else if (50 < soKW && soKW <= 100) {
    tongTien = 50 * 500 + (soKW - 50) * 650;
  } else if (100 < soKW && soKW <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW > 200 && soKW <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  //xuất kết quả output
  document.getElementById("hienKetQua1").innerHTML =
    "Họ Tên: " + hoTen + "; Tiền Điện: " + tongTien;
}

//Bài 3 Tính Thuế Thu Nhập cá nhân

function tinhThue() {
  //lấy dữ liệu
  var hoTen = document.getElementById("hoTen1").value;
  var tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  //xử lý
  var thuNhapChuaThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  var tienThue = 0;
  if (thuNhapChuaThue <= 60e6 && thuNhapChuaThue > 0) {
    tienThue = thuNhapChuaThue * 0.05;
  } else if (thuNhapChuaThue > 60e6 && thuNhapChuaThue <= 120e6) {
    tienThue = thuNhapChuaThue * 0.1;
  } else if (thuNhapChuaThue > 120e6 && thuNhapChuaThue <= 210e6) {
    tienThue = thuNhapChuaThue * 0.15;
  } else if (thuNhapChuaThue > 210e6 && thuNhapChuaThue <= 384e6) {
    tienThue = thuNhapChuaThue * 0.2;
  } else if (thuNhapChuaThue > 384e6 && thuNhapChuaThue <= 624e6) {
    tienThue = thuNhapChuaThue * 0.25;
  } else if (thuNhapChuaThue > 624e6 && thuNhapChuaThue <= 960e6) {
    tienThue = thuNhapChuaThue * 0.3;
  } else if (thuNhapChuaThue >= 960e6) {
    tienThue = thuNhapChuaThue * 0.35;
  }
  document.getElementById("hienKetQua3").innerHTML =
    "Họ Tên: " +
    hoTen +
    "; Tiền thuế cá nhân: " +
    Intl.NumberFormat().format(tienThue);
}
