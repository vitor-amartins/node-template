module.exports = (requiredFields, body) => {
  const missingFields = [];

  requiredFields.forEach((field) => {
    if (body[field] === undefined) {
      missingFields.push(field);
    }
  });

  if (missingFields.length) {
    const message = {};
    missingFields.forEach((field) => {
      message[field] = 'Field required';
    });
    return message;
  }
  return null;
};
