import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
// them du lieu (create)

 // export dung de lien ket giua cac trang
export function writeUserData(infouser) {
  const db = getDatabase();// ket noi voi database
  set(ref(db, 'users/' + infouser.uid), {
    username: infouser.username,
    email: infouser.email,
    img : "https://firebasestorage.googleapis.com/v0/b/login1-1f307.appspot.com/o/user%2Fdefault.jpeg?alt=media&token=7d3aeb1a-7e2b-4c24-8f2e-9b263d5e05c7",
    
  });
  console.log(infouser);
  alert("dang ky thanh cong")
  document.getElementById("signUp").classList.remove("right-panel-active")
}
// lay du lieu theo id nguoi dung

