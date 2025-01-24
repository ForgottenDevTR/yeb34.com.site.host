// script.js

// Formun submit olayını yakala
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun varsayılan olarak gönderilmesini engelle

  // Kullanıcı adı ve şifreyi al
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Hata mesajını sıfırlayalım
  var errorMessage = "";

  // Kullanıcı adı ve şifre doğrulama
  if (username === "" || password === "") {
    errorMessage = "Kullanıcı adı ve şifre alanları boş bırakılamaz!";
  } else if (username.length < 5) {
    errorMessage = "Kullanıcı adı en az 5 karakter olmalıdır!";
  } else if (password.length < 6) {
    errorMessage = "Şifre en az 6 karakter olmalıdır!";
  }

  // Eğer hata mesajı varsa, göster ve formu gönderme
  if (errorMessage !== "") {
    alert(errorMessage);
    return false; // Formu gönderme
  }

  // Hata yoksa, formu gönder
  document.getElementById("loginForm").submit();
});
