import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-storage.js";
// update img
document.getElementById("update").onclick = async () => {
    let file = document.getElementById("uploadsfile").files[0];
    console.log(file);

    const storage = getStorage();
    const storageRef = ref(storage, `images/${file.name}`);
   
    // Create file metadata including the content type
    /** @type {any} */
    const metadata = {
        contentType: "image/jpeg",
        // contentType: "video/mp4",

    };
  

    // Upload the file and metadata
    const uploadTask = await uploadBytes(storageRef, file, metadata);
    console.log(uploadTask);
    let url = await getDownloadURL(uploadTask.ref)
    console.log(url);
    alert("ban da day file len thanh cong")
    
    
}

