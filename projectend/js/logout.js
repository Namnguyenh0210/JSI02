import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

let button = document.getElementById("logout")

button.onclick = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        alert("Đang xuất thành công")
        window.location.href = "../html/login1.html"
    }).catch((error) => {
        alert("Đăng xuất thất bại")
        console.log(error);
    });
}
