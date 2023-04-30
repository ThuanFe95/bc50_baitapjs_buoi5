/**
 * Bài tập 1
 */

function tong3Mon(diemMon1, diemMon2, diemMon3){
    var total = diemMon1 + diemMon2 + diemMon3;
    return total;
}

function clickBtnKetQua(){
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var diemMon1 = document.getElementById("diemMon1").value * 1;
    var diemMon2 = document.getElementById("diemMon2").value * 1;
    var diemMon3 = document.getElementById("diemMon3").value * 1;
    var ketQua = "";

    var total = tong3Mon(diemMon1, diemMon2, diemMon3) + khuVuc + doiTuong;

    while (diemMon1 != 0 && diemMon2 != 0 && diemMon3 !=0) {
        if(total < diemChuan){
            ketQua = "Bạn đã rớt. ";
        }else if(total >= diemChuan){
            ketQua = "Bạn đã đậu. ";
        }else if(total < 0){
            alert("Vui lòng nhập điểm hợp lệ")
        }
        
        break;
    }

    var result = "<div class = 'alert alert-success'>" + ketQua + "Tổng điểm: " + total + "</div>"
    document.getElementById("footerTuyenSinh").innerHTML = result;
}

/**
 * Bài tập 2
 */

const TIEN_KW_1 = 500;
const TIEN_KW_2 = 650;
const TIEN_KW_3 = 850;
const TIEN_KW_4 = 1100;
const TIEN_KW_5 = 1300;

var tienKw_1 = 0;
var tienKw_2 = 0;
var tienKw_3 = 0;
var tienKw_4 = 0;
var tienKw_5 = 0;
var tonngTien = 0;

function getEle(id){
    return document.getElementById(id);
}

function tinhTienKw1(soKw, tienKw){
    return soKw * tienKw;
}

function tinhTienKw2(soKw, tienKw){
    return (soKw - 50) * tienKw;
}

function tinhTienKw3(soKw, tienKw){
    return (soKw - 100) * tienKw;
}

function tinhTienKw4(soKw, tienKw){
    return (soKw - 200) * tienKw;
}

function tinhTienKw5(soKw, tienKw){
    return (soKw - 350) * tienKw;
}


function clickBtnTinhTienDien(){
    var hoVaTen = getEle("hoVaTen").value;
    var soKw = getEle("soKw").value * 1;

    if(1 <= soKw && soKw <= 50){
        tienKw_1 = tinhTienKw1(soKw, TIEN_KW_1);
        tonngTien = tienKw_1;
    }else if(50 < soKw && soKw <= 100){
        tienKw_1 = tinhTienKw1(50, TIEN_KW_1);
        tienKw_2 = tinhTienKw2(soKw, TIEN_KW_2);
        tonngTien = tienKw_1 + tienKw_2;
    }else if(100 < soKw && soKw <= 200){
        tienKw_1 = tinhTienKw1(50, TIEN_KW_1);
        tienKw_2 = tinhTienKw2(100, TIEN_KW_2);
        tienKw_3 = tinhTienKw3(soKw, TIEN_KW_3);
        tonngTien = tienKw_1 + tienKw_2 + tienKw_3;
    }else if(200 < soKw && soKw <= 350){
        tienKw_1 = tinhTienKw1(50, TIEN_KW_1);
        tienKw_2 = tinhTienKw2(100, TIEN_KW_2);
        tienKw_3 = tinhTienKw3(200, TIEN_KW_3);
        tienKw_4 = tinhTienKw4(soKw, TIEN_KW_4);
        tonngTien = tienKw_1 + tienKw_2 + tienKw_3 + tienKw_4;
    }else if(350 < soKw){
        tienKw_1 = tinhTienKw1(50, TIEN_KW_1);
        tienKw_2 = tinhTienKw2(100, TIEN_KW_2);
        tienKw_3 = tinhTienKw3(200, TIEN_KW_3);
        tienKw_4 = tinhTienKw4(350, TIEN_KW_4);
        tienKw_5 = tinhTienKw5(soKw, TIEN_KW_5);
        tonngTien = tienKw_1 + tienKw_2 + tienKw_3 + tienKw_4 + tienKw_5;
    }else{
        alert("Vui lòng nhập số KW");
    }

    getEle("footerTienDien").style.display = "block";
    getEle("xuatTien").innerHTML = tonngTien;
}