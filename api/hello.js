// api/hello.js

module.exports = (req, res) => {
  const contacts = require('../contacts.json');
  res.status(200).json(contacts);
};
