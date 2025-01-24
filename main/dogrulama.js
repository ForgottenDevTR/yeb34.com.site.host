document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun otomatik submit olmasını engelle

  // Kullanıcı adı ve şifre inputlarını al
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  // Hata mesajını sıfırlayalım
  errorMessage.innerHTML = "";

  // Giriş doğrulama
  if (username === "" || password === "") {
    errorMessage.innerHTML = "Kullanıcı adı ve şifre alanları boş bırakılamaz!";
    return false; // Formu gönderme
  }

  // Kullanıcı adı ve şifre doğrulaması
  if (username.length < 5) {
    errorMessage.innerHTML = "Kullanıcı adı en az 5 karakter olmalıdır!";
    return false;
  }

  if (password.length < 6) {
    errorMessage.innerHTML = "Şifre en az 6 karakter olmalıdır!";
    return false;
  }

  // Her şey doğruysa, formu gönder
  alert("Giriş başarılı!");
  // Burada formu sunucuya gönderebiliriz. (Örnek: form.submit();)
});
