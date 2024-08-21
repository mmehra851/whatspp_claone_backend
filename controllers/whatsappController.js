const twilio = require('twilio');
const config = require('../config/config');

const client = twilio(config.accountSid, config.authToken);

const handleIncomingMessage = (req, res) => {
  const incomingMessage = req.body.Body || req.body.messages[0].text.body;
  const sender = req.body.From || req.body.messages[0].from;

  let replyMessage = 'Hello! How can I assist you today?';

  
  if (incomingMessage.toLowerCase().includes('hi')) {
    replyMessage = 'Hi there! How can I help you?';
  }

  client.messages.create({
    body: replyMessage,
    from: config.whatsappNumber,
    to: sender
  }).then(message => {
    res.status(200).send(message);
  }).catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

module.exports = { handleIncomingMessage };
