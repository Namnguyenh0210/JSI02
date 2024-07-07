// diolog
const dialog = document.getElementById("main");
const closeButton = document.getElementById("close");
const openButtons = document.querySelectorAll("#open .itemproduct");
const dialogImg = document.getElementById("dialog-img");
const dialogDetails = document.getElementById("dialog-details");
const dialogPrice = document.getElementById("dialog-price");

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const details = button.getAttribute("data-details");
        const price = button.getAttribute("data-price");
        const imgSrc = button.getAttribute("data-img");

        dialogImg.src = imgSrc;
        dialogDetails.textContent = details;
        dialogPrice.textContent = price;

        dialog.showModal();
    });
});

closeButton.addEventListener("click", () => {
    dialog.classList.add("close-animate");
    setTimeout(() => {
        dialog.close();
        dialog.classList.remove("close-animate");
    }, 300);
});





/* Lấy thời gian Tết Âm Lịch năm 2024 (mili giây) */
var tetAmLich = new Date(2024, 7, 10, 0, 0, 0).getTime();

function newYear() {
    /* Lấy thời gian ngày hiện tại (mili giây) */
    var ngayHienTai = new Date().getTime();

    /* Tính thời gian còn lại (mili giây) */
    var thoigianConLai = tetAmLich - ngayHienTai;

    /* Chuyển đơn vị thời gian tương ứng sang mili giây */
    var giay = 1000;
    var phut = giay * 60;
    var gio = phut * 60;
    var ngay = gio * 24;

    /* Tìm ra thời gian theo ngày, giờ, phút, giây còn lại */
    
    var h = Math.floor((thoigianConLai % ngay) / gio);
    var m = Math.floor((thoigianConLai % gio) / phut);
    var s = Math.floor((thoigianConLai % phut) / giay);

    /* Hiển thị kết quả ra các thẻ Div với ID tương ứng */
   
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}

/* Thiết lập hàm sẽ tự động chạy lại sau 1s */
setInterval(function () {
    newYear();
}, 1000);






