const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));  // URL-encoded verileri işlemek için
app.use(express.json());  // JSON verileri işlemek için

// POST isteği işleyici
app.post('/main/onay', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  // Verileri kontrol etme ve işleme
  if (username && password) {
    res.send('Veriler alındı: ' + username + ', ' + password);
  } else {
    res.status(400).send('Veriler eksik!');
  }
});

// Sunucu başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});

