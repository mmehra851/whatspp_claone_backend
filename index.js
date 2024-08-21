const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('WhatsApp Chatbot Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
