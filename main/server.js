const express = require('express');
const app = express();
const port = 3000;

// Kayıt işlemi
app.get('/signup', (req, res) => {
  const username = req.query.username;  // URL parametresi olarak gelen kullanıcı adı
  const password = req.query.password;  // URL parametresi olarak gelen şifre

  if (username && password) {
    res.send('Kayıt başarılı! Kullanıcı Adı: ' + username + ', Şifre: ' + password);
  } else {
    res.status(400).send('Eksik veri! Kullanıcı adı ve şifre gereklidir.');
  }
});

// Giriş işlemi
app.get('/login', (req, res) => {
  const username = req.query.username;  // URL parametresi olarak gelen kullanıcı adı
  const password = req.query.password;  // URL parametresi olarak gelen şifre

  if (username && password) {
    res.send('Giriş başarılı! Kullanıcı Adı: ' + username + ', Şifre: ' + password);
  } else {
    res.status(400).send('Eksik veri! Kullanıcı adı ve şifre gereklidir.');
  }
});

// Sunucu başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
