const crypto = require('crypto');

module.exports = (password, salt) => crypto.pbkdf2Sync(password, salt, 2030, 64, 'sha512').toString('Hex');
