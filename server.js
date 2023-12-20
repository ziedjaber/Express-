const express = require('express');
const app = express();
const port = 3000;

// Middleware to verify the time of the request
app.use((req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hours = date.getHours();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours < 17) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
});
// Définir le dossier "public" comme dossier statique
app.use(express.static('public'));

// Route handlers
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  
  app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
  });
  
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
  });
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
