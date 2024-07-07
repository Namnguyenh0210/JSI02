import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { writeUserData } from "./user.js";
// dang ky
const signUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            let infouser = {
                "uid" : user.uid,
                "username": document.getElementById("nameSignup").value,
                "email":user.email,
            }
          await  writeUserData(infouser)
            alert("Đăng ký thành công");
            window.location.href = "../html/home.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Đăng ký thất bại");
            console.log(errorCode, errorMessage);
        });
};
// dang nhap
const signIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Đăng nhập thành công ");
            window.location.href = "../html/home.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Vui lòng kiểm tra lại tài khoản và mật khẩu");
        });
};

let formSignup = document.getElementById("signUpButton");
let formSignin = document.getElementById("signInButton");

formSignup.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("nameSignup").value;
    let email = document.getElementById("emailSinup").value;
    let password = document.getElementById("passwordSignup").value;
    let respass = document.getElementById("respass").value;
    if ((password == respass)) {
        signUp(email, password);
    } else {
        alert(" Vui lòng kiêm tra lại mật khẩu ");
    }
});

formSignin.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("emailSinin").value;
    let password = document.getElementById("passwordSignin").value;
    signIn(email, password)

});
