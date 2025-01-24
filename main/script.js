// Kayıt formu işleyicisi
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun otomatik gönderilmesini engelle

  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;
  var errorMessage = "";

  // Verileri kontrol et
  if (username === "" || password === "") {
    errorMessage = "Kullanıcı adı ve şifre alanları boş bırakılamaz!";
  } else if (username.length < 5) {
    errorMessage = "Kullanıcı adı en az 5 karakter olmalıdır!";
  } else if (password.length < 6) {
    errorMessage = "Şifre en az 6 karakter olmalıdır!";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    return false; // Formu gönderme
  }

  // Verileri URL parametreleri olarak GET isteğiyle gönder
  var formAction = document.getElementById("signupForm").action;
  var url = formAction + "?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);

  // Yeni URL ile yönlendirme (GET isteği)
  window.location.href = url; // Tarayıcıyı bu URL'ye yönlendir
});

// Giriş formu işleyicisi
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun otomatik gönderilmesini engelle

  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;
  var errorMessage = "";

  // Verileri kontrol et
  if (username === "" || password === "") {
    errorMessage = "Kullanıcı adı ve şifre alanları boş bırakılamaz!";
  } else if (username.length < 5) {
    errorMessage = "Kullanıcı adı en az 5 karakter olmalıdır!";
  } else if (password.length < 6) {
    errorMessage = "Şifre en az 6 karakter olmalıdır!";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    return false; // Formu gönderme
  }

  // Verileri URL parametreleri olarak GET isteğiyle gönder
  var formAction = document.getElementById("loginForm").action;
  var url = formAction + "?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);

  // Yeni URL ile yönlendirme (GET isteği)
  window.location.href = url; // Tarayıcıyı bu URL'ye yönlendir
});

